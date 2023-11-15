const RapidAPI_Key = 'dbb8004be0msh8fde5547a0dda60p148a3cjsn854041379a8b'; //Podaj swój KEY API zamiast 



const getFace = async (e) => {
  e.preventDefault();
  const gender = document.querySelector('#gender').value;
const age = document.querySelector('#age').value;
const ethnicity = document.querySelector('#ethnicity').value;
  const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RapidAPI_Key,
      'X-RapidAPI-Host': 'face-studio.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.blob();
    const image = URL.createObjectURL(result)
    const imageDom = document.createElement('img');
    imageDom.src = image;
    document.body.appendChild(imageDom);


    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

document.querySelector('#form').addEventListener('submit', getFace);