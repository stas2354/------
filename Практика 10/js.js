// Функция проверки на палиндром
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); 
    const reversedStr = str.split("").reverse().join(""); 
    return str === reversedStr; 
  }
  
  function checkPalindrome() {
    const input = document.getElementById("palindromeInput").value;
    const output = document.getElementById("palindromeOutput");
    output.textContent = isPalindrome(input) ? "Это палиндром!" : "Это не палиндром.";
  }
  

  function replaceNegativesWithSquares(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr[i] = arr[i] * arr[i]; 
      }
    }
    return arr;
  }
  
  function squareNegatives() {
    const input = document.getElementById("numbersInput").value;
    const numbers = input.split(",").map(Number); 
    const result = replaceNegativesWithSquares(numbers);
    const output = document.getElementById("numbersOutput");
    output.textContent = result.toString();
  }
  
  
  class UserName {
    constructor(name) {
      this.name = name;
    }
  
    displayUserName() {
      return "Имя пользователя: " + this.name;
    }
  }
  
  function showUserName() {
    const name = document.getElementById("userNameInput").value;
    const user = new UserName(name);
    document.getElementById("userNameOutput").textContent = user.displayUserName();
  }
  

  class NameReverser {
    constructor(name) {
      this.name = name;
    }
  
    reverseName() {
      return this.name.split("").reverse().join("");
    }
  }
  
  function reverseName() {
    const name = document.getElementById("reverseNameInput").value;
    const reverser = new NameReverser(name);
    document.getElementById("reverseNameOutput").textContent = reverser.reverseName();
  }
  
  