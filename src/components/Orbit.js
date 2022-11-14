import { useThree } from 'react-three-fiber';

function Orbit() {
  const { camera, gl } = useThree();

  return (
    // 화면의 궤도를 바꿀 수 있음.
    <orbitControls attach='orbitControls' args={[camera, gl.domElement]} />
  )
}

export default Orbit;