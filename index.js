const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()><?:{}";
const alchars = upperCase + lowerCase + number + symbol;
function createpassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * upperCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += alchars[Math.floor(Math.random() * alchars.length)];
  }
  passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}
