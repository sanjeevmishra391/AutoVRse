import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF(props.model.component);
  useMemo(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

export default Model;
