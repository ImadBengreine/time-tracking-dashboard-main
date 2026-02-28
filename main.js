let option = 'weekly';

async function loadData ()
{
	try {
		const response = await fetch('./data.json');

		const data = await response.json();

		console.log(data);
		renderCard(data)

	} catch(e) {
		// statements
		console.log(e);
	}
}

function renderCard (activites) {
	let container = document.getElementById("app");
	
	let html = activites.map(activity =>{
		let current = activity.timeframes[option].current;
		let previous = activity.timeframes[option].previous;
		return `<div class="activity">
	        <p>${activity.title}</p>
	        <h2>${current}</h2>
	        <p>${previous}</p>
	      </div>`;
  	}).join("");

	container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
	loadData();
})