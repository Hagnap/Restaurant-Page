import homePageDisplay from './homePage.js';
import contactPageDisplay from './contactPage.js';
import addButtons from './index.js';

export default function menuPageDisplay(element) {

    element.innerHTML = "";

    // Create elements for webpage
    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    addButtons(element, navbar);

    const header = document.createElement("header");
    header.textContent = "Pizza Palace Menu";

    // Add content to element (content div on webpage)
    element.appendChild(navbar);
    element.appendChild(header);
  }