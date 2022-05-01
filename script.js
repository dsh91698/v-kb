console.log('Virtual keyboard task');
//===============================================================================//
//===============================================================================//
const keysAll = {
    //===============================================================================//
    en: {
        key_0: {
            "className": "key_normal",
            "key": "`",
            "keyCode": 192,
            "which": 192,
            "code": "Backquote",
            "location": 0,
            "description": "Backtick / grave accent / ñ / æ / ö"
        },
        key_1: {
            "className": "key_normal",
            "key": "1",
            "keyCode": 49,
            "which": 49,
            "code": "Digit1",
            "location": 0,
            "description": "1 Key",
            "unicode": "①"
        },
        key_2: {
            "className": "key_normal",
            "key": "2",
            "keyCode": 50,
            "which": 50,
            "code": "Digit2",
            "location": 0,
            "description": "2 Key",
            "unicode": "②"
        },
        key_3: {
            "className": "key_normal",
            "key": "3",
            "keyCode": 51,
            "which": 51,
            "code": "Digit3",
            "location": 0,
            "description": "3 Key",
            "unicode": "③"
           },
        key_4: {
            "className": "key_normal",
            "key": "4",
            "keyCode": 52,
            "which": 52,
            "code": "Digit4",
            "location": 0,
            "description": "4 Key",
            "unicode": "④"
        },
        key_5: {
            "className": "key_normal",
            "key": "5",
            "keyCode": 53,
            "which": 53,
            "code": "Digit5",
            "location": 0,
            "description": "5 Key",
            "unicode": "⑤"
        },
        key_6: {
            "className": "key_normal",
            "key": "6",
            "keyCode": 54,
            "which": 54,
            "code": "Digit6",
            "location": 0,
            "description": "6 Key",
            "unicode": "⑥"
        },
        key_7: {
            "className": "key_normal",
            "key": "7",
            "keyCode": 55,
            "which": 55,
            "code": "Digit7",
            "location": 0,
            "description": "7 Key",
            "unicode": "⑦"
           },
        key_8: {
            "className": "key_normal",
            "key": "8",
            "keyCode": 56,
            "which": 56,
            "code": "Digit8",
            "location": 0,
            "description": "8 Key",
            "unicode": "⑧"
        },
        key_9: {
            "className": "key_normal",
            "key": "9",
            "keyCode": 57,
            "which": 57,
            "code": "Digit9",
            "location": 0,
            "description": "9 Key",
            "unicode": "⑨"
        },
        key_0: {
            "className": "key_normal",
            "key": "0",
            "keyCode": 48,
            "which": 48,
            "code": "Digit0",
            "location": 0,
            "description": "0",
            "unicode": "⓪"
        },
        key_minus: {
            "className": "key_normal",
            "key": "-",
            "keyCode": 109,
            "which": 109,
            "code": "NumpadSubtract",
            "location": 3,
            "description": "subtract"
        },
        key_equal: {
            "className": "key_normal",
            "key": "=",
            "keyCode": 61,
            "which": 61,
            "code": "Equal",
            "location": 0,
            "description": "equals (firefox)"
        },
        key_backspace: {
            "className": "key_fn_long",
            "key": "Backspace",
            "keyCode": 8,
            "which": 8,
            "code": "Backspace",
            "location": 0,
            "description": "backspace / delete",
            "unicode": "⌫"
        },
        //==========2d row =====================================================================//
        key_tab: {
            "className": "key_fn_short",
            "key": "Tab",
            "keyCode": 9,
            "which": 9,
            "code": "Tab",
            "location": 0,
            "description": "tab",
            "unicode": "↹"
           },
    },
    //=================RU======================================================//
    ru: {},
}
console.log(keysAll);
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
    
    Object.keys(keysAll.en).forEach(key => {
        let button = createSingleKey(keysAll.en[key].className, keysAll.en[key].key);
        keyboardContainer.append(button);
    });

    Object.keys(keysAll.en).forEach(key => {
        console.log(key);
        console.log(keysAll.en[key].className, keysAll.en[key].key);
    });
    // let a = createSingleKey();
    // keyboardContainer.append(a);
    // let b = createSingleKey('key_normal', 'w');
    // keyboardContainer.append(b);
    document.body.append(keyboard);
}

createKeyboard();

function createSingleKey(className = 'key_normal', text = 'q') {
    const key = createNewElement('div', className, text);
    return key;
}




