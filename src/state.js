import * as THREE from 'three';

const state = {
	cameraPos: new THREE.Vector3(6, 0, 7), //카메라의 현재 위치
	target: new THREE.Vector3(0, 0, 0), //카메라가 바라보는 대상의 위치
	shouldUpdate: true, //해당 값이 false가 되면 카메라 모션 종료
	activeName: 'Cube001_0',
	activeMesh: {}
};

export default state;
