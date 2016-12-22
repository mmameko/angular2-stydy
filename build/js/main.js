System.register(["./person.js", "@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var person_js_1, core_1, person;
    return {
        setters: [
            function (person_js_1_1) {
                person_js_1 = person_js_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            person = new person_js_1.Person();
            console.log(person.name, core_1.Component);
        }
    };
});
