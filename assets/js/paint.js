function configureListeners() {
  // images is a variable
  // images variable contains all the img html element tags (lines 23, 24, 25, 29, 30, 31, 35, 36, 37 in index.html file)
  let images = document.querySelectorAll("img"); // select img elements

  //images.length contains the number of img tags which is 9 because there are 9 lines that contain img html tag in index.html file
  //this means we will repeat line 9 nine times, this means we are using line 8 to iterate (using for loop) over images
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", addOpacity); //add mouseover event listener
    images[i].addEventListener("mouseout", removeOpacity); //add mouseout event listener
  }
}

function addOpacity(event) {
  event.target.classList.add("dim"); // add appropriate CSS class, this class uses the opacity style to reduce transparency
  getProductInfo(event.target.id);
}

function removeOpacity(event) {
  event.target.classList.remove("dim"); //remove appropriate CSS class

  let element = document.getElementById("color-price");
  element.textContent = "";

  let color = document.getElementById("color-name");
  color.textContent = "";

  event.preventDefault();
}

function getProductInfo(paintColor) {
  let price;
  let colorName;

  switch (paintColor) {
    case "pn1":
      //we are invoking a function with the name updatePrice with the value 'LimeGreen' for the colorName parameter and the value '$14.99' for the price parameter
      updatePrice("LimeGreen", "$14.99"); // set variables for price and color name and invoke a function to update the price
      break;
    case "pn2":
      updatePrice("MediumBrown", "$11.14"); // set variables for price and color name and invoke a function to update the price
      break;
    case "pn3":
      updatePrice("RoyalBlue", "$22.99"); // set variables for price and color name and invoke a function to update the price
      break;
    case "pn4":
      updatePrice("SolidRed", "$13.42"); // set variables for price and color name and invoke a function to update the price
      break;
    case "pn5":
      updatePrice("SolidWhite", "$21.98"); //set variables for price and color name and invoke a function to update the price
      break;
    case "pn6":
      updatePrice("SolidBlack", "$4.99"); // set variables for price and color name and invoke a function to update the price
      break;
    case "pn7":
      updatePrice("SolidCyan", "$8.22"); // set variables for price and color name and invoke a function to update the price
      break;
    case "pn8":
      updatePrice("SolidPurple", "$11.99"); // set variables for price and color name and invoke a function to update the price
      break;
    case "pn9":
      updatePrice("SolidYellow", "$14.99"); // set variables for price and color name and invoke a function to update the price
      break;
    default:
  }
  //
  //defining a function with the name updatePrice having a parameter with the name colorName and parameter with the name price
  function updatePrice(colorName, price) {
    let colorPrice = document.getElementById("color-price"); // select element with corresponding id with the value color-price
    // the variable name colorPrice refers to the H2 element with the id = 'color-price'
    colorPrice.innerHTML = price; // display price, the variable name price contains the value which is the dollar amount with the $ character

    let color = document.getElementById("color-name"); // select element with corresponding id
    color.innerHTML = colorName; //display color name
  }
}
