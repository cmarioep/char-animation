import {checkForOptions} from './utils/checkers.js';
import {setStyleAnimation} from './utils/createCCSStyles.js';
import {setNewText} from './utils/setNewText.js';
import {mouseEvent} from './utils/mouseHover.js';


const charAnimator = (selector, animation = `rubberBand`, color = `inherit;`, stroke = `inherit` ) => {
    
    const hasValidOptions = checkForOptions(selector, animation, color, stroke);
    
    if (hasValidOptions) {
        setNewText(selector, animation, color, stroke);
        setStyleAnimation(animation);
        mouseEvent(animation);
    } else {
        console.error("TypeError: An argument passed is incompatible with the type expected by the function");
    }

}


charAnimator(".rubber-Text", "rubberBand", "greenyellow", "blue");
charAnimator(".bounce-Text", "bounce", "greenyellow", "blue");
charAnimator(".pulse-Text", "pulse", "greenyellow", "blue");
charAnimator(".tada-Text", "tada", "greenyellow", "blue");
charAnimator(".swing-Text", "swing", "greenyellow", "blue");



