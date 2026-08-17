import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";


// ===============================
// TEXTURES
// ===============================

const textureLoader = new THREE.TextureLoader();

const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/shahin.webp",
  "/images/mongo.webp",
  "/images/shahin.webp",
  "/images/typescript.webp",
  "/images/shahin.webp",
];

const textures = imageUrls.map((url) => textureLoader.load(url));


// ===============================
// GEOMETRY
// ===============================

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);


// ===============================
// SPHERE DATA
// ===============================

const spheres = Array.from({ length: 30 }, () => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));


// ===============================
// TYPES
// ===============================

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};


// ===============================
// SPHERE
// ===============================

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;

    delta = Math.min(0.1, delta);

    const translation = api.current.translation();

    const impulse = vec
      .set(translation.x, translation.y, translation.z)
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      ref={api}
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      colliders={false}
    >
      <BallCollider args={[scale]} />

      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />

      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}


// ===============================
// POINTER
// ===============================

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({
  vec = new THREE.Vector3(),
  isActive,
}: PointerProps) {
  const ref = useRef<RapierRigidBody | null>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;

    const target = new THREE.Vector3(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );

    const targetVec = vec.lerp(target, 0.2);

    ref.current.setNextKinematicTranslation({
      x: targetVec.x,
      y: targetVec.y,
      z: targetVec.z,
    });
  });

  return (
    <RigidBody
      ref={ref}
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}


// ===============================
// TECH STACK
// ===============================

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  // ===============================
  // SCROLL DETECTION
  // ===============================

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");

      if (!workSection) {
        setIsActive(false);
        return;
      }

      const rect = workSection.getBoundingClientRect();

      // Activate when the Work section
      // reaches the viewport
      const active = rect.top < window.innerHeight;

      setIsActive(active);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // ===============================
  // MATERIALS
  // ===============================

  const materials = useMemo(() => {
    return textures.map((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;

      return new THREE.MeshPhysicalMaterial({
        map: texture,

        // Light/emission settings
        emissive: new THREE.Color("#ffffff"),
        emissiveMap: texture,
        emissiveIntensity: 0.15,

        // Surface
        metalness: 0.35,
        roughness: 0.65,
        clearcoat: 0.15,
        clearcoatRoughness: 0.25,

        // Make texture visible
        transparent: false,
        opacity: 1,
      });
    });
  }, []);


  // ===============================
  // CLEANUP MATERIALS
  // ===============================

  useEffect(() => {
    return () => {
      materials.forEach((material) => {
        material.dispose();
      });
    };
  }, [materials]);


  // ===============================
  // RENDER
  // ===============================

  return (
    <div className="techstack">
      <h2>My Techstack</h2>

      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          alpha: true,
          stencil: false,
          depth: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 0, 20],
          fov: 32.5,
          near: 1,
          far: 100,
        }}
        onCreated={(state) => {
          state.gl.toneMapping = THREE.ACESFilmicToneMapping;
          state.gl.toneMappingExposure = 1.2;
        }}
        className="tech-canvas"
      >

        {/* =========================
            LIGHTING
        ========================= */}

        <ambientLight intensity={1.5} />

        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          intensity={3}
          color="#ffffff"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <directionalLight
          position={[0, 5, -4]}
          intensity={2}
          color="#ffffff"
        />

        <pointLight
          position={[-10, 5, 10]}
          intensity={1.5}
          color="#ffffff"
        />


        {/* =========================
            PHYSICS
        ========================= */}

        <Physics gravity={[0, 0, 0]}>

          <Pointer isActive={isActive} />

          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[i % materials.length]}
              isActive={isActive}
            />
          ))}

        </Physics>


        {/* =========================
            ENVIRONMENT
        ========================= */}

        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.35}
          environmentRotation={[0, 4, 2]}
        />


        {/* =========================
            POST PROCESSING
        ========================= */}

        <EffectComposer enableNormalPass={false}>
          <N8AO
            color="#0f002c"
            aoRadius={2}
            intensity={1.15}
            distanceFalloff={1}
          />
        </EffectComposer>

      </Canvas>
    </div>
  );
};


// ===============================
// EXPORT
// ===============================

export default TechStack;