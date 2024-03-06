const theFact = document.querySelector('#theFact');
const theSource = document.querySelector('#theSource');
const theRefresh = document.querySelector('#theRefresh');

async function getFact() {
	const fact = await fetch(
		'https://api.api-ninjas.com/v1/facts?x-api-key=u8D7Slefknohi6oVloV3hQ==LVOfgylhdLlVPaOY',
		{ mode: 'cors' }
	);
	const response = await fact.json();
	theFact.textContent = response['0']['fact'];
}

getFact();

theRefresh.addEventListener('click', () => {
	getFact();
});
