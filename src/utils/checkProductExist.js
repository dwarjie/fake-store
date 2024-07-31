const checkProductExist = (productList, id) => {
  const searchedProduct = productList.filter((product) => product.id == id);
  if (searchedProduct.length > 0) return true;

  return false;
};

export { checkProductExist };
