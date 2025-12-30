import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Sparkles, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLOBAL_PRESENCE } from '../data';

// Fix for JSX Intrinsic Elements in React Three Fiber
// Augmenting React's JSX namespace to support R3F elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshPhysicalMaterial: any;
      meshBasicMaterial: any;
      sphereGeometry: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      fog: any;
    }
  }
}

// Also ensure global JSX is augmented if using older TS/React setups
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshPhysicalMaterial: any;
      meshBasicMaterial: any;
      sphereGeometry: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      fog: any;
    }
  }
}

// --- MATERIALS ---
const GOLD_COLOR = new THREE.Color('#C5A059');
const ACCENT_COLOR = new THREE.Color('#D4AF37');

// --- HELPER FUNCTIONS ---
// Convert Lat/Lng to 3D Cartesian Coordinates on a sphere
const latLngToVector3 = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
};

// --- COMPONENTS ---

const NeuralCoreGeometry = (props: any) => {
  const meshRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Slow, purposeful rotation
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    
    // Breathing scale effect
    const breathing = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
    if (coreRef.current) coreRef.current.scale.setScalar(breathing);
  });

  return (
    <group ref={meshRef} {...props}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Outer Glass Shell */}
        <mesh>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshPhysicalMaterial 
            color="#111" 
            roughness={0.1} 
            metalness={0.8} 
            transmission={0.6} 
            thickness={2} 
            envMapIntensity={2}
            clearcoat={1}
          />
        </mesh>

        {/* Inner Gold Wireframe Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshBasicMaterial color={GOLD_COLOR} wireframe transparent opacity={0.3} />
        </mesh>
        
        {/* Glowing Central Point */}
        <mesh>
           <sphereGeometry args={[0.2, 16, 16]} />
           <meshBasicMaterial color={ACCENT_COLOR} />
        </mesh>

        {/* Orbital Particles */}
        <Sparkles count={40} scale={4} size={2} speed={0.4} opacity={0.5} color={GOLD_COLOR} />
      </Float>
    </group>
  );
};

const InteractiveParticles = ({ count = 300 }) => {
  const mesh = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  // Initialize particles with random positions
  const [positions, originalPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 12; // Wider spread
      const z = (Math.random() - 0.5) * 10;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    
    return [positions, originalPositions];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    // Convert normalized mouse coordinates (-1 to 1) to world units
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];
      
      // Distance calculation
      const dx = mouseX - positions[i3];
      const dy = mouseY - positions[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Interaction Logic: Repel particles when mouse is close
      const forceRadius = 4;
      let ix = 0, iy = 0;
      
      if (dist < forceRadius) {
         const force = (forceRadius - dist) / forceRadius;
         const angle = Math.atan2(dy, dx);
         // Push away factor
         const pushStrength = 3; 
         ix = -Math.cos(angle) * force * pushStrength;
         iy = -Math.sin(angle) * force * pushStrength;
      }

      // Physics: Smooth return to origin + continuous wave motion
      // The 0.05 factor controls the "viscosity" or return speed
      positions[i3] += (ox + ix - positions[i3]) * 0.05;
      positions[i3 + 1] += (oy + iy - positions[i3 + 1]) * 0.05;
      
      // Z-axis wave movement unrelated to mouse for depth aliveness
      positions[i3 + 2] = oz + Math.sin(time * 0.3 + ox) * 0.8;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#C5A059"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const GlobeWithMarkers = () => {
    const globeRadius = 1.8;
    const pointsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if(pointsRef.current) {
            // Pulse effect for markers
            const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
            pointsRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group>
            {/* Dark Tech Globe */}
            <mesh>
                <sphereGeometry args={[globeRadius, 64, 64]} />
                <meshPhysicalMaterial 
                    color="#050505"
                    roughness={0.6}
                    metalness={0.2}
                    emissive="#111"
                    emissiveIntensity={0.2}
                />
            </mesh>
            
            {/* Wireframe Overlay */}
            <mesh>
                 <sphereGeometry args={[globeRadius + 0.01, 24, 24]} />
                 <meshBasicMaterial 
                    color="#333" 
                    wireframe 
                    transparent 
                    opacity={0.15} 
                />
            </mesh>

            {/* Glowing Atmosphere */}
             <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[globeRadius, 32, 32]} />
                <meshBasicMaterial 
                    color={GOLD_COLOR} 
                    transparent 
                    opacity={0.05} 
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Location Markers */}
            <group ref={pointsRef}>
                {GLOBAL_PRESENCE.map((location, i) => {
                    const pos = latLngToVector3(location.lat, location.lng, globeRadius + 0.02);
                    return (
                        <group key={i} position={pos}>
                            <mesh>
                                <sphereGeometry args={[0.03, 8, 8]} />
                                <meshBasicMaterial color={ACCENT_COLOR} />
                            </mesh>
                            {/* Outer Glow Ring */}
                            <mesh>
                                <sphereGeometry args={[0.06, 8, 8]} />
                                <meshBasicMaterial color={GOLD_COLOR} transparent opacity={0.3} />
                            </mesh>
                        </group>
                    )
                })}
            </group>
        </group>
    )
}

// --- SCENES ---

export const HeroScene = () => {
  return (
    <Canvas className="w-full h-full" dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#fff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={GOLD_COLOR} />
        
        <NeuralCoreGeometry position={[1.5, 0, 0]} /> 
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  );
};

export const NetworkScene = () => {
    return (
        <Canvas className="w-full h-full" dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <InteractiveParticles count={400} />
            <fog attach="fog" args={['#000000', 5, 25]} />
        </Canvas>
    )
}

export const WorldGlobe = () => {
    return (
        <Canvas className="w-full h-full" dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
            <PerspectiveCamera makeDefault position={[0, 0, 4.5]} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
            <pointLight position={[-10, 0, -5]} intensity={0.5} color={GOLD_COLOR} />
            
            <GlobeWithMarkers />
            
            <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={1.0} 
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1