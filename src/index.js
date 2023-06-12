import homePageDisplay from './homePage.js';
import menuPageDisplay from './menuPage.js';
import contactPageDisplay from './contactPage.js';

export default function addButtons(element, navbar) {
    
    const homeBtn = document.createElement("button");
    homeBtn.innerText = "Home";
    homeBtn.setAttribute("id", "homeBtn");
    homeBtn.addEventListener("click", function() {
        homePageDisplay(element);
    })

    const menuBtn = document.createElement("button");
    menuBtn.innerText = "Menu";
    menuBtn.setAttribute("id", "menuBtn");
    menuBtn.addEventListener("click", function() {
        menuPageDisplay(element);
    })

    const contactBtn = document.createElement("button");
    contactBtn.innerText = "Contact";
    contactBtn.setAttribute("id", "contactBtn");
    contactBtn.addEventListener("click", function() {
        contactPageDisplay(element);
    })

    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactBtn);
}

function component() {

    const element = document.querySelector("#content"); 

    homePageDisplay(element);
    //menuPageDisplay(element);
    //contactPageDisplay(element);
}

component();