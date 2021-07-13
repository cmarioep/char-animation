const singleChar = {
    selector: `.singleChar`,
    declaration: `display: inline-block;`
}

const hoverStyle = {
    selector: `.char-animator--hoverStyle`,
    declaration: `color: inherit; -webkit-text-stroke: 1px inherit;`
}


const rubberBand =  {
    selector: `.char-animator--rubberBand`,
    declaration: `animation: char-animator--rubberBand 1.2s ease-in-out forwards;`,
    keyframesRule: `@keyframes char-animator--rubberBand`,
    keyFramesDeclaration: 
        `0%{transform: scale3d(1,1,1);}
        30%{transform: scale3d(1.25,0.75,1);}
        40%{transform: scale3d(0.75,1.25,1);}
        50%{transform: scale3d(1.15,0.85,1);}
        65%{transform: scale3d(0.95,1.05,1);}
        75%{transform: scale3d(1.05,0.95,1);}
        100%{transform: scale3d(1,1,1);}`
}

export {singleChar, hoverStyle, rubberBand};