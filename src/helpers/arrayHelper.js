export const search = (id = '', arr = []) => {
    let res = []
    if (arr.length > 0) {
        res = arr.filter(element => element._id == id);
    }
    return res[0];
}