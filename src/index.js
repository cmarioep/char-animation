import {checkForOptions} from './utils/checkers.js';
import {setAnimationStyle} from './utils/createCSStyles.js';
import {setNewText} from './utils/setNewText.js';
import {setAnimation} from './utils/setAnimation.js';


/**
 * Split strings text into single chars and applies animations to each one when the cursor passes over them
 * @param {String} selector class | id | tag
 * @param {String} animation rubberBand | bounce | pulse | tada | swing
 * @param {String} color #hex | rgb | rgba | hsl | hsla
 * @param {String} stroke #hex | rgb | rgba | hsl | hsla
 */
const charAnimator = (selector, animation, color = `inherit;`, stroke = `inherit` ) => {
    
    const hasValidOptions = checkForOptions(selector, animation, color, stroke);
    
    if (hasValidOptions) {
        setNewText(selector, animation, color, stroke);
        setAnimationStyle(animation);
        setAnimation(animation);
    } else {
        console.error("TypeError: An argument passed is incompatible with the type expected by the function");
    }

}


export default charAnimator;



