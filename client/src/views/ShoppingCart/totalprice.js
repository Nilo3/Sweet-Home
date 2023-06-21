export const getTotalPrice = (shoppingCart) => {
    if (!shoppingCart || shoppingCart.length === 0) {
      return 0; 
    }
  
    const totalPrice = shoppingCart.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  
    return totalPrice;
  };