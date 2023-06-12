import homePageDisplay from './homePage.js';
import menuPageDisplay from './menuPage.js';
import contactPageDisplay from './contactPage.js';

/*
const homeBtn = document.querySelector("#homeBtn");
console.log(homeBtn);


const menuBtn = document.querySelector("#menuBtn");
console.log(menuBtn);


const contactBtn = document.querySelector("#contactBtn");
console.log(contactBtn);
*/


function component() {

    const element = document.querySelector("#content"); 

    homePageDisplay(element);
    //menuPageDisplay(element);
    //contactPageDisplay(element);
}

component();