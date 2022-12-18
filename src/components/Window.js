// import React, { Suspense, useState } from "react";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Backdrop,
  ContactShadows,
} from "@react-three/drei";

import Model from "./Model";
import { TbAugmentedReality } from "react-icons/tb";

function Window(props) {
  return (
    <>
      <div className="text-black mx-auto md:w-10/12 w-11/12 bg-white h-[70vh] rounded-md drop-shadow-md overflow-hidden">
        <a
          className="absolute top-4 right-4 z-10"
          href={`intent://arvr.google.com/scene-viewer/1.0?file=${props.model.data.component}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=http://localhost:3000;end;`}
        >
          <TbAugmentedReality className="w-6 h-6" />
        </a>
        <Canvas shadows camera={{ position: [0, 0, 3] }}>
          <Suspense fallback={null}>
            {/* lights */}
            <ambientLight intensity={0.2} />
            <directionalLight
              position={[-10, 0, -5]}
              intensity={1}
              color="red"
            />
            <directionalLight
              position={[-1, -2, -5]}
              intensity={0.2}
              color="#F2E5E5"
            />
            <spotLight
              position={[5, 0, 5]}
              intensity={2.5}
              penumbra={1}
              angle={0.35}
              castShadow
              color="#F2E5E5"
            />

            {/* load object */}
            <Model scale={0.6} model={props.model.data}>
              <object3D position={[-0.8, 2, 0]} />
            </Model>

            {/* mesh */}
            <Backdrop
              castShadow
              floor={2}
              position={[0, -1, -3]}
              scale={[1000, 20, 10]}
            >
              <meshStandardMaterial color="#CE7777" envMapIntensity={0.3} />
            </Backdrop>

            <ContactShadows
              position={[0, -0.485, 0]}
              scale={5}
              blur={1.5}
              far={1}
            />
            {/* environment */}
            <Environment preset="city" />
            {/* view control */}
            <OrbitControls makeDefault />
          </Suspense>
        </Canvas>

        <div className="w-[30rem] absolute bottom-10 left-6 h-12">
          <p className="font-bold drop-shadow-md">{props.model.data.title}</p>
          <p className="">{props.model.data.description}</p>
        </div>
      </div>
    </>
  );
}

export default Window;
