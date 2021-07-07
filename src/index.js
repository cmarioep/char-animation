import {createStyles} from './utils/createStyles.js';
import {singleChar, rubberBand} from './utils/styles.js';
import { setNewText } from './utils/setNewText.js';
import {removeAnimation, addAnimation, toogleAnimation} from './utils/mouseHover.js'


createStyles(singleChar.selector, singleChar.declaration)
createStyles(rubberBand.selector, rubberBand.declaration);
createStyles(rubberBand.keyframesRule, rubberBand.keyFramesDeclaration);


setNewText(".rubberText");

const mouseTarget = document.querySelectorAll('.singleChar');


mouseTarget.forEach( (item) => {
    item.addEventListener('mouseenter', e => {
        item.classList.add("rubberBand");
    });
})


mouseTarget.forEach((item) => {
    item.addEventListener('mouseleave', e => {
        toogleAnimation(item);    
    });
})