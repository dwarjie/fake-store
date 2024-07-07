import { Cart } from "./data";

const Save = () => {
  try {
    localStorage.setItem(Cart.STORAGE_NAME, JSON.stringify(Cart.personal_cart));
    console.log(Cart.personal_cart);

    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};

export { Save };
