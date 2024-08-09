// ThreeDScene.tsx
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { Mesh } from 'three';

const Table: React.FC = () => {
  return (
    <mesh position={[0, -0.5, 0]}>
      <boxGeometry args={[5, 0.2, 3]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  );
};

const HoverableObject: React.FC<{ position: [number, number, number]; onClick: () => void; color: string; label: string }> = ({
  position,
  onClick,
  color,
  label,
}) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered) {
        meshRef.current.scale.set(1.2, 1.2, 1.2);
      } else {
        meshRef.current.scale.set(1, 1, 1);
      }
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 0.1, 0.6]} />
        <meshStandardMaterial color={color} emissive={hovered ? '#555' : 'black'} />
      </mesh>
      <Text position={[position[0], position[1] + 0.8, position[2]]} fontSize={0.2} color="white">
        {label}
      </Text>
    </group>
  );
};

const ThreeDScene: React.FC = () => {
  const [showSoftwareInfo, setShowSoftwareInfo] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  const handleLaptopClick = () => {
    setShowSoftwareInfo(!showSoftwareInfo);
  };

  const handleFrameClick = () => {
    setShowCertifications(!showCertifications);
  };

  const handleResumeClick = () => {
    const link = document.createElement('a');
    link.href = '/path/to/your/resume.pdf'; // Replace with actual path
    link.download = 'My_Resume.pdf';
    link.click();
  };

  return (
    <Canvas style={{ height: '500px' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
      <Table />
      <HoverableObject position={[0, 0.1, 0]} onClick={handleLaptopClick} color="#0000FF" label="Click Here for Software Info" />
      <HoverableObject position={[0, 2, -2]} onClick={handleFrameClick} color="#FFFFFF" label="Click Here for Certifications" />
      <HoverableObject position={[1.5, 0.1, 1]} onClick={handleResumeClick} color="#DDDDDD" label="Click Here to Download Resume" />
      <OrbitControls />

      {/* Software Info Popup */}
      {showSoftwareInfo && (
        <group position={[0, 2.5, 0]}>
          <Text fontSize={0.3} color="black" maxWidth={2} lineHeight={1}>
            Software & Languages: Python, JavaScript, TypeScript, C#, CSS, Redux, etc.
          </Text>
        </group>
      )}

      {/* Certifications Popup */}
      {showCertifications && (
        <group position={[0, 3.5, -2]}>
          <Text fontSize={0.3} color="black" maxWidth={2} lineHeight={1}>
            Certifications: AWS Certified, Microsoft Certified, etc.
          </Text>
        </group>
      )}
    </Canvas>
  );
};

export default ThreeDScene;



