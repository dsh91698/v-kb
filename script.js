console.log('Virtual keyboard task');
//===============================================================================//
function createNewElement(tag, className, text) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.textContent = text;
    //element.innerHTML = text;
    return element;
}

let header = createNewElement('header', 'header', '');
let headerText = createNewElement('h1', 'header-text', 'Virtual keyboard task');
header.append(headerText);
document.body.prepend(header);

function createKeyboard() {
    let keyboard = createNewElement('div', 'keyboard', '');
    const keyboardContainer = createNewElement('div', 'container', '');
    keyboard.append(keyboardContainer);
    document.body.append(keyboard);
}

createKeyboard();

