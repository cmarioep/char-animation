import {checkForSelector, checkForDeclaration, checkForArguments, checkForStylesSheets} from './checkers.js';
import {insertNewRule, insertNewStyleElement} from './createCSSRules.js';
import {rubberBand, bounce, pulse, tada, swing} from './styles.js';

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
        console.error("TypeError: An argument passed is incompatible with the type expected by the function");
    }
}


const setAnimationStyle = (animation) => {
    switch (animation) {
        case "rubberBand":
            createStyles(rubberBand.selector, rubberBand.declaration);
            createStyles(rubberBand.keyframesRule, rubberBand.keyFramesDeclaration);
            break;

        case "bounce":
            createStyles(bounce.selector, bounce.declaration);
            createStyles(bounce.keyframesRule, bounce.keyFramesDeclaration);
            break;

        case "pulse":
            createStyles(pulse.selector, pulse.declaration);
            createStyles(pulse.keyframesRule, pulse.keyFramesDeclaration);
            break;

        case "tada":
            createStyles(tada.selector, tada.declaration);
            createStyles(tada.keyframesRule, tada.keyFramesDeclaration);
            break;

        case "swing":
            createStyles(swing.selector, swing.declaration);
            createStyles(swing.keyframesRule, swing.keyFramesDeclaration);
            break;
    
        default:
            console.log("Animation is not defined");
            break;
    }
}

export {createStyles, setAnimationStyle};

