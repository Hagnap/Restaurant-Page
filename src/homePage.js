import menuPageDisplay from './menuPage.js';
import contactPageDisplay from './contactPage.js';
import addButtons from './index.js';

export default function homePageDisplay(element) {

    element.innerHTML = "";

    // Create elements for webpage
    const subContentDiv = document.createElement("div");
    subContentDiv.setAttribute("id", "sub-content-div");

    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    addButtons(element, navbar);

    const header = document.createElement("header");
    header.textContent = "Welcome to The Pizza Palace!";

    const heroImage = document.createElement("img");
    heroImage.setAttribute("height", "300px");
    heroImage.setAttribute("width", "300px");
    heroImage.setAttribute("id", "hero-image");
    heroImage.setAttribute("src", "../images/hero-image.png");

    const heroMessage = document.createElement("p");
    heroMessage.setAttribute("id", "hero-message");

    // Newline char didn't work, this solved my issue https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent
    heroMessage.setAttribute('style', 'white-space: pre;');
    heroMessage.innerHTML = 
        "Welcome to our beloved pizza restaurant, where family traditions and exceptional service blend to create an unforgettable dining experience!"
        + "</br>For over three decades, we have proudly served our community with the utmost passion, dedication, and, of course, mouthwatering pizzas."
        + "</br>It all started more than 30 years ago when a determined mom and pop embarked on a culinary journey, armed with a cherished family recipe that has stood the test of time."
        + "</br>With love as the secret ingredient, they crafted each pizza with care, delighting taste buds and creating memories that have resonated through generations."
        + "</br>Our commitment to preserving that legacy is unwavering. From the moment you step into our cozy establishment, you become part of our extended family."
        + "</br>Our warm and friendly staff greets you with genuine smiles, eager to provide exceptional customer service that goes beyond expectations."
        + "</br>We believe that every interaction should leave you feeling valued and appreciated."
        + "</br>Our pizzas are a masterpiece, meticulously prepared with only the freshest ingredients, hand-tossed dough, and a blend of flavorful sauces that dance on your palate."
        + "</br>Each pizza is lovingly topped with an abundance of premium cheeses and a variety of meticulously selected toppings, ensuring every bite is a symphony of flavors."
        + "</br>As a staple in our community, we take great pride in being the place where friends gather, families celebrate, and memories are created."
        + "</br>Whether it's a lively evening with loved ones or a cozy dinner for two, our inviting atmosphere and exceptional hospitality create the perfect backdrop for any occasion."
        + "</br>So join us, as we invite you to savor the magic of our cherished family recipe, experience the warmth of our genuine customer service, and become a part of our pizza-loving family."
        + "</br>Together, let's create moments that will be cherished for years to come.";

    heroMessage.classList.add('test');

    // Add content to element (content div on webpage)
    subContentDiv.appendChild(header);
    subContentDiv.appendChild(heroImage);
    subContentDiv.appendChild(heroMessage);

    element.appendChild(navbar);
    element.appendChild(subContentDiv);
  }
