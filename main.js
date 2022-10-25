const container = document.querySelector(".container");
const counterInput = document.createElement("div");
    counterInput.setAttribute("id", "counter-input");
    container.append(counterInput);

let defaultValue = 0;

const createCounterElement = (tag, text, buttonid) => {
    const element = document.createElement(tag);
    element.innerText = text;
    element.setAttribute("id", buttonid);
    return element;
};

const counterDisplay = createCounterElement("span", defaultValue, "counter-display");

const increaseButton = createCounterElement("button", "+", "increase-button");
increaseButton.addEventListener("click", () =>{
    defaultValue++;
    document.querySelector("#counter-display").innerText = defaultValue;
})

const decreaseButton = createCounterElement("button", "-", "decrease-button");
decreaseButton.addEventListener("click", () => {
    if(defaultValue != 0){
        defaultValue--;
        document.querySelector("#counter-display").innerText = defaultValue;
    }
})

const resetButton = createCounterElement("button", "CLEAR", "reset-button");
resetButton.addEventListener("click", () => {
    defaultValue = 0
    document.querySelector("#counter-display").innerText = defaultValue;
})
    
counterInput.append(counterDisplay, increaseButton, decreaseButton, resetButton);
