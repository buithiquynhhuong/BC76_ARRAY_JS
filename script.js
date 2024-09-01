// ex1
let arrayEx1 = [];

document.getElementById("addNumberEx1").onclick = function () {
  let number = parseInt(document.getElementById("numberEx1").value);

  if (!isNaN(number)) {
    arrayEx1.push(number);
    document.querySelector(".array_numbers").innerHTML =
      ` [${arrayEx1.join(", ")}] `;
    document.getElementById("numberEx1").value = "";
  } else {
    return alert("Please enter a number");
  }
};
document.getElementById("calEx1").onclick = function () {
  let result = 0;
  for (let i = 0; i < arrayEx1.length; i++) {
    result += arrayEx1[i];
  }
  document.querySelector("#result1").innerHTML = result.toString();
  document.querySelector("#result1").style.display = "block";
};
document.getElementById("clearNumberEx1").onclick = function () {
  arrayEx1 = [];
  document.querySelector(".array_numbers").innerHTML = "";
  document.querySelector("#result1").style.display = "none";
};
// ex2
let arrayEx2 = [];
let positiveNumber = 0;

document.getElementById("addNumberEx2").onclick = function () {
  let number = parseFloat(document.getElementById("numberEx2").value);
  console.log(number);
  if (!isNaN(number)) {
    arrayEx2.push(number);
    document.querySelector(".array_numbers_ex2").innerHTML =
      ` [${arrayEx2.join(", ")}] `;
    document.getElementById("numberEx2").value = "";
  } else {
    return alert("Please enter a number");
  }
};

function checkPositive(array) {
  return array % 1;
}

document.getElementById("calEx2").onclick = function () {
  let result = 0;
  let positiveArray = [];
  let hasPositive = 0;
  for (let i = 0; i < arrayEx2.length; i++) {
    hasPositive = checkPositive(arrayEx2[i]);
    if (arrayEx2[i] > 0 && hasPositive === 0) {
      result++;
      positiveArray.push(arrayEx2[i]);
    }
  }

  document.querySelector("#result2").innerHTML =
    `positive integer numbers in array is ${positiveArray.length > 0 ? positiveArray.join(", ") : "empty"} - total: ${result.toString()}`;
  document.querySelector("#result2").style.display = "block";
};
document.getElementById("clearNumberEx2").onclick = function () {
  arrayEx2 = [];
  document.querySelector(".array_numbers_ex2").innerHTML = "";
  document.querySelector("#result2").style.display = "none";
};

// ex3
let arrayEx3 = [];

document.getElementById("addNumberEx3").onclick = function () {
  let number = parseInt(document.getElementById("numberEx3").value);

  if (!isNaN(number)) {
    arrayEx3.push(number);
    document.querySelector(".array_numbers_ex3").innerHTML =
      ` [${arrayEx3.join(", ")}] `;
    document.getElementById("numberEx3").value = "";
  } else {
    return alert("Please enter a number");
  }
};

document.getElementById("calEx3").onclick = function () {
  let result = arrayEx3[0];
  if (arrayEx3.length >= 0) {
    for (let i = 1; i < arrayEx3.length; i++) {
      if (arrayEx3[i] <= result) {
        result = arrayEx3[i];
      }
    }
  } else {
    return alert("Please enter a number");
  }

  document.querySelector("#result3").innerHTML = result.toString();
  document.querySelector("#result3").style.display = "block";
};

document.getElementById("clearNumberEx3").onclick = function () {
  arrayEx3 = [];
  document.querySelector(".array_numbers_ex3").innerHTML = "";
  document.querySelector("#result3").style.display = "none";
};

// ex4

let arrayEx4 = [];
document.getElementById("addNumberEx4").onclick = function () {
  let number = parseInt(document.getElementById("numberEx4").value);

  if (!isNaN(number)) {
    arrayEx4.push(number);
    document.querySelector(".array_numbers_ex4").innerHTML =
      ` [${arrayEx4.join(", ")}] `;
    document.getElementById("numberEx4").value = "";
  } else {
    return alert("Please enter a number");
  }
};

