import {createStyles} from './utils/createCCSStyles.js';
import {rubberBand, bounce, pulse, tada} from './utils/styles.js';
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


// TODO: Animation selector

const animateText = (selector, animation, color = `inherit;`, stroke = `inherit` ) => {

    setNewText(selector, color, stroke);
    mouseEvent(animation);

}

animateText(".rubberText", "tada", "greenyellow", "blue");



