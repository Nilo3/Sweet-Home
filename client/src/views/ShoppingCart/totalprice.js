export const getTotalPrice = (shoppingCart) => {
    if (!shoppingCart || shoppingCart.length === 0) {
      return 0; 
    }
  
    const totalPrice = shoppingCart.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  
    return totalPrice;
  };

  export const calculateTotal = (shippingRate, subTotal) => {
    if (subTotal === 0) {
      return 0;
    } else {
      return shippingRate + subTotal;
    }
  };
  