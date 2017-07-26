// Helpers for reshaping data
// Consider using "npm install reselect" instead

export function indexToArray<T>(index: { [id:string]: T }): T[] {
    let array: T[] = [];
    for (let id in index) {
        array.push(index[id]);
    }
    return array;
}