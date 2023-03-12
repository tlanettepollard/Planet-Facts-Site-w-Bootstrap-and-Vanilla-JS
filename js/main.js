// Get Planet Data
let planetsInfo;

const fetchData = () => {
	fetch('/assets/data/data.json')
		.then((res) => res.json())
		.then((data) => {
			planetsInfo = data;
			console.log(planetsInfo);
		})
		.catch((error) => {
			console.log(`Error Fetching Data : ${error}`);
		});
};

fetchData();

// Variables
const planetLinks = document.querySelectorAll('.nav-link');
const planetItem = document.querySelectorAll('.nav-item');
const planetImage = document.querySelector('.planet-image');
const geologyImage = document.querySelector('.geology-image');
const planetContent = document.querySelector('.planet-info');
const source = document.querySelector('.source-link');
const vw = window.innerWidth;

// Buttons
const overviewBtn = document.querySelector('.btn-overview');
const structureBtn = document.querySelector('.btn-structure');
const geologyBtn = document.querySelector('.btn-surface');
const overviewBtnMobile = document.querySelector('.btn-overview--mobile');
const structureBtnMobile = document.querySelector('.btn-structure--mobile');
const geologyBtnMobile = document.querySelector('.btn-surface--mobile');

let currentPlanet = document.getElementById('#mercury');

const activePlanet = (planetLinks) => {
	
};
