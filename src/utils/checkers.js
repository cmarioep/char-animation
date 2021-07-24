// checkers to validate arguments in createCSSStyles function


// Individual checker for selector argument
const checkForSelector = (selector) => {
    
    let checkedSelector = "";
    
    (typeof selector === "string") 
        ?checkedSelector = selector
        :checkedSelector = null;

    return checkedSelector;
}


// individual checker for declaration argument
const checkForDeclaration = (declaration) => {
    
    let checkedDeclaration;

    if(typeof declaration === "string") {
        checkedDeclaration = declaration;
    } 
    else if (Array.isArray(declaration)) {
        checkedDeclaration = declaration.join(";")
    } 
    else {
        checkedDeclaration = null;
    }

    return checkedDeclaration;
}


// checker for both arguments
const checkForArguments = (selector, declaration) => {

    const validSelector = checkForSelector(selector);
    const validDeclaration = checkForDeclaration(declaration);
    
    let hasValidArguments;

    (!validSelector || !validDeclaration)
        ? hasValidArguments = false
        : hasValidArguments = true;

    return hasValidArguments;
}
    

// checker for an associated styleSheet
const checkForStylesSheets = () => {
    
    let hasStylesSheets;

    (document.styleSheets.length > 0)
        ? hasStylesSheets = true
        : hasStylesSheets = false;

    return hasStylesSheets;

}

// checker for all argument in charAnimator function
const checkForOptions = (selector, animation, color, stroke) => {

    let hasValidOptions;
    const options = [selector, animation, color, stroke]
    const validOptions = options.every( (arg) => typeof arg === 'string');

    (validOptions)
        ? hasValidOptions = true
        : hasValidOptions = false;

    return hasValidOptions;

}


export {checkForSelector, checkForDeclaration, checkForArguments, checkForStylesSheets, checkForOptions};