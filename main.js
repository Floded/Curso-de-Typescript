"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
        }
    }
    class Villians extends Mutant {
        conquistarMundo() {
        }
    }
    const ciclope = new Xmen("Ciclope", "Scott");
    const magneto = new Villians("Magneto", "Magnus");
    const printName = (character) => {
    };
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.age = 35;
    const antman = new Avenger("Antman", "capitan", "Scot Lang");
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameDesdeXmen() {
            return `${this.name} - ${this.realName}`;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.fullName = "X";
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static llamarApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis, el unico");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.llamarApocalipsis();
    apocalipsis1.changeName("Wolverine");
    console.log(apocalipsis1);
})();
//# sourceMappingURL=main.js.map