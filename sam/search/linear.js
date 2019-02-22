/**
 * Linear Search
 * Best case : O(1)
 * Worst case: O(n)
 * 
 * @param {Array} items List of items to search
 * @param {Number | String} searchTerm Item to search for
 * 
 * @returns {Number} Index of item or -1 if not found
 */
function linearSearch(items, searchTerm) {
    if (!(items && items.length) || !searchTerm) {
        throw Error('missing required data!')
    }
    for (let [index, item] of items.entries()) {
        if (item === searchTerm) return index
    }
    return -1
}