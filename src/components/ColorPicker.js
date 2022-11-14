import state from '../state';
import * as THREE from 'three';

function ColorPicker() {
  //state에 activeMesh 오브제가 등록되어 있는 경우
  //컬러픽커 클릭시 클릭한 버튼의 배경색으로 해당 mesh요소의 색상을 변경
  const handleClick = e => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(e.target.style.backgroundColor)
  }

  return (
    <ul className='colorPicker'>
      {['red', 'green', 'blue', 'transparent'].map(color => {
        return (
          <li key={color} style={{ backgroundColor: color }} onClick={handleClick}>{color}</li>
        )
      })}
    </ul>
  );
}

export default ColorPicker;