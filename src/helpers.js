// This will not work on any objects containing functions
export function deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
}

export function sanitizeText(str) {
    str = str.replace(/\n|\r/g, '').trim().toLowerCase();
    return str;
}

export function getLast250Characters(str) {
    if (str.length >= 250) {
        return str.slice(-251, -1);
    } else {
        return str;
    }
}

export const textChars = [' ', '!', ',', '.', ':', ';', '?', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
export const textWindowSize = 50;
export const textCharsToIndices = {
    'l': 18, 
    'y': 31, 
    'q': 23, 
    'x': 30, 
    'w': 29, 
    's': 25, 
    'u': 27, 
    'f': 12, 
    ';': 5, 
    'c': 9, 
    'b': 8, 
    'r': 24, 
    'n': 20, 
    ',': 2, 
    'v': 28, 
    'e': 11, 
    '!': 1, 
    'g': 13, 
    '?': 6, 
    ':': 4, 
    '.': 3, 
    ' ': 0, 
    'k': 17, 
    'i': 15, 
    'a': 7, 
    'p': 22, 
    'd': 10, 
    'h': 14, 
    'm': 19, 
    't': 26, 
    'j': 16, 
    'o': 21, 
    'z': 32
};
export const textIndicesToChars = {
    0: ' ', 
    1: '!', 
    2: ',', 
    3: '.', 
    4: ':', 
    5: ';', 
    6: '?', 
    7: 'a', 
    8: 'b', 
    9: 'c', 
    10: 'd', 
    11: 'e', 
    12: 'f', 
    13: 'g', 
    14: 'h', 
    15: 'i', 
    16: 'j', 
    17: 'k', 
    18: 'l', 
    19: 'm', 
    20: 'n', 
    21: 'o', 
    22: 'p', 
    23: 'q', 
    24: 'r', 
    25: 's', 
    26: 't', 
    27: 'u', 
    28: 'v', 
    29: 'w', 
    30: 'x', 
    31: 'y', 
    32: 'z'
};