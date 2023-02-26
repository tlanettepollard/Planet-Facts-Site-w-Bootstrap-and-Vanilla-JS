//Getting Planet Data
fetch('/data.json')
	.then((response) => response.json())
	.then((json) => {
		planetsData = json;
		console.log(planetsData);
		const planet = planetsData[0];
		displayPlanetInfo(planet);
	});
