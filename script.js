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
//let headerText = createNewElement('h1', 'header-text', 'Virtual keyboard task'); // header on top
//header.append(headerText);
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
        button.dataset.shift = keysAll[lang][key].onShift; // set dataset attribute - shift - when Shift-key pressed        
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
let isShiftPressed = false; // global flag for shift

document.addEventListener('keydown', function (event) {
    // catch keydown event on Shift keys and sets global var isShiftPressed
    console.log('event.code keydown: ', event.code);
    if (event.code == 'ShiftRight' || event.code == 'ShiftLeft') {
      isShiftPressed = true;
    }
    // if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    //     alert('Undo!')
    //   }
});
  
document.addEventListener('keyup', function (event) {
    console.log('event.code keyup: ', event.code);
    if (event.code == 'ShiftRight' || event.code == 'ShiftLeft') {
      isShiftPressed = false;
    }
});


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
    console.log('mouse click', event.target.dataset.code);
    console.log('mouse click', event.target.dataset.key);

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
            if (upperOrLowerKey(isCapsLock, isShiftPressed)) {
                isShiftPressed ? textAreaZone.textContent += event.target.dataset.shift : textAreaZone.textContent += event.target.dataset.key.toUpperCase(); // onShift
                //textAreaZone.textContent += event.target.dataset.key.toUpperCase();
            } else {
                isShiftPressed ? textAreaZone.textContent += event.target.dataset.shift : textAreaZone.textContent += event.target.dataset.key; // onShift keys
                //textAreaZone.textContent += event.target.dataset.key;
            }
            
        }
    }
});

function upperOrLowerKey(isCapsLock, isShiftPressed){ // checks if key should be upper or lowercase based on global vars
    if (isCapsLock && isShiftPressed) { return false }
    if (isCapsLock && !isShiftPressed) { return true }
    if (!isCapsLock && isShiftPressed) { return true }
    if (!isCapsLock && !isShiftPressed) { return false }
}



