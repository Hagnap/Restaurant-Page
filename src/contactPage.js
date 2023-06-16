import homePageDisplay from './homePage.js';
import menuPageDisplay from './menuPage.js';
import addButtons from './index.js';

export default function contactPageDisplay(element) {

    element.innerHTML = "";

    // Create elements for webpage
    const subContentDiv = document.createElement("div");
    subContentDiv.setAttribute("id", "sub-content-div");

    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    addButtons(element, navbar);

    const header = document.createElement("header");
    header.textContent = "How to Contact The Pizza Palace";

    const contactInfo = document.createElement("p");
    contactInfo.innerHTML = 
      "Hours: 11am - 10pm"
      + "</br></br>Location: Cheese Lane, Tilden Township, PA 19526"
      + "</br></br>Phone Number: 012-345-6789"
      + "</br></br>Email: ThePizzaPalace@internet.com";

    const map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d379.06457236634776!2d-76.0211051!3d40.530175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c5dc4127e061a3%3A0x1b05056d5b468766!2sCheese%20Ln%2C%20Tilden%20Township%2C%20PA%2019526!5e0!3m2!1sen!2sus!4v1686914659797!5m2!1sen!2sus";
    map.setAttribute("width","600");
    map.setAttribute("height", "450");
    map.setAttribute("allowfullscreen", "");
    map.setAttribute("loading", "lazy");
    map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    map.style.border = "0";
    map.style.marginBottom = "8px";

    // Add content to element (content div on webpage)
    subContentDiv.appendChild(header);
    subContentDiv.appendChild(contactInfo);
    subContentDiv.appendChild(map);

    element.appendChild(navbar);
    element.appendChild(subContentDiv);
  }