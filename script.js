



function addCal()
{ 
   addIn = prompt("Enter the number");
   addIn = Number(addIn);
  addIn += 7;
  alert(`The result is ${addIn} ` );
}

function multiCal() {
  num1 = Number(prompt("Enter first number"));
  num2 = Number(prompt("Enter second number"));
  num = num1 * num2;
  alert(`The answer is ${num}`);
}

function cap() {
  const text1 = prompt("Enter the word to capitalize");
  const x = text1.charAt(0).toUpperCase();
  const text2 = text1.slice(1);
  const text = x + text2 ;
  alert( `The capitalized answer is ${text}`);
}
