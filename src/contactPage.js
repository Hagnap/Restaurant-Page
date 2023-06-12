import homePageDisplay from './homePage.js';
import menuPageDisplay from './menuPage.js';
import addButtons from './index.js';

export default function contactPageDisplay(element) {

    element.innerHTML = "";

    // Create elements for webpage
    const subContentDiv = document.createElement("div");
    subContentDiv.setAttribute("id", "sub-content-div");
    subContentDiv.setAttribute("class", "contact");

    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    addButtons(element, navbar);

    const header = document.createElement("header");
    header.textContent = "How to Contact The Pizza Palace";

    const contactInfo = document.createElement("p");
    contactInfo.innerHTML = 
      "Hours: 11am - 10pm"
      + "</br></br>Location: 123 Pizza Road, Town City"
      + "</br></br>Phone Number: 012-345-6789"
      + "</br></br>Email: ThePizzaPalace@internet.com";

    // Add content to element (content div on webpage)
    subContentDiv.appendChild(header);
    subContentDiv.appendChild(contactInfo);

    element.appendChild(navbar);
    element.appendChild(subContentDiv);
  }