const regex = /^[\u10A0-\u10FF]+$/;
const phoneRegex =
  /^\+995\d{3}\d{2}\d{2}\d{2}$|^\+995 \d{3} \d{2} \d{2} \d{2}$|^\+995 \d{3}\d{2}\d{2}\d{2}$/;

const toggleValidation = (ref, check) => {
  if (check) {
    ref.current.style.visibility = "hidden";
  }
};

const changeColor = (ref, color) => {
  ref.current.style.color = color;
};

const setBorder = (ref, value) => {
  ref.current.style.border = value;
};

const setVisibility = (ref, value) => {
  ref.current.style.visibility = value;
};

const setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItemFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export {
  regex,
  phoneRegex,
  toggleValidation,
  changeColor,
  setBorder,
  setVisibility,
  setItemToLocalStorage,
  getItemFromLocalStorage,
};
