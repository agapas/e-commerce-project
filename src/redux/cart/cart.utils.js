export const addItemToCart = (cartItems, itemToAdd) => {
  const existedCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  );

  if (existedCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
      );
  }

  return [ ...cartItems, { ...itemToAdd, quantity: 1 }];
};
