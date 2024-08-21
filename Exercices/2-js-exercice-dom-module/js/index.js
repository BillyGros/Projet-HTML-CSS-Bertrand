import logoDiv from "./modules/LogoDiv.js"
import boutique from "./modules/boutique.js"
import apropos from "./modules/apropos.js"
import blog from "./modules/blog.js"
import contact from "./modules/contact.js"
import panier from "./modules/panier.js"
import compte from "./modules/compte.js"
import hero from "./modules/hero.js"
import second from "./modules/second.js"

const h1Suppr = document.querySelector("h1")
h1Suppr.remove()

const body = document.querySelector("body")

const header = document.createElement("header")
body.appendChild(header)
header.appendChild(logoDiv())

const nav = document.createElement("nav")
header.appendChild(nav)
nav.appendChild(boutique())
nav.appendChild(apropos())
nav.appendChild(blog())
nav.appendChild(contact())
nav.appendChild(panier())
nav.appendChild(compte())

const main = document.createElement("main")
body.appendChild(main)
main.appendChild(hero())
main.appendChild(second())