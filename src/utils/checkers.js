// checkers to validate arguments in CSS Rule Maker


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
    
    let validArguments;

    (!validSelector || !validDeclaration)
        ? validArguments = false
        : validArguments = true;

    return validArguments;
}
    

// checker for an associated styleSheet
const checkForStylesSheets = () => {
    
    let hasStylesSheets;

    (document.styleSheets.length > 0)
        ? hasStylesSheets = true
        : hasStylesSheets = false;

    return hasStylesSheets;

}


export {checkForSelector, checkForDeclaration, checkForArguments, checkForStylesSheets};