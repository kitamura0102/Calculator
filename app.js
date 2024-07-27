const calculatorEl = document.getElementById("calculator-btn");
const inputValue = document.getElementById("input-value");
const deleteBtn = document.querySelector(".delete");
const cleanBtn = document.querySelector(".clean");
const percentageBtn = document.querySelector(".percentage");
const divideBtn = document.querySelector(".divide");
const porBtn = document.querySelector(".por");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const dotBtn = document.querySelector(".dot");
const equalBtn = document.querySelector(".equal");
const timesBtn = document.querySelector(".times");


calculatorEl.addEventListener("click", function (event) {
  if (event.target.classList.contains("numbers")) {
    const numberValue = event.target.textContent;
    const numericValue = Number(numberValue);
    inputValue.value += numericValue
    currentValue = inputValue.value
  }else if(event.target.classList.contains("dot")){
    inputValue.value += event.target.textContent;
  }
  else if(event.target.classList.contains("plus")){
    inputValue.value += event.target.textContent;
  }
  else if(event.target.classList.contains("divide")){
    inputValue.value += event.target.textContent;
  }
  else if(event.target.classList.contains("percentage")){
    inputValue.value += event.target.textContent;
  }else if(event.target.classList.contains("times")){
    inputValue.value += "**"
  }else if(event.target.classList.contains("por")){
    inputValue.value += event.target.textContent;
  }else if(event.target.classList.contains("minus")){
    inputValue.value += event.target.textContent;
  }else if(event.target.classList.contains("times")){
    inputValue.value += event.target.textContent;
  }else if(event.target.classList.contains("equal")){
    try{
        inputValue.value = eval(inputValue.value)
    }
    catch(error){
        inputValue.value = "Error"
    }
    
  }else if(event.target.classList.contains("delete")){
    inputValue.value = inputValue.value.slice(0, -1);
  }else if(event.target.classList.contains("clean")){
    inputValue.value = "";
  }
});

