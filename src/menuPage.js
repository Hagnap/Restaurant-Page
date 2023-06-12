import homePageDisplay from './homePage.js';
import contactPageDisplay from './contactPage.js';
import addButtons from './index.js';

export default function menuPageDisplay(element) {

    element.innerHTML = "";

    // Create elements for webpage
    const subContentDiv = document.createElement("div");
    subContentDiv.setAttribute("id", "sub-content-div");
    subContentDiv.setAttribute("class", "menu");

    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    addButtons(element, navbar);

    const header = document.createElement("header");
    header.textContent = "Pizza Palace Menu";

    // Add content to element (content div on webpage)
    subContentDiv.appendChild(header);

    element.appendChild(navbar);
    element.appendChild(subContentDiv);
  }