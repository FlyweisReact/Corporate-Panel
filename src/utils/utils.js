/** @format */

const tokenSaver = (res) => {
  localStorage.setItem("token", res);
};

export { tokenSaver };
