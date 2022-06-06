import {
  countryList
} from "./array.js";

const {
  log
} = console;

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

function ready() {
console.log(countryList)
  //Getting the Countries
  document.getElementById("theTotal").innerHTML = countryList.length

  countryList.map((country) => {
    // console.log(country)
   data(country)
  })
}

function data(country) {
  let result;
  let theCountry = country

  let cardRow = document.getElementById("card-row")
  let cardCol = document.createElement("div");
  cardCol.classList.add("col")

  result = `
  <div class="card">
  <img src="../Img/pexels-artem-beliaikin-893126.jpg" class="card-img-top" alt="..." width="360px" height="300px">
  <div class="card-body">
    <a href="#" id= "country" style="margin:"20px 0px"><h4>${theCountry}</h4></a>
    <p>Population: <span style="font-weight:bold"></span></p>
    <p>Region: <span style="font-weight:bold"></span></p>
    <p>Capital: <span style="font-weight:bold"></span></p>
  </div>
</div>`

  cardCol.innerHTML = result;

  cardRow.appendChild(cardCol);
}


//Getting allButtons
let searchIcon = document.getElementById("theSearchIcon")

let allButtons = document.getElementsByClassName("btn")

let startingWord = allButtons[0]
let searchWorld = allButtons[1]
let sortAlpha = allButtons[2]
console.log(sortAlpha)

// console.log(searchWithWorld)

let searchWithWord =  startingWord.addEventListener("click", () => {
  startingWord.style.backgroundColor =  "rgb(53, 49, 49)"
  searchWorld.style.backgroundColor = "blue"
  searchIcon.innerHTML =  `<i class="fa fa-search fa-2x" id="searchWord" aria-hidden="true"></i>`;
  searchIcon.addEventListener("click", (e) => {
    sortWithWord()
    return
  })
})

let searchWithWorld = searchWorld.addEventListener("click", () => {
  searchWorld.style.backgroundColor =  "rgb(53, 49, 49)"
  startingWord.style.backgroundColor = "blue";
  searchIcon.innerHTML = `<i class="fa fa-search fa-2x" id="searchByWorld" aria-hidden="true"></i>`;
  searchIcon.addEventListener("click", (e) => {
    searchByWorld()
    return
  })
})

let sortAlphabetically =  sortAlpha.addEventListener("click", () => {
  sortAlpha.style.backgroundColor =  "rgb(53, 49, 49)"
  searchWorld.style.backgroundColor =  "blue"
  startingWord.style.backgroundColor = "blue";

  sortAlpha. addEventListener("click", (e) => {
    sortingAlphabetically ()
    return
  })
})


function sortingAlphabetically () {

  let reversed =  countryList.reverse()

  let cardRow = document.getElementById("card-row")
  cardRow.innerHTML = ""

  reversed.map((country) => {
   data(country)
  })
}

// sortingAlphabetically()


//Getting the search Field
let searchInput = document.getElementById("searchInput")
searchInput.addEventListener("change", function (e) {
  return e.target
})


//Search By CountryName Function
function searchByWorld() {

  countryList.map((country) => {
    if (searchInput.value.toLowerCase() === country.toLowerCase()) {
      console.log(country)

      let result;
      let cardRow = document.getElementById("card-row")
      let cardCol = document.createElement("div");
      cardCol.classList.add("col")

      result = `
  <div class="card">
  <img src="../Img/pexels-artem-beliaikin-893126.jpg" class="card-img-top" alt="..." width="360px" height="300px">
  <div class="card-body">
    <a href="#" id= "country" style="margin:"20px 0px"><h4>${country}</h4></a>
    <p>Population: <span style="font-weight:bold"></span></p>
    <p>Region: <span style="font-weight:bold"></span></p>
    <p>Capital: <span style="font-weight:bold"></span></p>
  </div>
</div>`

      cardCol.innerHTML = result;

      cardRow.innerHTML = ""
      cardRow.appendChild(cardCol);

      return
    }
  })
}


// Search with First Letter function
function sortWithWord() {
  countryList.map((country) => {

    let inputChar = searchInput.value

    if(country.startsWith(inputChar)) {
      console.log(country)
      document.getElementById("countryAlphabet").innerHTML = inputChar;
      document.getElementById("alphabetCount").innerHTML = country.length

      let result;
      let cardRow = document.getElementById("card-row")
      let cardCol = document.createElement("div");
      let cardCon =  document.getElementsByClassName("countriesCon")[0];
      cardCon.classList.add("row", "row-cols-md-3" , "row-cols-auto", "g-3")

      cardCol.classList.add("col")

      cardRow.innerHTML = ""

      result = `
      <div class="card">
      <img src="../Img/pexels-artem-beliaikin-893126.jpg" class="card-img-top" alt="..." width="360px" height="300px">
      <div class="card-body">
        <a href="#" id= "country" style="margin:"20px 0px"><h4>${country}</h4></a>
        <p>Population: <span style="font-weight:bold"></span></p>
        <p>Region: <span style="font-weight:bold"></span></p>
        <p>Capital: <span style="font-weight:bold"></span></p>
      </div>
    </div>`

      cardCol.innerHTML = result;
      cardCon.appendChild(cardCol);
      // cardCon.innerHTML = ""
      return
    }
  })
}

