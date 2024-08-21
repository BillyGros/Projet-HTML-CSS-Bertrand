export default function panier() {
    const panier = document.createElement("a")
    panier.setAttribute("href", "#")
    const panierImg = document.createElement("img")
    panierImg.setAttribute("src", "images/cart.svg")
    panierImg.classList.add("panierImg")
    panier.appendChild(panierImg)
    return panier
}