import state from '../state';

function CameraBtns() {
  const pos = {
    0: {
      cameraPos: [7, 0, 7],
      target: [0, 0, 0],
    },
    1: {
      cameraPos: [0, 3, 10],
      target: [1, -2, 0],
    },
    2: {
      cameraPos: [-7, -1, 7],
      target: [0, 0, 0],
    },
    3: {
      cameraPos: [-9, 0, -2],
      target: [0, 0, 0],
    },
    4: {
      cameraPos: [-1, 2, -4],
      target: [0, 1, 0],
    },
    5: {
      cameraPos: [6, 1, -2],
      target: [1, 0, 0],
    },
  }

  const handleClick = index => {
    state.cameraPos.set(...pos[index].cameraPos);
    state.target.set(...pos[index].target);
    state.shouldUpdate = true;
  }

  return (
    <ul className='cameraBtns'>
      {Array(6).fill().map((_, idx) => <li key={idx} onClick={() => handleClick(idx)}>{`view${idx + 1}`}</li>)}
    </ul>
  );
}

export default CameraBtns;