//Getting Planet Data
let planetsData;
let currentPlanet;

fetch('/data.json')
	.then((response) => response.json())
	.then((data) => {
		planetsData = data;
		console.log(planetsData);
	});

// Variables
const planetLink = document.querySelector('.nav__link');
const planetName = document.getElementById('main-title');
const planetImage = document.getElementById('main-image');
const geologyImage = document.querySelector('.geology-image');
const planetInfo = document.getElementById('main-text');
const source = document.querySelector('.source-link');
const rotationInfo = document.getElementById('rotation-time');
const revolutionInfo = document.getElementById('revolution-time');
const radiusInfo = document.getElementById('radius-size');
const temperatureInfo = document.getElementById('avg-temperature');
//const main = document.querySelector('.main');

//Buttons Mobile
const overviewBtnMobile = document.querySelector('.btn-overview--mobile');
const structureBtnMobile = document.querySelector('.btn-structure--mobile');
const geologyBtnMobile = document.querySelector('.btn-surface--mobile');

//Buttons Tablet
const overviewBtn = document.querySelector('.btn-overview');
const structureBtn = document.querySelector('.btn-structure');
const geologyBtn = document.querySelector('.btn-surface');
