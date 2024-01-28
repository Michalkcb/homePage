
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
  const datalist = document.getElementById("sth");

  optionsArray.forEach(function (optionValue) {
    const optionElement = document.createElement("option");
    optionElement.value = optionValue;
    datalist.appendChild(optionElement);
  });
