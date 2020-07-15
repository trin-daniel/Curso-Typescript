"use strict";
class Single {
    constructor() { }
    static getInstance() {
        return Single.instance;
    }
    now() {
        return new Date();
    }
}
Single.instance = new Single;
console.log(Single.getInstance().now());
//# sourceMappingURL=Single.js.map