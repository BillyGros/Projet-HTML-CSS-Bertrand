export default function compte() {
    const compte = document.createElement("a")
    compte.setAttribute("href", "#")
    const compteImg = document.createElement("img")
    compteImg.setAttribute("src", "images/account.svg")
    compte.appendChild(compteImg)
    return compte
}