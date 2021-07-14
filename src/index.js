import {rubberBand, bounce, pulse, tada, swing} from './utils/styles.js';
import {createStyles} from './utils/createCCSStyles.js';
import {setNewText} from './utils/setNewText.js';
import {mouseEvent} from './utils/mouseHover.js';



createStyles(rubberBand.selector, rubberBand.declaration);
createStyles(rubberBand.keyframesRule, rubberBand.keyFramesDeclaration);

createStyles(bounce.selector, bounce.declaration);
createStyles(bounce.keyframesRule, bounce.keyFramesDeclaration);

createStyles(pulse.selector, pulse.declaration);
createStyles(pulse.keyframesRule, pulse.keyFramesDeclaration);

createStyles(tada.selector, tada.declaration);
createStyles(tada.keyframesRule, tada.keyFramesDeclaration);

createStyles(swing.selector, swing.declaration);
createStyles(swing.keyframesRule, swing.keyFramesDeclaration);


// TODO: Strict argument for selector
// TODO: check fot valid arguments

const animateText = (selector, animation, color = `inherit;`, stroke = `inherit` ) => {

    setNewText(selector, animation, color, stroke);
    mouseEvent(animation);

}

animateText(".rubber-Text", "rubberBand", "greenyellow", "blue");
animateText(".bounce-Text", "bounce", "greenyellow", "blue");
animateText(".pulse-Text", "pulse", "greenyellow", "blue");
animateText(".tada-Text", "tada", "greenyellow", "blue");
animateText(".swing-Text", "swing", "greenyellow", "blue");



