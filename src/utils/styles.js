const singleChar = {
    selector: `.char-animator--singleChar`,
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
        `0% {
          transform: scale3d(1,1,1);
        }
        30% {
          transform: scale3d(1.25,0.75,1);
        }
        40% {
          transform: scale3d(0.75,1.25,1);
        }
        50% {
          transform: scale3d(1.15,0.85,1);
        }
        65% {
          transform: scale3d(0.95,1.05,1);
        }
        75% {
          transform: scale3d(1.05,0.95,1);
        }
        100% {
          transform: scale3d(1,1,1);
        }`
}


const bounce =  {
    selector: `.char-animator--bounce`,
    declaration: `animation: char-animator--bounce 1s infinite both;`,
    keyframesRule: `@keyframes char-animator--bounce`,
    keyFramesDeclaration:
        `0%, 100%, 20%, 53%, 80% {
            transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
            transform: translate3d(0, 0, 0)
          }
          40%, 43% {
            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            transform: translate3d(0, -20px, 0)
          }
          70% {
            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            transform: translate3d(0, -10px, 0)
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }`
}


const pulse =  {
  selector: `.char-animator--pulse`,
  declaration: `animation: char-animator--pulse 1s infinite both;`,
  keyframesRule: `@keyframes char-animator--pulse`,
  keyFramesDeclaration: 
      `0% {
        transform: scale3d(1, 1, 1)
      }
      50% {
        transform: scale3d(1.05, 1.05, 1.05)
      }
      100% {
        transform: scale3d(1, 1, 1)
      }`
}


export {singleChar, hoverStyle, rubberBand, bounce, pulse};