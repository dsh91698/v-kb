console.log('Virtual keyboard task');
//===============================================================================//
import {keysAll} from './_kb_layout.js';
//console.log(keysAll);
//===============================================================================//
function createNewElement(tag, className, text) {
    const element = document.createElement(tag);
    element.classList.add(className);
    //element.textContent = text;
    element.innerHTML = text;
    return element;
}

let header = createNewElement('header', 'header', '');
let headerText = createNewElement('h1', 'header-text', 'Virtual keyboard task'); // header on top
header.append(headerText);
let textArea = createNewElement('div', 'textarea', ''); // place for text
header.append(textArea);
document.body.prepend(header);

function createKeyboard(langv = 'en') { // keyboard create
    let lang = langv;
    let keyboard = createNewElement('div', 'keyboard', '');
    const keyboardContainer = createNewElement('div', 'container', '');
    keyboard.append(keyboardContainer);
    
    //Object.keys(keysAll.en).forEach(key => {
    Object.keys(keysAll[lang]).forEach(key => {
        let button = createSingleKey(keysAll[lang][key].className, keysAll[lang][key].key);
        button.dataset.code = keysAll[lang][key].code; // set dataset attribute - code
        button.dataset.key = keysAll[lang][key].key; // set dataset attribute - key
        //todo: add symbols for shift to dataset
        keyboardContainer.append(button);
    });

    // Object.keys(keysAll.en).forEach(key => {
    //     console.log(key);
    //     console.log(keysAll.en[key].className, keysAll.en[key].key);
    // });

    // let a = createSingleKey();
    // keyboardContainer.append(a);
    document.body.append(keyboard);
}

createKeyboard('en');
//createKeyboard('ru');

function createSingleKey(className = 'key_normal', text = 'q') {
    const key = createNewElement('div', className, text);
    return key;
}

// ================================================================================//
//TODO: save and restore from localStorage needs to be added
let isCapsLock = false; // caps-lock flag
const capsLockKey = document.querySelector('[data-key="CapsLock"]');
capsLockKey.addEventListener('click', () => { 
    isCapsLock = !isCapsLock;
    if (isCapsLock) {
        capsLockKey.classList.add('CL_on');
    } else {
        capsLockKey.classList.remove('CL_on');
    }
});

const textAreaZone = document.querySelector('.textarea'); // place for text
const keyboard = document.querySelector('.keyboard');

keyboard.addEventListener('click', (event) => {
    console.log(event.target.dataset.code);
    console.log(event.target.dataset.key);

    if (event.target.dataset.code === 'Backspace') { // if back-space
        textAreaZone.textContent = textAreaZone.textContent.slice(0, -1); // delete last letter
    } else if (event.target.dataset.code === 'Enter') { // if enter
        textAreaZone.innerHTML += '\n'; // add new line
    } else if (event.target.dataset.code === 'Space') { // if space
        textAreaZone.textContent += ' '; // add space
    } else if (event.target.dataset.code === 'Tab') { // if Tab
        textAreaZone.textContent += '\t'; // add tab ! works only when - white-space: pre-wrap; added in css
    } else {
        if (event.target.dataset.key) { // if NOT undefined 
            // than add letter or whatever in low or upper case
            isCapsLock ? textAreaZone.textContent += event.target.dataset.key.toUpperCase() : textAreaZone.textContent += event.target.dataset.key; 
            //textAreaZone.textContent += event.target.dataset.key;
        }
    }
});




