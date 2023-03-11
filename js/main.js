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


let currentPlanet = document.getElementById('#mercury');
let currentPlanetIndex = '0';
let currentDesButtonsIndex = '0';