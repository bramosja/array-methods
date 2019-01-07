const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
let planetSection = document.createElement("section")
planetSection.classList.add("planets")

planets.forEach(planet => {
    let planetHtml = `
    <h1>${planet}</h1>
    `
    console.log(planetHtml)
    planetSection.innerHTML += planetHtml
})

let printToContainer = document.querySelector("article")
printToContainer.appendChild(planetSection);

const planetEl = document.getElementById("planets")



/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

let planetCap = planets.map(planet => {
        firstLetter = planet.charAt(0).toUpperCase()
        remainingString = planet.slice(1)
        return firstLetter + remainingString
    })

    console.log(planetCap)



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let planetsWithE = planets.filter(planet => {
    let containsE = false

    if (planet.includes("e") === true){
        containsE = true
    }

    return containsE
})
console.log(planetsWithE)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
