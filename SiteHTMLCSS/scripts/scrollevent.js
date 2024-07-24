
const headerScrollEvent = document.querySelector("header")
const buttonScrollEvent = document.querySelector(".returnTop")

//Gérer l'apparition et disparition du header et du bouton de retour en haut de page
document.addEventListener("scroll", () => {
    let scrollY = window.scrollY
    if (scrollY >= 600) {
        headerScrollEvent.classList.add("appear")
        headerScrollEvent.classList.remove("disappear")
        buttonScrollEvent.classList.add("appear")
        buttonScrollEvent.classList.remove("disappear")
    } else {
        buttonScrollEvent.classList.add("disappear")
        buttonScrollEvent.classList.remove("appear")
        if (headerScrollEvent.classList.contains("appear"))
            headerScrollEvent.classList.add("disappear")
            headerScrollEvent.classList.remove("appear")       
    }
    if (scrollY >= 100) {
        headerScrollEvent.classList.add("headerfixed")
    } else {
        headerScrollEvent.classList.remove("headerfixed")
        headerScrollEvent.classList.remove("disappear")
    }
})

//Action de retour en haut de page du bouton
buttonScrollEvent.addEventListener("click", () => {
    document.documentElement.scrollTop = 0    
})