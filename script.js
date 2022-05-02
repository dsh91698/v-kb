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
        key_q: {
            "key": "q",
            "keyCode": 81,
            "which": 81,
            "code": "KeyQ",
            "location": 0,
            "description": "q"
        },
        key_w: {
            "key": "w",
            "keyCode": 87,
            "which": 87,
            "code": "KeyW",
            "location": 0,
            "description": "w"
        },
        key_e: {
            "key": "e",
            "keyCode": 69,
            "which": 69,
            "code": "KeyE",
            "location": 0,
            "description": "e"
        },
        key_r: {
            "key": "r",
            "keyCode": 82,
            "which": 82,
            "code": "KeyR",
            "location": 0,
            "description": "r"
        },
        key_t: {
            "key": "t",
            "keyCode": 84,
            "which": 84,
            "code": "KeyT",
            "location": 0,
            "description": "t"
        },
        key_y: {
            "key": "y",
            "keyCode": 89,
            "which": 89,
            "code": "KeyY",
            "location": 0,
            "description": "y"
        },
        key_u: {
            "key": "u",
            "keyCode": 85,
            "which": 85,
            "code": "KeyU",
            "location": 0,
            "description": "u"
        },
        key_i: {
            "key": "i",
            "keyCode": 73,
            "which": 73,
            "code": "KeyI",
            "location": 0,
            "description": "i"
        },
        key_o: {
            "key": "o",
            "keyCode": 79,
            "which": 79,
            "code": "KeyO",
            "location": 0,
            "description": "o"
        },
        key_p: {
            "key": "p",
            "keyCode": 80,
            "which": 80,
            "code": "KeyP",
            "location": 0,
            "description": "p"
        },
        key_bracket_left: {
            "key": "[",
            "keyCode": 160,
            "which": 160,
            "code": "BracketLeft",
            "location": 0,
            "altKey": false,
            "ctrlKey": false,
            "metaKey": false,
            "shiftKey": false,
            "description": "^"
        },
        key_bracket_right: {
            "key": "]",
            "keyCode": 221,
            "which": 221,
            "code": "BracketRight",
            "location": 0,
            "description": "close bracket / å"
        },
        key_backslash: {
            "key": "\\",
            "keyCode": 220,
            "which": 220,
            "code": "Backslash",
            "location": 0,
            "description": "back slash"
        },
        //==========3d row ===============================================//
        key_capslock: {
        "className": "key_fn_short",
        "key": "CapsLock",
        "keyCode": 20,
        "which": 20,
        "code": "CapsLock",
        "location": 0,
        "description": "caps lock",
        "unicode": "⇪"
        },
        key_a: {
            "key": "a",
            "keyCode": 65,
            "which": 65,
            "code": "KeyA",
            "location": 0,
            "description": "a"
        },
        key_s: {
            "key": "s",
            "keyCode": 83,
            "which": 83,
            "code": "KeyS",
            "location": 0,
            "description": "s"
        },
        key_d: {
            "key": "d",
            "keyCode": 68,
            "which": 68,
            "code": "KeyD",
            "location": 0,
            "description": "d"
        },
        key_f: {
            "key": "f",
            "keyCode": 70,
            "which": 70,
            "code": "KeyF",
            "location": 0,
            "description": "f"
        },
        key_g: {
            "key": "g",
            "keyCode": 71,
            "which": 71,
            "code": "KeyG",
            "location": 0,
            "description": "g"
        },
        key_h: {
            "key": "h",
            "keyCode": 72,
            "which": 72,
            "code": "KeyH",
            "location": 0,
            "description": "h"
        },
        key_j: {
            "key": "j",
            "keyCode": 74,
            "which": 74,
            "code": "KeyJ",
            "location": 0,
            "description": "j"
        },
        key_k: {
            "key": "k",
            "keyCode": 75,
            "which": 75,
            "code": "KeyK",
            "location": 0,
            "altKey": true,
            "ctrlKey": false,
            "metaKey": true,
            "shiftKey": false,
            "description": "k"
        },
        key_l: {
            "key": "l",
            "keyCode": 76,
            "which": 76,
            "code": "KeyL",
            "location": 0,
            "altKey": true,
            "ctrlKey": false,
            "metaKey": true,
            "shiftKey": false,
            "description": "l"
        },
        key_semicolon: {
            "key": ";",
            "keyCode": 59,
            "which": 59,
            "code": "Semicolon",
            "location": 0,
            "description": "semicolon (firefox), equals"
        },
        key_quote: {
            "key": "'",
            "keyCode": 222,
            "which": 222,
            "code": "Quote",
            "location": 0,
            "description": "single quote / ø / ä"
        },
        key_enter: {
            "className": "key_fn_short",
            "key": "Enter",
            "keyCode": 13,
            "which": 13,
            "code": "Enter",
            "location": 0,
            "description": "Enter / Return",
            "unicode": "↵"
        },
        //==========4th row ===============================================//
        key_shift_left: {
            "className": "key_fn_long",
            "key": "Shift",
            "keyCode": 16,
            "which": 16,
            "code": "ShiftLeft",
            "location": 1,
            "description": "shift",
            "unicode": "⇧"
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




