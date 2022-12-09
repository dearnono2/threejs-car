import './scss/style.scss';

import { Canvas, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Suspense } from 'react';
import { useState } from 'react';
//import Dragable from './components/Dragable';
import Orbit from './components/Orbit';
import Model from './components/Model';
import CameraControls from './components/CameraControls';
import CameraBtns from './components/CameraBtns';
import Txt from './components/Txt';
import ColorPicker from './components/ColorPicker';
import LoadingBox from './components/LoadingBox';
extend({ OrbitControls });

function App() {
	const [Index, setIndex] = useState(0);

	return (
		<figure>
			<h1>My Car</h1>
			<Canvas shadowMap style={{ background: '#cdcfd3' }} camera={{ position: [7, 7, 7] }}>
				<Orbit />
				{/* <axesHelper args={[5]} /> */}
				<CameraControls />

				{/* <Dragable transformGroup> */}
				<Suspense fallback={<LoadingBox />}>
					<Model path={process.env.PUBLIC_URL + '/car/scene.gltf'} position={[0, -1, 4]} scale={1} />
				</Suspense>
				{/* </Dragable> */}
			</Canvas>

			<Txt index={Index} />
			<CameraBtns setIndex={setIndex} />
			<ColorPicker />
		</figure>
	);
}

export default App;