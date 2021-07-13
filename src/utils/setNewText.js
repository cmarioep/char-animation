import {createStyles} from './createCCSStyles.js';
import {singleChar, hoverStyle} from './styles.js';

let setNewText = (selector, color, stroke) => {

    hoverStyle.declaration = `color: ${color};  -webkit-text-stroke: 1px ${stroke};`
    createStyles(singleChar.selector, singleChar.declaration);
    createStyles(hoverStyle.selector, hoverStyle.declaration);

    let targetElement = document.querySelectorAll(selector);

    targetElement.forEach(element => {

        let text = element.textContent;
        let textArray = Array.from(text);
        const newChars = [];

        element.textContent="";

        textArray.forEach((char)=>{
            let span = document.createElement("span");
            span.textContent = char;
    
            if (span.textContent !== " ") {
              span.classList.add("char-animator--singleChar");
            }
    
            newChars.push(span);
        })
    
        element.append(...newChars);
    })

}

export {setNewText};