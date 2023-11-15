const search = document.querySelector("#search");
const matchList = document.querySelector(".match-list");

const searchCountry = async (searchText) => {
  const res = await fetch("./data/country.json");
  const countries = await res.json();

  //dopadowanie do input
  let matches = countries.filter(country => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return country.countryName.match(regex) || country.capital.match(regex);
  });

  if(searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
  }
console.log(matches);
  outptHtml(matches)
};

const outptHtml = matches => {
 
  if(matches.length > 0) {
    const html = matches.map(match => `
      <div class="card card-body mb-1">
        <h4>${match.countryName} (${match.capital}) 
        <span class="text-primary">Population: ${match.population} </span></h4>
        <small> Continent: ${match.continentName}</small>
      </div>
    `).join('');

    matchList.innerHTML = html;
  }


//   (searchText != matches) {
//     matchList.innerHTML = `
//     <div class="card card-body mb-4">
//     <p> ${searchText} not found in course list.</p>
//     `;
// }
  
}

search.addEventListener("input", () => searchCountry(search.value));
