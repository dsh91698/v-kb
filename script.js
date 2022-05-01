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
    let a = createSingleKey();
    keyboardContainer.append(a);
    let b = createSingleKey('key_normal', 'w');
    keyboardContainer.append(b);
    createSingleKey();
    document.body.append(keyboard);
}

createKeyboard();

function createSingleKey(className = 'key_normal', text = 'q') {
    const key = createNewElement('div', className, text);
    return key;
}




