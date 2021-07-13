import {createStyles} from './utils/createCCSStyles.js';
import {rubberBand} from './utils/styles.js';
import {setNewText} from './utils/setNewText.js';
import {mouseEvent} from './utils/mouseHover.js';



createStyles(rubberBand.selector, rubberBand.declaration);
createStyles(rubberBand.keyframesRule, rubberBand.keyFramesDeclaration);


// TODO: Animation selector

const animateText = (selector, color = `inherit;`, stroke = `inherit` ) => {

    setNewText(selector, color, stroke);
    mouseEvent();

}

animateText(".rubberText", "greenyellow", "blue");



