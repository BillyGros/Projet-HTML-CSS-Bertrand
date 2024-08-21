export default function hero() {
    const hero = document.createElement("div")
    hero.classList.add("hero")
    const heroH1 = document.createElement("h1")
    heroH1.innerText = "Hero Section"
    hero.appendChild(heroH1)
    const heroH2 = document.createElement("h2")
    heroH2.innerText = "Sous-titre de la section hero"
    hero.appendChild(heroH2)
    return hero
}