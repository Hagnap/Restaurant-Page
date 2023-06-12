import homePageDisplay from './homePage.js';
import menuPageDisplay from './menuPage.js';
import addButtons from './index.js';

export default function contactPageDisplay(element) {

    element.innerHTML = "";

    // Create elements for webpage
    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    addButtons(element, navbar);

    const header = document.createElement("header");
    header.textContent = "How to Contact The Pizza Palace";

    // Add content to element (content div on webpage)
    element.appendChild(navbar);
    element.appendChild(header);
  }