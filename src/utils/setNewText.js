import {createStyles} from './createCSStyles.js';
import {singleChar, hoverStyle} from './styles.js';


// Split strings text into single chars
let setNewText = (selector, animation, color, stroke) => {

    //Set styles for text-color and text-stroke
    hoverStyle.declaration = `color: ${color};  -webkit-text-stroke: 1px ${stroke};`
    createStyles(singleChar.selector, singleChar.declaration);
    createStyles(hoverStyle.selector, hoverStyle.declaration);
    
    // Element which the animation will be applied
    let targetElement = document.querySelectorAll(selector);
    
    // Split selected strings text into single chars
    targetElement.forEach(element => {

        let text = element.textContent;
        let textArray = Array.from(text);
        const newChars = [];

        element.textContent="";

        // Set CSS rules for each single char
        textArray.forEach((char)=>{
            let span = document.createElement("span");
            span.textContent = char;
    
            if (span.textContent !== " ") {
              span.classList.add("char-animator--singleChar", `char-animator--singleChar--${animation}`);
            }
    
            newChars.push(span);
        })
    
        // Splitted string text
        element.append(...newChars);
    })

}


export {setNewText};