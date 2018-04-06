// This will not work on any objects containing functions
export function deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
}