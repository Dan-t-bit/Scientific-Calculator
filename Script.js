document.addEventListener("DOMContentLoaded", function () {
    console.log("document is ready");
    const display = document.getElementById("calc-display");
    const buttons = document.getElementsByClassName("btn");

    let currentValue = "";


    function evaluateResult() {
      console.log('currentValue:', currentValue);
      const convertedValue = currentValue
        .replace("×", "*")
        .replace("÷", "/")
        .replace("%", "*0.01");
        
      console.log ('convertedValue:', convertedValue );
      const result = eval(convertedValue);
      currentValue = result.toString();
      display.value = currentValue;
    }
    for (let i = 0; 1 < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener("click", function () {
        const value = button.innerText;

        if (value == "AC") {
          currentValue = "";
          display.value = currentValue;
        } else if(value == "=") {
          evaluateResult();
        } else {
          currentValue += value;
          console.log("currentValue", currentValue);
          display.value = currentValue;
        }
      });
    }
});