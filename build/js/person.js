System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters: [],
        execute: function () {
            Person = class Person {
                constructor() {
                    this.name = 'David';
                }
            };
            exports_1("Person", Person);
        }
    };
});
