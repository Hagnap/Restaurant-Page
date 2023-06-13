import homePageDisplay from './homePage.js';
import contactPageDisplay from './contactPage.js';
import addButtons from './index.js';

function addMenuItem(name, price, description) {

    var item = document.createElement("div");
    item.setAttribute("class", "menu-item");
    var itemName = document.createElement("p");
    itemName.style.textDecoration = "underline";
    var itemDescription = document.createElement("p");
    var itemPrice = document.createElement("p");
    itemName.textContent = name;
    itemPrice.textContent = price;
    itemDescription.textContent = description;
    
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemDescription);

    return item;
}

export default function menuPageDisplay(element) {

    element.innerHTML = "";

    // Create elements for webpage
    const subContentDiv = document.createElement("div");
    subContentDiv.setAttribute("id", "sub-content-div-menu");

    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");

    const itemOne = addMenuItem("Four Cheese", "$14","Cheese lovers rejoice! The four cheese pizza boasts a medley of rich and creamy cheeses, such as mozzarella, cheddar, Parmesan, and sometimes gorgonzola or ricotta. It's a heavenly indulgence for those seeking a cheese-packed delight.");
    const itemTwo = addMenuItem("Pepperoni", "$16","A perennial favorite, pepperoni pizza is topped with spicy, cured pepperoni slices that crisp up in the oven, releasing their irresistible flavor. It's often paired with tomato sauce and mozzarella cheese.");
    const itemThree = addMenuItem("Margherita", "$16","A classic pizza originating from Naples, Italy, the Margherita features a thin crust topped with tomato sauce, mozzarella cheese, and fresh basil leaves. Its simplicity allows the quality of the ingredients to shine.");
    const itemFour = addMenuItem("Hawaiian", "$16","A divisive yet popular choice, Hawaiian pizza combines the savory taste of ham with the sweetness of pineapple. It typically includes tomato sauce, mozzarella cheese, and the iconic pineapple and ham toppings.");
    const itemFive = addMenuItem("BBQ Chicken", "$16","This unique pizza features tangy barbecue sauce as the base, topped with grilled chicken, red onions, and a blend of cheeses. The combination of smoky flavors and tender chicken makes it a crowd-pleaser.");
    const itemSix = addMenuItem("Meat Lovers", "$20","As the name suggests, this pizza caters to meat enthusiasts. It's piled high with an assortment of savory meats like pepperoni, sausage, bacon, ham, and sometimes ground beef, making it a protein-packed delight.");
    const itemSeven = addMenuItem("Buffalo Chicken", "$16","Inspired by the tangy flavors of Buffalo wings, this pizza features buffalo sauce as the base, topped with grilled or breaded chicken, blue cheese or ranch dressing, and sometimes diced celery. It's a zesty and satisfying choice.");
    const itemEight = addMenuItem("Supreme", "$20","The Supreme pizza is a loaded feast of flavors, combining various toppings like pepperoni, sausage, bell peppers, onions, mushrooms, and olives. It's a crowd-pleasing option that offers a bit of everything.");
    const itemNine = addMenuItem("Mediterranean", "$16","Bringing a taste of the Mediterranean to your plate, this pizza is topped with ingredients like feta cheese, Kalamata olives, roasted red peppers, sun-dried tomatoes, and fresh herbs. It's a flavorful and aromatic delight.");
    const itemTen = addMenuItem("Veggie Supreme", "$16","A vegetarian delight, the Veggie Supreme pizza is loaded with a colorful array of fresh vegetables like bell peppers, mushrooms, onions, olives, and tomatoes. It's a wholesome and flavorful option for vegetable enthusiasts.");

    grid.appendChild(itemOne);
    grid.appendChild(itemTwo);
    grid.appendChild(itemThree);
    grid.appendChild(itemFour);
    grid.appendChild(itemFive);
    grid.appendChild(itemSix);
    grid.appendChild(itemSeven);
    grid.appendChild(itemEight);
    grid.appendChild(itemNine);
    grid.appendChild(itemTen);

    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    addButtons(element, navbar);

    const header = document.createElement("header");
    header.textContent = "Pizza Palace Menu";

    // Add content to element (content div on webpage)
    subContentDiv.appendChild(header);
    subContentDiv.appendChild(grid);

    element.appendChild(navbar);
    element.appendChild(subContentDiv);
  }