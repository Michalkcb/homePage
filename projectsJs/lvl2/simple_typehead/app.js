const optionsArray = [
  "pies",
  "kot",
  "tchórzofretka",
  "ser",
  "kapeć",
  "portki",
  "majty",
  "onuce",
];
const datalist = document.querySelector("#sth");
const input = document.querySelector("input");

optionsArray.forEach((optionValue) => {
  const optionElement = document.createElement("option");
  optionElement.value = optionValue;
  datalist.appendChild(optionElement);
});

input.addEventListener('input', ()=>{
const inputValue = input.value.toLocaleLowerCase();

datalist.innerHTML = '';

if (inputValue.length >= 1){
optionsArray.filter(option => option.toLocaleLowerCase().startsWith(inputValue)).forEach((optionValue)=>{
    const optionElement = document.createElement('option');
    optionElement.value = optionValue;
    datalist.appendChild(optionElement);
});
};

});