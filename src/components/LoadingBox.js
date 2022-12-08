import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

function LoadingBox() {
  const obj = useRef(null);
  useFrame(() => {
    obj.current.rotation.x += 0.03;
    obj.current.rotation.y += 0.03;
  })

  return (
    <mesh ref={obj}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' transparent wireframe color={'#000'} opacity={0.5} />
    </mesh>
  );
}

export default LoadingBox;