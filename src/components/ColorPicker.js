import state from '../state';
import * as THREE from 'three';

function ColorPicker() {
  // state에 activeMesh 오브제가 등록되어 있는 경우
  // 컬러픽커 클릭시 클릭한 버튼의 배경색으로 해당 mesh요소의 색상을 변경
  const handleClick = e => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(e.target.getAttribute('data-color'))
  }

  // 버튼에 보여질 색상
  const showColor = ['#bdf2ee', '#57CC99', '#2D46B9'];

  // 모형의 디폴트 색이 #bdf2ee(밝은 하늘색)과 비슷한 색상임을 참고. (색상을 입힐 시 #bdf2ee 색상 + 내가고른색상 으로 섞임.)
  return (
    <ul className='colorPicker'>
      {['transparent', '#57CC99', '#2D46B9'].map((color, index) => {
        return (
          <li key={color} data-color={color} style={{ backgroundColor: showColor[index] }} onClick={handleClick}></li>
        )
      })}
    </ul>
  );
}

export default ColorPicker;