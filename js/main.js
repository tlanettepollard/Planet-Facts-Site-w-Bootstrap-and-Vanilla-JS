// Navigating to Planet Pages

let planetsData;
let currentPlanet;

fetch('/data.json')
	.then((response) => response.json())
	.then((data) => {
		planetsData = data;
	});

// Variables

const planetMenuLinks = document.querySelectorAll('.nav__link');
const planetIconLinks = document.querySelectorAll('.icon-link');
const main = document.querySelector('.main');

// Get planet object from data based on the link that is clicked
const getPlanetData = (links) => {
	links.forEach(function (link) {
		link.addEventListener('click', function (clickedLink) {
			main.style.height = '100%';
			planetLink = clickedLink.target;
			planetsData.forEach(function (planetObject) {
				if (planetObject.name == planetLink.text) {
					currentPlanet = planetObject;
					updatePlanetView(planetObject);
				}
			});
		});
	});
};

getPlanetData(planetMenuLinks);

// Update Planet Views

const updatePlanetView = (planet) => {
	const planetName = document.getElementById('main-title');
	const planetImage = document.getElementById('main-image');
	const geologyImage = document.querySelector('.geology-image');
	const planetDesc = document.getElementById('main-text');
	const source = document.querySelector('.source-link');
	const planetRotation = document.getElementById('rotation-time');
	const planetRevolution = document.getElementById('revolution-time');
	const planetRadius = document.getElementById('radius-size');
	const planetTemperature = document.getElementById('avg-temperature');
	const mobileBtnBorder = document.querySelectorAll('.border-bottom');

	const { rotation, revolution, radius, temperature } = planet;
	console.log(planet);
	const { planet: planetImg, internal, geology } = planet.images;

	// Buttons Mobile
	const overviewBtnMobile = document.querySelector('.btn-overview--mobile');
	const structureBtnMobile = document.querySelector('.btn-structure--mobile');
	const surfaceBtnMobile = document.querySelector('.btn-surface--mobile');

	// Buttons Tablet
	const overviewBtn = document.querySelector('.btn-overview');
	const structureBtn = document.querySelector('.btn-structure');
	const surfaceBtn = document.querySelector('.btn-surface');

	planetName.innerHTML = planet.name;
	planetDesc.innerHTML = planet.overview.content;
	source.href = planet.overview.source;
	planetRotation.innerHTML = planet.rotation;
	planetRevolution.innerHTML = planet.revolution;
	planetRadius.innerHTML = planet.radius;
	planetTemperature.innerHTML = planet.temperature;
	planetImage.src = planet.images.planet;

	// Mobile Buttons
	// Overview

	overviewBtnMobile.addEventListener('click', () => {
		planetDesc.innerHTML = planet.overview.content;
		source.href = planet.overview.source;
		planetImage.src = planet.images.planet;
		geologyImage.style.display = 'none';
		overviewBtnMobile.style.backgroundColor = 'transparent';
		structureBtnMobile.style.backgroundColor = 'transparent';
		surfaceBtnMobile.style.backgroundColor = 'transparent';

		if (window.innerWidth < 768) {
			mobileBtnBorder.style.color = planet.color;
			overviewBtnMobile.style.borderBottom = `4px solid #${planet.color}`;
			overviewBtnMobile.style.background = 'transparent';
			structureBtnMobile.style.borderBottom = 'transparent';
			surfaceBtnMobile.style.borderBottom = 'transparent';
		}
	});

	// Structure
	structureBtnMobile.addEventListener('click', () => {
		planetDesc.innerHTML = planet.structure.content;
		source.href = planet.structure.source;
		planetImage.src = planet.images.internal;
		geologyImage.style.display = 'none';
		overviewBtnMobile.style.backgroundColor = 'transparent';
		structureBtnMobile.style.backgroundColor = 'transparent';
		surfaceBtnMobile.style.backgroundColor = 'transparent';

		if (window.innerWidth < 768) {
			structureBtnMobile.style.borderBottom = `4px solid #${planet.color}`;
			structureBtnMobile.style.background = 'transparent';
			surfaceBtnMobile.style.borderBottom = 'transparent';
			overviewBtnMobile.style.borderBottom = 'transparent';
		}
	});

	// Surface
	surfaceBtnMobile.addEventListener('click', () => {
		planetDesc.innerHTML = planet.geology.content;
		source.href = planet.geology.source;
		planetImage.src = planet.images.geology;
		geologyImage.style.display = 'block';
		overviewBtnMobile.style.backgroundColor = 'transparent';
		structureBtnMobile.style.backgroundColor = 'transparent';
		surfaceBtnMobile.style.backgroundColor = 'transparent';

		if (window.innerWidth < 768) {
			surfaceBtnMobile.style.borderBottom = `4px solid #${planet.color}!important`;
			surfaceBtnMobile.style.background = 'transparent';
			structureBtnMobile.style.borderBottom = 'transparent';
			overviewBtnMobile.style.borderBottom = 'transparent';
		}
	});
};
