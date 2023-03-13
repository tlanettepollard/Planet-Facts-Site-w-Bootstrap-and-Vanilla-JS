// Variables
const main = document.querySelector('.main');
const planetLinks = document.querySelectorAll('.nav-link');
const planetName = document.querySelector('#main-title');
const planetImage = document.querySelector('.planet-image');
const geologyImage = document.querySelector('.geology-image');
const planetContent = document.querySelector('.planet-info--text');
const source = document.querySelector('.source-link');
const vw = window.innerWidth;

// Buttons
const overviewBtn = document.querySelector('#overviewTablet');
const structureBtn = document.querySelector('#structureTablet');
const geologyBtn = document.querySelector('#surfaceTablet');
const overviewBtnMobile = document.querySelector('#overviewMobile');
const structureBtnMobile = document.querySelector('#structureMobile');
const geologyBtnMobile = document.querySelector('#surfaceMobile');
const contentButtons = document.querySelectorAll('.desc-buttons');

let currentPlanet = document.body.id;
let currentState = 'overview';

// Get Planet Data
let data;
const fetchData = () => {
	fetch('/assets/data/data.json')
		.then((res) => res.json())
		.then((json) => {
			data = json;
			console.log(data);
		})
		.catch((error) => {
			console.log(`Error Fetching Data : ${error}`);
		});
};
fetchData();


