import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useMemo } from 'react';

function Model(props) {
  const { scene, nodes } = useLoader(GLTFLoader, props.path);

  //해당 nodes값이 변경되지 않으면 추후 다른 state값이 변경되더라도 해당 3d오브제를 다시 연산하지 않도록
  //import 된 3d 요소들을 메모이제이션처리
  useMemo(() => {
    //console.log(nodes);
    const parts = Object.values(nodes);
    //console.log(parts);
    parts.forEach(obj => {
      //console.log(obj);
      //각각의 노드를 반복 돌면서 만약 해당 노드가 mesh이면 그림자 활성화 설정을 추가
      //obj.isMesh && Object.assign(obj, {castShadow: true})
    })
  }, [nodes])

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