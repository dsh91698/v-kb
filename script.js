console.log('Virtual keyboard task');
//===============================================================================//
import {keysAll} from './_kb_layout.js';
//console.log(keysAll);
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

function createKeyboard(langv = 'en') {
    let lang = langv;
    let keyboard = createNewElement('div', 'keyboard', '');
    const keyboardContainer = createNewElement('div', 'container', '');
    keyboard.append(keyboardContainer);
    
    //Object.keys(keysAll.en).forEach(key => {
    Object.keys(keysAll[lang]).forEach(key => {
        let button = createSingleKey(keysAll[lang][key].className, keysAll[lang][key].key);
        button.dataset.code = keysAll[lang][key].code; // set dataset attribute
        keyboardContainer.append(button);
    });

    // Object.keys(keysAll.en).forEach(key => {
    //     console.log(key);
    //     console.log(keysAll.en[key].className, keysAll.en[key].key);
    // });

    // let a = createSingleKey();
    // keyboardContainer.append(a);
    // let b = createSingleKey('key_normal', 'w');
    // keyboardContainer.append(b);
    document.body.append(keyboard);
}

createKeyboard('en');
//createKeyboard('ru');

function createSingleKey(className = 'key_normal', text = 'q') {
    const key = createNewElement('div', className, text);
    return key;
}

// ================================================================================//
const keyboard = document.querySelector('.keyboard');
keyboard.addEventListener('click', (event) => {
    console.log(event.target.dataset.code );
});




