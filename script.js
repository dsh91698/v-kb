console.log('Virtual keyboard task');
//===============================================================================//
import { keysAll } from './_kb_layout.js';
//console.log(keysAll);
//===============================================================================//
function createNewElement(tag, className, text, shiftText = '') {
    const element = document.createElement(tag);
    element.classList.add(className);
    //element.textContent = text;
    shiftText ? element.innerHTML = shiftText + '<br />' : void 0; // if onshift attribute exists - add it to the element on new line
    element.innerHTML += `${text}`;
    return element;
}

function createSingleKey(className = 'key_normal', text = 'q', shiftText = '') {
    const key = createNewElement('div', className, text, shiftText);
    return key;
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
        let button = createSingleKey(keysAll[lang][key].className, keysAll[lang][key].key, keysAll[lang][key].onShift);
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


// ================================================================================//
//TODO: save and restore from localStorage needs to be added
let isShiftPressed = false; // global flag for shift
//let shift;

document.addEventListener('keydown', function (event) {
    // catch keydown event on Shift keys and sets global var isShiftPressed
    console.log('event.code keydown: ', event);
    if (event.code == 'ShiftRight' || event.code == 'ShiftLeft') {
        isShiftPressed = true;
    }
    keystrokeCatcher(event);
});

document.addEventListener('keyup', function (event) {
    console.log('event.code keyup: ', event.code);
    if (event.code == 'ShiftRight' || event.code == 'ShiftLeft') {
        isShiftPressed = false;
    }
    keystrokeCatcher(event);
});

//--------------------keystrocke catcher - start ----------------------------------------------------------------------------------------//
let key;
function keystrokeCatcher(event) { 
    //console.log('keystrokeCatcher - keystroke - code:', event.code, event.type);
    key = document.querySelector(`[data-code="${event.code}"]`);
    event.preventDefault();
    event.stopPropagation();
    if (event.type == 'keydown') {
        key.classList.add('key_pressed');
        keyboardClickCatcher(key);
    } else if (event.type == 'keyup') { 
        key.classList.remove('key_pressed');
    }
}
//--------------------keystrocke catcher - finish ----------------------------------------------------------------------------------------//



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
    mouseClickCatcher(event);
});


//--------- mouse click catcher -----------------//

function mouseClickCatcher(event) {
    console.log('mouseClickCatcher - mouse click - code:', event.target.dataset.code);
    console.log('mouseClickCatcher - mouse click - key:', event.target.dataset.key);
    console.log('mouseClickCatcher - mouse click - shift:', event.target.dataset.shift);

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
            if (isUpperCase(isCapsLock, isShiftPressed)) {
                isShiftPressed ? // onShift
                    event.target.dataset.shift != 'undefined' ? // if onShift exists
                        textAreaZone.textContent += event.target.dataset.shift // value from dataset.shift
                        : textAreaZone.textContent += event.target.dataset.key.toUpperCase()
                    : textAreaZone.textContent += event.target.dataset.key.toUpperCase(); // value from dataset.key
            } else {
                isShiftPressed ? // onShift keys
                    event.target.dataset.shift != 'undefined' ? // if onShift exists
                        textAreaZone.textContent += event.target.dataset.shift  // value from dataset.shift
                        : textAreaZone.textContent += event.target.dataset.key  // value from dataset.key
                    : textAreaZone.textContent += event.target.dataset.key.toLowerCase(); // value from dataset.key
            }

        }
    }
}

function isUpperCase(isCapsLock, isShiftPressed) {
    // checks if key should be upper or lowercase based on global vars
    if (isCapsLock && isShiftPressed) { return false }
    if (isCapsLock && !isShiftPressed) { return true }
    if (!isCapsLock && isShiftPressed) { return true }
    if (!isCapsLock && !isShiftPressed) { return false }
}

//-------------------------------------------------------------------------------------------------------------//

function keyboardClickCatcher(key) {
    console.log('kbClickCatcher - key click - code:', key.dataset.code);
    console.log('kbClickCatcher - key click - key:', key.dataset.key);
    console.log('kbClickCatcher - key click - shift:', key.dataset.shift);

    if (key.dataset.code === 'Backspace') { // if back-space
        textAreaZone.textContent = textAreaZone.textContent.slice(0, -1); // delete last letter
    } else if (key.dataset.code === 'Enter') { // if enter
        textAreaZone.innerHTML += '\n'; // add new line
    } else if (key.dataset.code === 'Space') { // if space
        textAreaZone.textContent += ' '; // add space
    } else if (key.dataset.code === 'Tab') { // if Tab
        textAreaZone.textContent += '\t'; // add tab ! works only when - white-space: pre-wrap; added in css
    } else {

        if (key.dataset.key) { // if NOT undefined 
            // than add letter or whatever in low or upper case
            if (isUpperCase(isCapsLock, isShiftPressed)) {
                isShiftPressed ? // onShift
                    key.dataset.shift != 'undefined' ? // if onShift exists
                        textAreaZone.textContent += key.dataset.shift // value from dataset.shift
                        : textAreaZone.textContent += key.dataset.key.toUpperCase()
                    : textAreaZone.textContent += key.dataset.key.toUpperCase(); // value from dataset.key
            } else {
                isShiftPressed ? // onShift keys
                    key.dataset.shift != 'undefined' ? // if onShift exists
                        textAreaZone.textContent += key.dataset.shift  // value from dataset.shift
                        : textAreaZone.textContent += key.dataset.key  // value from dataset.key
                    : textAreaZone.textContent += key.dataset.key.toLowerCase(); // value from dataset.key
            }

        }
    }
}
