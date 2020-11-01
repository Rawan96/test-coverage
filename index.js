//Read the description of the function
//This function take a string and capitalize the first letter
function capitalize(string) {
  if (typeof string !== "string") {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//This function take a string and return a reversed string. If the function is taking anything else except a string, it will return “It is not a string”.
function reverseString(str) {
  if (typeof str == "string") {
    return str.split("").reverse().join("");
  } else {
    const error = "Error: ";
    return error + "It is not a string";
  }
}

module.exports = {
  capitalize,
  reverseString,
};
