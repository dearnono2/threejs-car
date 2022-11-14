import state from '../state';
import * as THREE from 'three';

function ColorPicker() {
  //state에 activeMesh 오브제가 등록되어 있는 경우
  //컬러픽커 클릭시 클릭한 버튼의 배경색으로 해당 mesh요소의 색상을 변경
  const handleClick = e => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(e.target.getAttribute('data-color'))
  }

  //버튼에 보여질 색상
  const showColor = ['#bdf2ee', '#c2e699', '#c9c0f5'];

  return (
    <ul className='colorPicker'>
      {['transparent', '#fcfc81', '#ea9dff'].map((color, index) => {
        return (
          <li key={color} data-color={color} style={{ backgroundColor: showColor[index] }} onClick={handleClick}></li>
        )
      })}
    </ul>
  );
}

export default ColorPicker;