document.getElementById("calEx4").onclick = function () {
  let result = Infinity;
  if (arrayEx4.length >= 0) {
    for (let i = 0; i < arrayEx4.length; i++) {
      if (arrayEx4[i] > 0 && arrayEx4[i] < result) {
        result = arrayEx4[i];
      }
    }
    if (result === Infinity) return alert("not found positive number");
  }

  document.querySelector("#result4").innerHTML = result.toString();
  document.querySelector("#result4").style.display = "block";
};
document.getElementById("clearNumberEx4").onclick = function () {
  arrayEx4 = [];
  document.querySelector(".array_numbers_ex4").innerHTML = "";
  document.querySelector("#result4").style.display = "none";
};

// ex5
let arrayEx5 = [];
document.getElementById("addNumberEx5").onclick = function () {
  let number = parseInt(document.getElementById("numberEx5").value);

  if (!isNaN(number)) {
    arrayEx5.push(number);
    document.querySelector(".array_numbers_ex5").innerHTML =
      ` [${arrayEx5.join(", ")}] `;
    document.getElementById("numberEx5").value = "";
  } else {
    return alert("Please enter a number");
  }
};
document.getElementById("calEx5").onclick = function () {
  let result = -1;
  if (arrayEx5.length >= 0) {
    for (let i = arrayEx5.length; i >= 0; i--) {
      if (arrayEx5[i] % 2 === 0) {
        result = arrayEx5[i];
      }
    }
  }
  document.querySelector("#result5").innerHTML = result.toString();
  document.querySelector("#result5").style.display = "block";
};
document.getElementById("clearNumberEx5").onclick = function () {
  arrayEx5 = [];
  document.querySelector(".array_numbers_ex5").innerHTML = "";
  document.querySelector("#result5").style.display = "none";
};
// ex6
let arrayEx6 = [];
document.getElementById("addNumberEx6").onclick = function () {
  let numberA = parseInt(document.getElementById("numberAEx6").value);
  let numberB = parseInt(document.getElementById("numberBEx6").value);
  if (!isNaN(numberA) && !isNaN(numberB)) {
    arrayEx6.push(numberA, numberB);
    document.querySelector(".array_numbers_ex6").innerHTML =
      ` [${arrayEx6.join(", ")}] `;
    document.getElementById("numberEx6").value = "";
  } else {
    return alert("Please enter a number");
  }
};

document.getElementById("calEx6").onclick = function () {
  let numberInital = parseInt(document.getElementById("numberAEx6").value);
  let numberSwap = parseInt(document.getElementById("numberBEx6").value);
  let indexA = -1;
  let indexB = -1;

  if (!isNaN(numberInital) && !isNaN(numberSwap)) {
    indexA = arrayEx6.indexOf(numberInital);
    indexB = arrayEx6.indexOf(numberSwap);
    if (indexA !== -1 && indexB !== -1) {
      arrayEx6[indexA] = numberSwap;
      arrayEx6[indexB] = numberInital;
    } else {
      return alert("not found number in array");
    }
  } else {
    return alert("Please enter a number");
  }
  document.querySelector(".array_numbers_ex6").innerHTML =
    ` [${arrayEx6.join(", ")}] `;

  document.getElementById("result6").innerHTML =
    `index initial ${indexA} value is ${numberInital}  - after index swap: ${indexB}`;
  document.getElementById("result6").style.display = "block";
};
document.getElementById("clearNumberEx6").onclick = function () {
  arrayEx6 = [];
  document.querySelector(".array_numbers_ex6").innerHTML = "";
  document.getElementById("result6").style.display = "none";
};

let arrayEx7 = [];
document.getElementById("addNumberEx7").onclick = function () {
  let number = parseInt(document.getElementById("numberEx7").value);

  if (!isNaN(number)) {
    arrayEx7.push(number);
    document.querySelector(".array_numbers_ex7").innerHTML =
      ` [${arrayEx7.join(", ")}] `;
    document.getElementById("numberEx7").value = "";
  } else {
    return alert("Please enter a number");
  }
};
document.getElementById("calEx7").onclick = function () {
  let result = arrayEx7.sort((a, b) => a - b);
  if (result.length === 0) return alert("array is empty");
  document.querySelector("#result7").innerHTML =
    `after sort ascending in array [${result.toString()}]`;
  document.querySelector("#result7").style.display = "block";
};
document.getElementById("clearNumberEx7").onclick = function () {
  arrayEx7 = [];
  document.querySelector(".array_numbers_ex7").innerHTML = "";
  document.querySelector("#result7").style.display = "none";
};

