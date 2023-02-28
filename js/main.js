//Getting Planet Data
let planetsData;
let currentPlanet = planet[0];

fetch('/data.json')
	.then((response) => response.json())
	.then((data) => {
		planetsData = data;
		console.log(planetsData);
	});

// Variables
const planetMenuLinks = document.querySelectorAll('.nav__link');
const planetName = document.getElementById('main-title');
const planetImage = document.getElementById('main-image');
const geologyImage = document.querySelector('.geology-image');
const planetInfo = document.getElementById('main-text');
const source = document.querySelector('.source-link');
const rotationInfo = document.getElementById('rotation-time');
const revolutionInfo = document.getElementById('revolution-time');
const radiusInfo = document.getElementById('radius-size');
const temperatureInfo = document.getElementById('avg-temperature');
const main = document.querySelector('.main');

//Buttons Mobile
const overviewBtnMobile = document.querySelector('.btn-overview--mobile');
const structureBtnMobile = document.querySelector('.btn-structure--mobile');
const geologyBtnMobile = document.querySelector('.btn-surface--mobile');

//Buttons Tablet
const overviewBtn = document.querySelector('.btn-overview');
const structureBtn = document.querySelector('.btn-structure');
const geologyBtn = document.querySelector('.btn-surface');

// Getting Planet Information

const getPlanetInfo = (links) => {
	links.forEach((link) => {
		link.addEventListener('click', (clickedLink) => {
			main.style.height = '100%';
			planetMenuLink = clickedLink.target;
			planetsData.forEach((planetObject) => {
				if (planetObject.name == planetMenuLink.text) {
					currentPlanet = planetObject;
					updatePlanetInfo(planetObject);
				}
			});
		});
	});
};
getPlanetInfo(planetMenuLinks);

const updatePlanetInfo = (planet) => {
	planetName.innerText = currentPlanet.name;
	planetInfo.innerText = planet.overview.content;
};
