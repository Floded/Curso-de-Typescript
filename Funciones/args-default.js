"use strict";
(() => {
    const fullName = (firstName, age, isAlive = true) => {
        if (isAlive) {
            return `${firstName}, ${age || "NO AGE"}`.toLocaleUpperCase();
        }
        else {
            return `${firstName}, ${age || "NO AGE"}`.toLocaleLowerCase();
        }
    };
    let hero = fullName("Batman", 58);
    console.log({ hero });
})();
//# sourceMappingURL=args-default.js.map