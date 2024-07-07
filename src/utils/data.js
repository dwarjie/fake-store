export const Cart = (function () {
  const STORAGE_NAME = "cart";
  let personal_cart = {
    cart: [],
  };

  return {
    personal_cart,
    STORAGE_NAME,
  };
})();
