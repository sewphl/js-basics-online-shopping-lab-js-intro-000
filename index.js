var cart = [];

function getCart(itemName) {
  //for(let i=0; i<itemName.length; i++){
    var myobj = {
      "itemName":itemName,
      "itemPrice": Math.random()* (100 - 1) + 1
    //}
    cart.push(myobj);
  }
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
