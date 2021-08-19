// Functions
function randomize(a) {
    if(!Array.isArray(a)) throw new TypeError("Argument is not an array");
    return a[Math.floor(Math.random() * a.length)];
};

// Classes
/**
 * Document manager
 * @extends null
 */
class Manager extends null {
    /**
     * Returns the document
     * @readonly
     * @static
     * @returns {object}
     */
    static get document() {
        if(document === undefined) throw new Error("Document is not defined");
        return document;
    };

    /**
     * Returns an array of elements that matched the class name
     * @static
     * @param {string} c Class
     * @returns {object[]}
     */
    static getClass(c) {
        return Manager.getClasses(c);
    };

    /**
     * Returns an array of arrays of elements that matched the class names
     * @static
     * @param {...string} cs Classes
     * @returns {object[][]}
     */
    static getClasses(...cs) {
        return cs.map(Manager.getClass);
    };

    /**
     * Returns an element that matched the id
     * @static
     * @param {string} i ID
     * @returns {object}
     */
    static getID(i) {
        return Manager.document.getElementById(i);
    };

    /**
     * Returns an array of elements that matched the ids
     * @static
     * @param  {...string} is IDs 
     * @returns {object[]}
     */
    static getIDs(...is) {
        return is.map(Manager.getID);
    };
};