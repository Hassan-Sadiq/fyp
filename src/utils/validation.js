export const regex = {
  onlyNumbers: /^\d*$/,
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  onlyAlphabets: /^[ a-zA-Zء-ي]+$/,
};
export const validateEmail = str => {
  const testResult = regex.email.test(str);
  if (testResult === true) {
    return true;
  } else {
    return 'Please enter a valid email address';
  }
};
export const validateAlphabetsOnly = str => {
  const testResult = regex.onlyAlphabets.test(str);
  if (testResult === true) {
    return true;
  } else {
    return 'Only alphabets are allowed';
  }
};
export const validateNumbersOnly = str => {
  if (str.length < 10) {
    return 'Only numbers 0 - 9 are allowed';
  } else {
    return true;
  }
};
export const validatePassword = str => {
  return true;
};
export const equalStrings = (str, str2) => {
  return str?.ti;
};
const validations = {
  validateEmail: validateEmail,
  validateAlphabetsOnly: validateAlphabetsOnly,
  validateNumbersOnly: validateNumbersOnly,
  validatePassword: validatePassword,
  equalStrings: equalStrings,
};
export default validations;
