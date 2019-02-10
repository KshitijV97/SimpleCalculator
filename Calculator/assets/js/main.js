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
            // clear, backspace, evaluate
            case true:
                if (button.classList.contains("operator")) {
                    // Calling user defined Function to generate expression to be evaluated
                    concatOperation(button);
                } else {
                    // Throw value on Display
                    callAction(button);
                }
                break;
            // It not 'action' then it will be either digit or symbol so append to expression
            case false:
                concatOperation(button);
                break;
        }
    });
}

// This function 'generates' the expression to be evaluated
function concatOperation(button) {
    // 
    if (button.classList.contains("operator")) {
        // if operation string is still empty then return
        if (!operation) {
            return;
        }
    }
    // The dataset property on the HTMLElement interface provides read/write access to all the custom data attributes (data-*) set on the element.

    // Append the expression
    operation += button.dataset.value;

    // Just place the expression in the Display area
    display.innerHTML = operation;
}

// To throw value on Display
function callAction(button) {
    switch (button.dataset.value) {
        // If Calculate button is pressed
        case "calculate":
            // Evaluate that expression which was generated
            operation = eval(operation).toString();
            // Place that evaulated value in Display field
            display.innerHTML = operation;
            break;

        // If Backspace button is pressed
        case "backspace":
            // To delete one character from end
            operation = operation.slice(0, -1);
            // Place that evaulated value in Display field
            display.innerHTML = operation;
            break;
        case "clear":
            // If clear button is placed then clear the expression
            operation = "";
            // Clear the display
            display.innerHTML = "";
            break;
    }
}
