const loadCountry = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => getCountries(data))
}

const getCountries = countries => {
    const countryContainer = document.getElementById('country-container')
    for (const country of countries) {
        const div = document.createElement('div');
        div.classList.add('style')
        div.innerHTML = `<h3>${country.name}</h3>
                        <p>${country.capital}</p>
                        <button onclick="getCountryDetails('${country.name}')">Details</button>
        `

        countryContainer.appendChild(div)


    }
};


const getCountryDetails = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}


const displayCountry = (country) => {
    const countryDetails = document.getElementById('details');
    countryDetails.innerHTML = `
        <h3><span>Country Name:</span> ${country.name}</h3>
        <p><span>Population:</span> ${country.population}</p>
        <img width="300px" src="${country.flag}">
    
    
    `
    countryDetails.classList.add('section-style')
    console.log(country);
}
