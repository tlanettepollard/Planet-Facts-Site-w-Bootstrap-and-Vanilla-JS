// Getting JSON DATA

const planetJSON = async () => {
	try {
		const response = await fetch('/assets/data/data.json');
		const data = await response.json();
		planetsData = data;
		console.log(planetsData);
		const planet = planetsData;
		updatePlanetInfo(planet);
	} catch (error) {
		console.log('an error has occured' + error);
	}
};

planetJSON();

const currentPlanet = document.body.id;
const planetImage = document.querySelector('.planet-image');
const geologyImage = document.querySelector('.geology-image');
const planetDesc = document.querySelector('.planet-info');
const source = document.querySelector('.source-link');
const vw = window.innerWidth;

// Get current planet information

const updatePlanetInfo = (planet) => {};
