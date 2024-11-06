/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const tempObject = {};
    let joinedarray = []

    arr1.forEach(item => {
        let key = item?.id
        tempObject[key] = item;
    })


    arr2.forEach(item => {
        if (tempObject.hasOwnProperty(item?.id)) {
            return tempObject[item.id] = { ...tempObject[item.id], ...item };
        } else {
            return tempObject[item.id] = item
        }
    })


    joinedarray = Object.values(tempObject)
    return joinedarray
};