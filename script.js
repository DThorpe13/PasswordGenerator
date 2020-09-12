var generateBtn = document.querySelector("#generate");
var passwordId = document.querySelector("#password");

var lowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var special = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

var possChar = {
  low: ranLow,
  up: ranUp,
  num: ranNum,
  spec: ranSpec
};

generateBtn.addEventListener('click', () => {

  var length = parseInt(prompt("How many characters would you like in your password?", "Password must be a number between 8-128."));
  if (length < 8) {
    alert("Password must be at least 8 characters.")
    return;
  }
  if (length > 128) {
    alert("Password must be less than or equal to 128 characters.")
    return;
  }
  if (isNaN(length) === true) {
    alert("Password must be a number between 8 and 128")
  }
  else {
    var low = confirm("Would you like lowercase characters in your password?")
    var up = confirm("Would you like uppercase characters in your password?")
    var num = confirm("Would you like number characters in your password?")
    var spec = confirm("Would you like special characters in your password?")

    console.log(low, up, num, spec);
    console.log(length)

    passwordId.value = generatePassword(low, up, num, spec, length);
  }

  function generatePassword(low, up, num, spec, length) {
    var genPassword = "";
    var type = low + up + num + spec;

    console.log('type: ', type);

    var typeA = [{ low }, { up }, { num }, { spec }].filter
      (item => Object.values(item)[0]);
    console.log('typeA: ', typeA);
    
    if (type === 0) {
      return '';
    }
    for (var i = 0; i < length; i += type) {
      typeA.forEach(type => {
        var name = Object.keys(type)[0];
        console.log('name: ', name);
        genPassword += possChar[name]();
      });
    }
    alert("Your password is " + genPassword);
    console.log(genPassword);
    return genPassword;
  }
})

function ranLow() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function ranUp() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function ranNum() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function ranSpec() {
  return special[Math.floor(Math.random() * special.length)];
}



