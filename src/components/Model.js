import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function Model(props) {
  const { scene } = useLoader(GLTFLoader, props.path)
  return (
    <primitive
      object={scene}
      position={props.position}
      scale={new Array(3).fill(props.scale)}
      dispos={null}
    />
  );
}

export default Model;