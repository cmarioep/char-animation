import {checkForSelector, checkForDeclaration, checkForArguments, checkForStylesSheets} from './cssRuleMaker_argumentsCheckers.js';
import {insertNewRule, insertNewStyleElement} from './cssRuleMaker.js';

// Create Styles for text-char-animation
const createStyles = (selector, declaration) => {

    const hasValidArguments = checkForArguments(selector, declaration);
    const hasStyleSheets = checkForStylesSheets();

    if (hasValidArguments) {
        const validSelector = checkForSelector(selector);
        const validDeclaration = checkForDeclaration(declaration);

        (hasStyleSheets) 
            ? insertNewRule(validSelector, validDeclaration)       
            : insertNewStyleElement(validSelector, validDeclaration);

    } else {
        console.log("TypeError: An argument passed is incompatible with the type expected by the function");
    }
}

export {createStyles};

