export const removeCartItem = (key) => {
  console.log("hello services", key);
  localStorage.removeItem(key);
};
