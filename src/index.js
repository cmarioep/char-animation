import {checkForOptions} from './utils/checkers.js';
import {setAnimationStyle} from './utils/createCCSStyles.js';
import {setNewText} from './utils/setNewText.js';
import {setAnimation} from './utils/setAnimation.js';


const charAnimator = (selector, animation = `rubberBand`, color = `inherit;`, stroke = `inherit` ) => {
    
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



