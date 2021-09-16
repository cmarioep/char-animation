import {checkForOptions} from './utils/checkers.js';
import {setAnimationStyle} from './utils/createCSStyles.js';
import {setNewText} from './utils/setNewText.js';
import {setAnimation} from './utils/setAnimation.js';


/**
 * Split strings text into single chars and applies animations to each one when the cursor passes over them
 * @param {object} parameters
 * {
    * selector: class | id | tag,
    * animation: rubberBand | bounce | pulse | tada | swing,
    * color: #hex | rgb | rgba | hsl | hsla, 
    * stroke: #hex | rgb | rgba | hsl | hsla
 * }
 */
const charAnimation = ({selector, animation, color = `inherit;`, stroke = `inherit`} = {} ) => {
    
    const hasValidOptions = checkForOptions(selector, animation, color, stroke);
    
    if (hasValidOptions) {
        setNewText(selector, animation, color, stroke);
        setAnimationStyle(animation);
        setAnimation(animation);
    } else {
        console.error("TypeError: An argument passed is incompatible with the type expected by the function");
    }

}


export default charAnimation;



