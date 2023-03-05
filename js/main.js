// Getting JSON DATA
let planetInfo;

fetch('/assets/data/data.json')
	.then((response) => response.json())
	.then((json) => {
		planetInfo = json;
		console.log(planetInfo);
	});

const updatePlanetInfo = (planet) => {
	const planetLink = document.querySelector('nav-link');
	const planetName = document.querySelector('.planet-title');
	const planetImage = document.querySelector('.planet-image');
	const geologyImage = document.querySelector('.geology-image');
	const planetDesc = document.querySelector('.planet-text');
	const source = document.querySelector('.source-link');

	//Buttons Tablet
	const overviewBtn = document.querySelector('.btn-overview');
	const structureBtn = document.querySelector('.btn-structure');
	const geologyBtn = document.querySelector('.btn-surface');

	// Mobile Buttons
	const overviewBtnMobile = document.querySelector('.btn-overview--mobile');
	const structureBtnMobile = document.querySelector('.btn-structure--mobile');
	const geologyBtnMobile = document.querySelector('.btn-surface--mobile');

	planetName.innerText = planetData.name;
	planetDesc.innerText = planetData.overview.content;
	source.href = planet.overview.source;
	planetImage.src = planet.images.planet;
};
