const search = document.querySelector("#search");
const matchList = document.querySelector(".match-list");

const searchCountry = async (searchText) => {
  const res = await fetch("./data/country.json");
  const countries = await res.json();

  //dopadowanie do input
  let matches = countries.filter(country => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return country.country.match(regex) || country.alpha2.match(regex);
  });
console.log(matches)

};

search.addEventListener("input", () => searchCountry(search.value));
