import {checkForStylesSheets} from './checkers.js';
import {insertNewRule, insertNewStyleElement} from './createCSSRules.js';
import {rubberBand, bounce, pulse, tada, swing} from './styles.js';


/**
 * Create styles for animations
 * @param {String} selector class | id | tag
 * @param {String | Array} declaration properties declaration
 */
const createStyles = (selector, declaration) => {

    const hasStyleSheets = checkForStylesSheets();

        (hasStyleSheets) 
            ? insertNewRule(selector, declaration)       
            : insertNewStyleElement(selector, declaration);

}


// Create a CSS style rule according to the selected animation
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

