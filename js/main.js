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
					updatePlanetInfo(planetObject);
				}
			});
		});
	});
};

getPlanetData(planetMenuLinks);

// Update Planet Info

const planetName = document.getElementById('main-title');
const planetImage = document.getElementById('main-image');
const geologyImage = document.querySelector('.geology-image');
const planetDesc = document.getElementById('main-text');
const source = document.querySelector('.source-link');
const planetRotation = document.getElementById('rotation-time');
const planetRevolution = document.getElementById('revolution-time');
const planetRadius = document.getElementById('radius-size');
const planetTemperature = document.getElementById('avg-temperature');

// Mobile Buttons
const overviewBtnMobile = document.querySelector('.btn-overview--mobile');
const structureBtnMobile = document.querySelector('.btn-structure--mobile');
const geologyBtnMobile = document.querySelector('.btn-surface--mobile');

//Tablet Buttons
const overviewBtn = document.querySelector('.btn-overview');
const structureBtn = document.querySelector('.btn-structure');
const geologyBtn = document.querySelector('.btn-surface');

const updatePlanetInfo = (planet) => {
	planetName.innerText = planet.name;
	planetImage.src = planet.images.planet;
	planetDesc.innerText = planet.overview.content;
	source.href = planet.overview.source;
	planetRotation.innerText = planet.rotation;
	planetRevolution.innerText = planet.revolution;
	planetRadius.innerText = planet.radius;
	planetTemperature.innerText = planet.temperature;

	//Overview Button
	overviewBtnMobile.addEventListener('click', () => {
		planetDesc.innerText = planet.overview.content;
		source.href = planet.overview.source;
		planetImage.src = planet.images.planet;
		geologyImage.style.display = 'none';
		overviewBtnMobile.style.backgroundColor = 'transparent';
		structureBtnMobile.style.backgroundColor = 'transparent';
		geologyBtnMobile.style.backgroundColor = 'transparent';

		
	});
};
