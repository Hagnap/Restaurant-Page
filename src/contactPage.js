import homePageDisplay from './homePage.js';
import menuPageDisplay from './menuPage.js';
import addButtons from './index.js';

export default function contactPageDisplay(element) {
    console.log('I got called from contactPage.js!');

    element.innerHTML = "";

    // Create elements for webpage
    const navbar = document.createElement("div");
    addButtons(element, navbar);

    const header = document.createElement("header");
    header.textContent = "How to Contact the Pizza Palace";

    // Add content to element (content div on webpage)
    element.appendChild(navbar);
    element.appendChild(header);
  }