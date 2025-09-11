const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["+", "-", "*", "/", "%", "="];
let output = "";

//Defining the functions based on button clicks
const calculate = (btnvalue) => {
    display.focus();
    if (btnvalue === "=" && output !== "") {
        //if output has "%", replace it with "/100" before evaluating
        output = eval(output.replace("%", "/100"));
}else if(btnvalue === "AC"){
    output = "";
} else if(btnvalue === "DEL"){
    //If the DEL btn is clicked, remove the last character from output
    output = output.toString().slice(0, -1);
}else{
    //if output is empty and btn is a special char then return
    if (output === "" && specialChars.includes(btnvalue)) return;
    output += btnvalue;
}
display.value = output;
};
//Adding event listeners to buttons, call calculate() on click
buttons.forEach((button) => {
    //btn click listener calls calculate function with dataset value
        button.addEventListener("click", (e) => calculate(e.target.dataset.value))
    });