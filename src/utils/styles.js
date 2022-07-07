//CSS rule for each single char
const singleChar = {
    selector: `.char-animation--singleChar`,
    declaration: `display: inline-block; font-size: inherit`
}


//Default CSS rule for text-color and text-stroke
const hoverStyle = {
    selector: `.char-animation--hoverStyle`,
    declaration: `color: inherit; -webkit-text-stroke: 1px inherit;`
}


// CSS rules for available animations
// rubberBand | bounce | pulse | tada | swing |

const rubberBand =  {
    selector: `.char-animation--rubberBand`,
    declaration: `animation: char-animation--rubberBand 1.2s ease-in-out forwards;`,
    keyframesRule: `@keyframes char-animation--rubberBand`,
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
    selector: `.char-animation--bounce`,
    declaration: `animation: char-animation--bounce 1.2s both;`,
    keyframesRule: `@keyframes char-animation--bounce`,
    keyFramesDeclaration:
        `0%, 100%, 10%, 53%, 80% {
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
  selector: `.char-animation--pulse`,
  declaration: `animation: char-animation--pulse 1.2s both;`,
  keyframesRule: `@keyframes char-animation--pulse`,
  keyFramesDeclaration: 
      `0% {
        transform: scale3d(1, 1, 1)
      }
      50% {
        transform: scale3d(1.1, 1.1, 1.1)
      }
      100% {
        transform: scale3d(1, 1, 1)
      }`
}


const tada =  {
  selector: `.char-animation--tada`,
  declaration: `animation: char-animation--tada 1.2s both;`,
  keyframesRule: `@keyframes char-animation--tada`,
  keyFramesDeclaration: 
      `0% {
        transform: scale3d(1, 1, 1)
      }
      10%, 20% {
        transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)
      }
      30%, 50%, 70%, 90% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)
      }
      40%, 60%, 80% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)
      }
      100% {
        transform: scale3d(1, 1, 1)
      }`
}


const swing =  {
  selector: `.char-animation--swing`,
  declaration: `transform-origin: top center; animation: char-animation--swing 1.2s both;`,
  keyframesRule: `@keyframes char-animation--swing`,
  keyFramesDeclaration: 
      `20% {
        transform: rotate3d(0, 0, 1, 15deg)
      }
      40% {
        transform: rotate3d(0, 0, 1, -10deg)
      }
      60% {
        transform: rotate3d(0, 0, 1, 5deg)
      }
      80% {
        transform: rotate3d(0, 0, 1, -5deg)
      }
      100% {
        transform: rotate3d(0, 0, 1, 0deg)
      }`
}


export {singleChar, hoverStyle, rubberBand, bounce, pulse, tada, swing};