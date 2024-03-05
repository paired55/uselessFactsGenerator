const theFact = document.querySelector('#theFact');
const theSource = document.querySelector('#theSource');
const theRefresh = document.querySelector('#theRefresh');

async function getFact() {
	const fact = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random', {
		mode: 'cors',
	});
	const response = await fact.json();
	theFact.textContent = response.text;
	theSource.href = response.source_url;
}

getFact();

theRefresh.addEventListener('click', (e) => {
	e.preventDefault;
	getFact();
});
