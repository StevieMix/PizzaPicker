bplist00�_WebMainResource�	
^WebResourceURL_WebResourceFrameName_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingName_^https://raw.githubusercontent.com/anniehoogendoorn/pizza-price-calculator/master/js/scripts.jsPO�<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">function Pizza(quantity, pizzaSize) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.veggieTopping = [];
  this.meatTopping =[];

};

Pizza.prototype.calculatePrice = function() {
  var totalPrice = 8 + (this.veggieTopping.length * 1) + (this.meatTopping.length * 2);

  if (this.pizzaSize == "small") {
    return totalPrice * this.quantity;
  } else if (this.pizzaSize == "medium") {
      return (totalPrice + 2) * this.quantity;
    } else if (this.pizzaSize == "large") {
        return (totalPrice + 4) * this.quantity;
    } else if (this.pizzaSize == "x-large") {
        return (totalPrice + 7) * this.quantity;
    }
  };

Pizza.prototype.showImage = function() {
  
}



  // function Pizza(quantity, topping, pizzaSize) {
  //   this.quantity = quantity;
  //   this.topping = topping;
  //   this.pizzaSize = pizzaSize;
  //
  // };
  //
  // Pizza.prototype.calculatePrice = function() {
  //   var totalPrice = 8 + (this.topping * 1);
  //
  //   if (this.pizzaSize == "small") {
  //     return totalPrice * this.quantity;
  //   } else if (this.pizzaSize == "medium") {
  //       return (totalPrice + 2) * this.quantity;
  //     } else if (this.pizzaSize == "large") {
  //         return (totalPrice + 4) * this.quantity;
  //     } else if (this.pizzaSize == "x-large") {
  //         return (totalPrice + 7) * this.quantity;
  //     }
  //   };
</pre></body></html>Ztext/plainUUTF-8    ( 7 N ` v � � ���                           