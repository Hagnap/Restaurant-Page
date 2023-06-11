import homePageDisplay from './homePage.js';
import menuPageDisplay from './menuPage.js';
import contactPageDisplay from './contactPage.js';

function component() {

    const element = document.querySelector("#content"); 

    homePageDisplay(element);
    menuPageDisplay(element);
    contactPageDisplay(element);
}

component();