// ex8
let arrayEx8 = [];
document.getElementById("addNumberEx8").onclick = function () {
  let number = parseInt(document.getElementById("numberEx8").value);

  if (!isNaN(number)) {
    arrayEx8.push(number);
    document.querySelector(".array_numbers_ex8").innerHTML =
      ` [${arrayEx8.join(", ")}] `;
    document.getElementById("numberEx8").value = "";
  } else {
    return alert("Please enter a number");
  }
};
document.getElementById("calEx8").onclick = function () {
  let result = -1;

  // Hàm kiểm tra số nguyên tố
  function isPrime(n) {
    if (n <= 1) return false;
    for (let j = 2; j * j <= n; j++) {
      if (n % j === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < arrayEx8.length; i++) {
    if (isPrime(arrayEx8[i])) {
      result = arrayEx8[i];
      break;
    }
  }

  document.querySelector("#result8").innerHTML = result.toString();
  document.querySelector("#result8").style.display = "block";
};
document.getElementById("clearNumberEx8").onclick = function () {
  arrayEx8 = [];
  document.querySelector(".array_numbers_ex8").innerHTML = "";
  document.querySelector("#result8").style.display = "none";
};

// ex9
let arrayEx9 = [];
document.getElementById("addNumberEx9").onclick = function () {
  let number = parseFloat(document.getElementById("numberEx9").value);

  if (!isNaN(number)) {
    arrayEx9.push(number);
    document.querySelector(".array_numbers_ex9").innerHTML =
      ` [${arrayEx9.join(", ")}] `;
    document.getElementById("numberEx9").value = "";
  } else {
    return alert("Please enter a number");
  }
};

document.getElementById("calEx9").onclick = function () {
  let result = 0;
  for (let i = 0; i < arrayEx9.length; i++) {
    if (arrayEx9[i] % 1 === 0) {
      result++;
    }
  }
  document.querySelector("#result9").innerHTML =
    `The sum of integers in the array is ${result.toString()}`;
  document.querySelector("#result9").style.display = "block";
};
document.getElementById("clearNumberEx9").onclick = function () {
  arrayEx9 = [];
  document.querySelector(".array_numbers_ex9").innerHTML = "";
  document.querySelector("#result9").style.display = "none";
};

// ex10
let arrayEx10 = [];
document.getElementById("addNumberEx10").onclick = function () {
  let number = parseInt(document.getElementById("numberEx10").value);

  if (!isNaN(number)) {
    arrayEx10.push(number);
    document.querySelector(".array_numbers_ex10").innerHTML =
      ` [${arrayEx10.join(", ")}] `;
    document.getElementById("numberEx10").value = "";
  } else {
    return alert("Please enter a number");
  }
};

document.getElementById("calEx10").onclick = function () {
  let countPositive = 0;
  let countNegative = 0;

  for (let i = 0; i < arrayEx10.length; i++) {
    if (arrayEx10[i] > 0) {
      countPositive++;
    } else if (arrayEx10[i] < 0) {
      countNegative++;
    }
  }

  if (countPositive > countNegative) {
    document.querySelector("#result10").innerHTML =
      `The total number of positive numbers is greater: ${countPositive}`;
  } else if (countNegative > countPositive) {
    document.querySelector("#result10").innerHTML =
      `The total number of negative numbers is greater.: ${countNegative}`;
  } else {
    document.querySelector("#result10").innerHTML =
      `The count of positive and negative numbers is equal.`;
  }
  document.querySelector("#result10").style.display = "block";
};

document.getElementById("clearNumberEx10").onclick = function () {
  arrayEx10 = [];
  document.querySelector(".array_numbers_ex10").innerHTML = "";
  document.querySelector("#result10").style.display = "none";
};
