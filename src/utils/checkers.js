// checker for an associated styleSheet in createCSSStyles function
const checkForStylesSheets = () => {
    
    let hasStylesSheets;

    (document.styleSheets.length > 0)
        ? hasStylesSheets = true
        : hasStylesSheets = false;

    return hasStylesSheets;

}


// checker for all argument in charAnimation function
const checkForOptions = (selector, animation, color, stroke) => {

    let hasValidOptions;
    
    const options = [selector, animation, color, stroke]
    const validOptions = options.every( (arg) => typeof arg === 'string');

    (validOptions)
        ? hasValidOptions = true
        : hasValidOptions = false;

    return hasValidOptions;

}


export { checkForStylesSheets, checkForOptions };