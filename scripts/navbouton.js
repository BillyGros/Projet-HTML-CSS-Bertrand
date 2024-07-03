
//Ouverture-fermeture du menu nav
let navBouton = document.getElementById("navbouton")
navbouton.addEventListener("click", () => {
    let headerToggle = document.querySelector("header")
    headerToggle.classList.toggle("headertoggle")
    let navToggle = document.querySelector("nav")
    navToggle.classList.toggle("navtoggle")
    navToggle.classList.toggle("navnone")
    let imageToggle = document.querySelector("#navbouton img")
    if (imageToggle.src.includes("menu.jpg")) {
        imageToggle.src = "images/toggle.jpg"
    } else {
        imageToggle.src = "images/menu.jpg"
    }
})

//Fermeture auto du menu nav si redimension d'écran
window.addEventListener("resize", () => {
        let headerToggle = document.querySelector("header")
        if (headerToggle.classList.contains("headertoggle")) {
            headerToggle.classList.remove("headertoggle")
        }
        let navToggle = document.querySelector("nav")
        if (navToggle.classList.contains("navtoggle")) {
            navToggle.classList.remove("navtoggle")
        }
        if (!navToggle.classList.contains("navnone")) {
            navToggle.classList.add("navnone")
        }
        let imageToggle = document.querySelector("#navbouton img")
        if (!imageToggle.src.includes("menu.jpg")) {
        imageToggle.src = "images/menu.jpg"
        }
})