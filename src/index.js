import {createStyles} from './utils/createStyles.js';
import {singleChar, rubberBand} from './utils/styles.js';


createStyles(singleChar.selector, singleChar.declaration)
createStyles(rubberBand.selector, rubberBand.declaration);
createStyles(rubberBand.keyframesRule, rubberBand.keyFramesDeclaration);