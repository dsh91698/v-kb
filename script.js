console.log('Virtual keyboard task');
//===============================================================================//
import { keysAll } from './assets/js/_kb_layout.js';
//console.log(keysAll);
//===============================================================================//
let isRussian = (localStorage.isRussian === 'true');
console.log('befor onload - isRussian: ', isRussian);

window.onload = function () {    // onload event
    //getLanguageForKeyboard(); // getting language from localStorage before creating keyboard
    isRussian = (localStorage.isRussian === 'true') //? true : false;
    console.log('onload - isRussian: ', isRussian);

    isCapsLock = (localStorage.isCapsLock === 'true'); // caps-lock flag
    if (isCapsLock) {
        capsLockKey.classList.add('CL_on');
    }
}
console.log('after onload - isRussian: ', isRussian);




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

function createKeyboard(isRussian) { // keyboard create
    //let lang = (isRussian ? 'ru' : 'en');
    let lang;
    console.log(isRussian, 'isRussian - in create keyboard function');
    (isRussian ? lang='en' : lang='ru');
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

    let headerText = createNewElement('h1', 'header-text', 'Virtual keyboard task'); // header on top
    document.body.append(headerText);

}



//createKeyboard('ru');
//TODO: save and restore from localStorage needs to be added

function getLanguageForKeyboard() {
    //get langv from localStorage
    localStorage.isRussian ? isRussian = (localStorage.isRussian === 'true') : isRussian = false;
    //createKeyboard(isRussian);
}
function setLanguageToLocalStorage() {
    localStorage.isRussian = isRussian;
}

//getLanguageForKeyboard(); // getting language from localStorage before creating keyboard
createKeyboard(isRussian);

document.addEventListener('keydown', (event) => { 
    if (event.ctrlKey && event.altKey)  { 
        console.log('alt -cntrl key pressed');
        //event.preventDefault();
        //event.stopPropagation();
        isRussian = !isRussian;
        setLanguageToLocalStorage();
        //createKeyboard(isRussian);
    }
});

// ================================================================================//

let isShiftPressed = false; // global flag for shift
//let shift;

document.addEventListener('keydown', function (event) {
    // catch keydown event on Shift keys and sets global var isShiftPressed
    //console.log('event.code keydown: ', event);
    if (event.code == 'ShiftRight' || event.code == 'ShiftLeft') {
        isShiftPressed = true;
    }  
    keystrokeCatcher(event);
});

document.addEventListener('keyup', function (event) {
    //console.log('event.code keyup: ', event.code);
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
    event.preventDefault(); // tab-key - prevent tabulation
    event.stopPropagation(); // tab-key - prevent tabulation
    if (event.type == 'keydown') {
        key.classList.add('key_pressed');
        keyboardClickCatcher(key);
    } else if (event.type == 'keyup') { 
        key.classList.remove('key_pressed');
    }
}
//--------------------keystrocke catcher - finish ----------------------------------------------------------------------------------------//

function setIsCapsLockToLocalStorage() {
    localStorage.isCapsLock = isCapsLock;
    console.log('setIsCapsLockToLocalStorage: ', localStorage.isCapsLock);
}


//TODO: save and restore from localStorage needs to be added
let isCapsLock;
const capsLockKey = document.querySelector('[data-key="CapsLock"]');
capsLockKey.addEventListener('click', () => {
    isCapsLock = !isCapsLock;
    setIsCapsLockToLocalStorage();
    if (isCapsLock) {
        capsLockKey.classList.add('CL_on');
    } else {
        capsLockKey.classList.remove('CL_on');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code == 'CapsLock') {
        isCapsLock = !isCapsLock;
        setIsCapsLockToLocalStorage();
        if (isCapsLock) {
            capsLockKey.classList.add('CL_on');
        } else {
            capsLockKey.classList.remove('CL_on');
        }
    }
});


const textAreaZone = document.querySelector('.textarea'); // place for text
const keyboard = document.querySelector('.keyboard');

keyboard.addEventListener('click', (event) => {
    mouseClickCatcher(event);
});


//--------- mouse click catcher -----------------//

function mouseClickCatcher(event) {
    // console.log('mouseClickCatcher - mouse click - code:', event.target.dataset.code);
    // console.log('mouseClickCatcher - mouse click - key:', event.target.dataset.key);
    // console.log('mouseClickCatcher - mouse click - shift:', event.target.dataset.shift);

    if (event.target.dataset.code === 'Backspace') { // if back-space
        textAreaZone.textContent = textAreaZone.textContent.slice(0, -1); // delete last letter
    } else if (event.target.dataset.code === 'Enter') { // if enter
        textAreaZone.innerHTML += '\n'; // add new line
    } else if (event.target.dataset.code === 'Space') { // if space
        textAreaZone.textContent += ' '; // add space
    } else if (event.target.dataset.code === 'Tab') { // if Tab
        textAreaZone.textContent += '\t'; // add tab ! works only when - white-space: pre-wrap; added in css
    } else if (
        event.target.dataset.key === 'Shift' ||
        event.target.dataset.key === 'Alt' ||
        event.target.dataset.key === 'Control' ||
        event.target.dataset.key === 'Meta' ||
        event.target.dataset.key === 'CapsLock'
    ) { void 0 }
    
    else {
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
    // console.log('kbClickCatcher - key click - code:', key.dataset.code);
    // console.log('kbClickCatcher - key click - key:', key.dataset.key);
    // console.log('kbClickCatcher - key click - shift:', key.dataset.shift);

    if (key.dataset.code === 'Backspace') { // if back-space
        textAreaZone.textContent = textAreaZone.textContent.slice(0, -1); // delete last letter
    } else if (key.dataset.code === 'Enter') { // if enter
        textAreaZone.innerHTML += '\n'; // add new line
    } else if (key.dataset.code === 'Space') { // if space
        textAreaZone.textContent += ' '; // add space
    } else if (key.dataset.code === 'Tab') { // if Tab
        textAreaZone.textContent += '\t'; // add tab ! works only when - white-space: pre-wrap; added in css
    } else if (
        key.dataset.key === 'Shift' ||
        key.dataset.key === 'Alt' ||
        key.dataset.key === 'Control' ||
        key.dataset.key === 'Meta' ||
        key.dataset.key === 'CapsLock'
    ) { void 0 }
    
    else {
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
