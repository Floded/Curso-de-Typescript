"use strict";
(() => {
    const fullName = (firstName, age) => {
        return `${firstName}, ${age || "NO AGE"}`;
    };
    let hero = fullName("Batman");
    console.log({ hero });
})();
//# sourceMappingURL=args-optional.js.map