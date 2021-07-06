const insertNewRule = (selector, declaration) => {
    const styleSheet = document.styleSheets[0];
    const maxRules = styleSheet.rules.length;

    styleSheet.insertRule(`${selector} { ${declaration} }`, maxRules);
}

const insertNewStyleElement = (selector, declaration) => {
    const head = document.querySelector("head");
    const newStyleElement = document.createElement("style");
    
    newStyleElement.append(`${selector} { ${declaration} }`);
    head.append(newStyleElement);
}

export {insertNewRule, insertNewStyleElement};