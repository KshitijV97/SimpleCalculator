// The display is just an text area in HTML where we put our expression as a string
let display = document.getElementById("display");

// The getElementsByClassName() method returns a collection of all elements in the document with the specified class name, as a NodeList object.

// The NodeList object represents a collection of nodes. A NodeList object is a list (collection) of nodes extracted from a document.The nodes can be accessed by index numbers.The index starts at 0.
let buttons = document.getElementsByClassName("btn");


let operation = "";

// For every button
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    //element.addEventListener(event, function)
    button.addEventListener("click", function () {
        // The classList property returns the class name(s) of an element, as a DOMTokenList object.
        // The DOMTokenList interface represents a set of space-separated tokens.
        // contains(class)	Returns a Boolean value, indicating whether an element has the specified class name.
        // Possible values:
        // true - the element contains the specified class name
        // false - the element does not contain the specified class name
        switch (button.classList.contains("action")) {
            case true:
                if (button.classList.contains("operator")) {
                    //Calling user defined Function
                    concatOperation(button);
                } else {
                    callAction(button);
                }
                break;
            case false:
                concatOperation(button);
                break;
        }
    });
}

function concatOperation(button) {
    // 
    if (button.classList.contains("operator")) {
        // if operation string is still empty then return
        if (!operation) {
            return;
        }
    }

    operation += button.dataset.value;

    display.innerHTML = operation;
}

function callAction(button) {
    switch (button.dataset.value) {
        case "calculate":
            operation = eval(operation).toString();
            display.innerHTML = operation;
            break;
        case "backspace":
            operation = operation.slice(0, -1);
            display.innerHTML = operation;
            break;
        case "clear":
            operation = "";
            display.innerHTML = "";
            break;
    }
}