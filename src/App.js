import './scss/style.scss';

import { Canvas, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Orbit from './components/Orbit';
extend({ OrbitControls });

function App() {

	return (
		<figure>
			<Canvas shadowMap style={{ background: '#111' }} camera={{ position: [7, 7, 7] }}>
				<Orbit />
				<axesHelper args={[5]} />
			</Canvas>
		</figure>
	);
}

export default App;