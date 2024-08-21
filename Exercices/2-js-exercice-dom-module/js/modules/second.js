export default function second() {
    const second = document.createElement("div")
    second.classList.add("second")
    const secondDiv = document.createElement("div")
    const secondH1 = document.createElement("h1")
    secondH1.innerText = "Second Section"
    secondDiv.appendChild(secondH1)
    const secondH2 = document.createElement("h2")
    secondH2.innerText = "Sous-titre de second section"
    secondDiv.appendChild(secondH2)
    second.appendChild(secondDiv)
    return second
}