/**
 * Compares the values of two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const compareFunction = (a, b) => {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}