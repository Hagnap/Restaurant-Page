import homePageDisplay from './homePage.js';
import contactPageDisplay from './contactPage.js';
import addButtons from './index.js';

export default function menuPageDisplay(element) {
    console.log('I got called from menuPage.js!');

    element.innerHTML = "";

    // Create elements for webpage
    const navbar = document.createElement("div");
    addButtons(element, navbar);

    // Add content to element (content div on webpage)
    element.appendChild(navbar);
  }