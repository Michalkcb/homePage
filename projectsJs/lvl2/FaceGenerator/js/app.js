const url = 'https://face-studio.p.rapidapi.com/generate?gender=female&age=20s&ethnicity=european';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dbb8004be0msh8fde5547a0dda60p148a3cjsn854041379a8b',
		'X-RapidAPI-Host': 'face-studio.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}