//Variables
const main = document.querySelector('.main');
const overview = document.querySelector('.overview');
const structure = document.querySelector('.structure');
const surface = document.querySelector('.surface');
const viewButton = document.querySelector('.desc-button');
//const planetNavItem = document.querySelector('.nav-item');
//const planetLink = document.querySelector('.nav-link');
const planetImage = document.querySelector('.planet-image');
const geologyImage = document.querySelector('.geology-image');
const planetDesc = document.querySelector('.planet-info');
const source = document.querySelector('.source-link');
const vw = window.innerWidth;

// Mobile Buttons
const overviewBtnMobile = document.querySelector('.btn-overview--mobile');
const structureBtnMobile = document.querySelector('.btn-structure--mobile');
const geologyBtnMobile = document.querySelector('.btn-geology--mobile');

// Tablet Buttons
const overviewBtn = document.querySelector('.btn-overview');
const structureBtn = document.querySelector('.btn-structure');
const geologyBtn = document.querySelector('.btn-geology');

// Get Planet Data
let planetData;
let currentView = 'overview';

const fetchData = () => {
	fetch('/assets/data/data.json')
		.then((res) => res.json())
		.then((data) => {
			planetData = data;
			console.log(planetData);
		})
		.catch((error) => {
			console.log(`Error Fetching data : ${error}`);
		});
};

fetchData();

const updatePlanetInfo = () => {
	let planet = planetData;
	fetchData(planetData);
	switch (planet) {
		case currentView === overview && vw < 768:
			overviewBtnMobile.style.borderBottom = `4px solid #${planet.color}`;
			planetDesc.innerText = planet.overview.content;
			source.href = planet.overview.source;
			planet.planetImage = planet.images.planet;
			geologyImage.style.display = 'none';
			overviewBtnMobile.style.backgroundColor = 'transparent';
			structureBtnMobile.style.backgroundColor = 'transparent';
			geologyBtnMobile.style.backgroundColor = 'transparent';

			break;
		case currentView === overview && vw >= 768:
			overviewBtn.style.backgroundColor = `#${planet.color}`;
			planetDesc.innerText = planet.overview.content;
			source.href = planet.overview.source;
			planet.planetImage = planet.images.planet;
			geologyImage.style.display = 'none';
			structureBtn.style.backgroundColor = 'transparent';
			geologyBtn.style.backgroundColor = 'transparent';
			break;
		case currentView === structure && vw < 768:
			structureBtnMobile.style.borderBottom = `4px solid #${planet.color}`;
			planetDesc.innerText = planet.structure.content;
			source.href = planet.structure.source;
			planetImage.src = planet.images.internal;
			geologyImage.style.display = 'none';
			overviewBtnMobile.style.backgroundColor = 'transparent';
			structureBtnMobile.style.backgroundColor = 'transparent';
			geologyBtnMobile.style.backgroundColor = 'transparent';
			break;
		case currentView === structure && vw >= 768:
			structureBtn.style.backgroundColor = `#${planet.color}`;
			planetDesc.innerText = planet.structure.content;
			source.href = planet.structure.source;
			planetImage.src = planet.images.internal;
			geologyImage.style.display = 'none';
			geologyBtn.style.backgroundColor = 'transparent';
			overviewBtn.style.backgroundColor = 'transparent';
			break;
		case currentView === surface && vw < 768:
			geologyBtnMobile.style.borderBottom = `4px solid #${planet.color}`;
			planetDesc.innerText = planet.geology.content;
			source.href = planet.geology.source;
			planetImage.src = planet.images.planet;
			geologyImage.src = planet.images.geology;
			geologyImage.style.display = 'block';
			overviewBtnMobile.style.backgroundColor = 'transparent';
			structureBtnMobile.style.backgroundColor = 'transparent';
			geologyBtnMobile.style.backgroundColor = 'transparent';
			break;
		case currentView === surface && vw >= 768:
			geologyBtn.style.backgroundColor = `#${planet.color}`;
			planetDesc.innerText = planet.geology.content;
			source.href = planet.geology.source;
			planetImage.src = planet.images.planet;
			geologyImage.src = planet.images.geology;
			geologyImage.style.display = 'block';
			overviewBtn.style.backgroundColor = 'transparent';
			structureBtn.style.backgroundColor = 'transparent';
			break;
		default:
			console.log(`We are done.`);
	}
};

overviewBtn.addEventListener('click', updatePlanetInfo);
structureBtn.addEventListener('click', updatePlanetInfo);
geologyBtn.addEventListener('click', updatePlanetInfo);
