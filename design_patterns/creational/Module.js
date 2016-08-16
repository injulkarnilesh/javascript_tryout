var myCart = (function(){
	var cartItems = [];

	function cartItemsEqual(itemFirst, itemSecond) {
		return itemFirst.name === itemSecond.name &&
				itemFirst.price === itemSecond.price;
	}

	return {
		addItem : function(itemToAdd) {
			cartItems.push(itemToAdd)
		},
		cartLength : function() {
			return cartItems.length;
		},
		removeItem : function(itemToRemove) {
			var itemIndex = -1;
			for(var i = 0; i < this.cartLength(); i++) {
				if(cartItemsEqual(itemToRemove, cartItems[i])) {
					itemIndex = i;
				}
			}
			if(itemIndex > -1) {
				cartItems.splice(itemIndex, 1);
				return true;
			}
			return false;
		},
		getTotal : function() {
			var total = 0
				itemIndex = this.cartLength();
			
			while(itemIndex--) {
				total += cartItems[itemIndex].price;
			}
			return total;

		},
		showCart : function() {
			var itemIndex = this.cartLength();
			console.log('\n');
			while(itemIndex--) {
				console.log('-----------------');
				console.log('name', cartItems[itemIndex].name);
				console.log('price', cartItems[itemIndex].price);
			}
			console.log('\n');
		}
	};

})();

myCart.addItem({name : 'Batsuit', price : 20278});
myCart.addItem({name : 'Batvehicle', price : 786539});
myCart.showCart();
console.log(myCart.cartLength());
console.log(myCart.getTotal());

myCart.addItem({name : 'Wayne Stock', price : 49});
myCart.showCart();
console.log(myCart.cartLength());
console.log(myCart.getTotal());

myCart.removeItem({name : 'Batsuit', price : 20278});
myCart.showCart();
console.log(myCart.cartLength());
console.log(myCart.getTotal());



