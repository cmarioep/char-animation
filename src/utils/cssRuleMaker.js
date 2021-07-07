// Functions to create new CSS rules


// Insert new rule at the end of the first associated styleSheet
const insertNewRule = (selector, declaration) => {
    const styleSheet = document.styleSheets[0];
    const totalRules = styleSheet.rules.length;

    styleSheet.insertRule(`${selector} { ${declaration} }`, totalRules);
}


// Insert new styleSheet in case there is none
const insertNewStyleElement = (selector, declaration) => {
    const head = document.querySelector("head");
    const newStyleElement = document.createElement("style");
    
    newStyleElement.append(`${selector} { ${declaration} }`);
    head.append(newStyleElement);
}


export {insertNewRule, insertNewStyleElement};