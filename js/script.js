//js
const close = document.getElementById('close');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

// open menu(burger)
if (bar) {
   bar.addEventListener('click', () => {
      nav.classList.add('active');
   })
}

// close menu(burger)
if (close) {
   close.addEventListener('click', () => {
      nav.classList.remove('active');
   })
}



// download image into sproduct page
const renderImage1 = function (imageName) {
   window.location.href = '../html/sproduct.html?image=/' + imageName;
}
const renderImage = function (imageName) {
   window.location.href = '../html/sproduct.html?image=' + imageName;
}

// add to cart
function addCart(index) {
   //show text that you added to cart
   const myElement = document.querySelector('#added-cart');
   myElement.classList.remove("added-cart");
   setTimeout(function() {
      myElement.classList.add("added-cart");
   }, 1500); 

         const productName = index;
         const productData = {
            name: productName,
         };
         //Retrieve the existing cart data from localStorage or create an empty cart
         const cart = JSON.parse(localStorage.getItem('cart')) || [];
         // Add the product to the cart
         cart.push(productData);
         // Store the updated cart data back in localStorage
         localStorage.setItem('cart', JSON.stringify(cart));
}

// add number in the cart icon
let countrIconN = 0;
function addIconCount() {
   countrIconN++;
   document.querySelector('.lg-bag').textContent = '+' + countrIconN;
}
































