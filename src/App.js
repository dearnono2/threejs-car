import './scss/style.scss';

import { Canvas, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Model from './components/Model';
import CameraControls from './components/CameraControls';
extend({ OrbitControls });

function App() {

	return (
		<figure>
			<Canvas shadowMap style={{ background: '#cdcfd3' }} camera={{ position: [7, 7, 7] }}>
				<Orbit />
				<axesHelper args={[5]} />
				<CameraControls />

				<Suspense fallback={null}>
					<Model path={process.env.PUBLIC_URL + '/car/scene.gltf'} position={[0, 0, 0]} scale={1} />
				</Suspense>
			</Canvas>
		</figure>
	);
}

export default App;