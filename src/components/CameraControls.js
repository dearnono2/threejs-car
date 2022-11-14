import { useFrame } from 'react-three-fiber';
import state from '../state';

function CameraControls() {
  useFrame(({ camera, scene }) => {
    if (state.shouldUpdate) {
      //첫번째 인수의 vector위치값으로 팬 이동,
      //두번째 인수 (0~1의 값을 줘서 이동간격 설정, 0에 근접할수록 촘촘히 부드럽게 동작)
      camera.position.lerp(state.cameraPos, 0.05);
      scene.orbitControls.target.lerp(state.target, 0.05);
      scene.orbitControls.update();

      //반복을 돌때마다의 현재 카메라 위치값에서 타겟위치값을 뺀 거리값을 반환
      const diff = camera.position.clone().sub(state.cameraPos).length();
      if (diff < 0.1) state.shouldUpdate = false;
    }
  })
  return null;
}

export default CameraControls;