import {createStyles} from './createStyles.js';
import {singleChar, colorHover} from './styles.js';

let setNewText = (selector, color) => {

    colorHover.declaration = `color: ${color};`
    createStyles(singleChar.selector, singleChar.declaration);
    createStyles(colorHover.selector, colorHover.declaration);

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
              span.classList.add("singleChar");
            }
    
            newChars.push(span);
        })
    
        element.append(...newChars);
    })

}

export {setNewText};