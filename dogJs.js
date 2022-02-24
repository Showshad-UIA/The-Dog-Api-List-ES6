// onclick function create
const loadDog = () => {
	fetch("https://api.thedogapi.com/v1/breeds")
		.then((res) => res.json())
		.then((data) => displayDog(data));
};

// fucnction for data pass

const displayDog = (dogList) => {
	// first div created
	const main = document.getElementById("main");
	const first10Data = dogList.slice(0, 10);
	//  again div created
	for (const dog of first10Data) {
		const div = document.createElement("div");
		div.className = "col-lg-4";
		console.log(dog);
		// create dynamic data
		div.innerHTML = `
            <h2>${dog.name} </h2>
            <img  width='400px', height='250px' src="${dog.image.url}">
            <p>Temaparment: ${dog.temperament}</>
            <p>Weight: ${dog.weight.imperial}</>
            <p>Origin: ${dog.origin}</>
            `;
		main.appendChild(div);
	}
};
