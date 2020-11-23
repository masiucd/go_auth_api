"use strict";
exports.__esModule = true;
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = [];
        this.age = age;
    }
    Teacher.prototype.birthDayRun = function () {
        this.age++;
        return this;
    };
    Teacher.prototype.addSubject = function (subject) {
        this.subject.push(subject);
        return this;
    };
    return Teacher;
}());
exports.Teacher = Teacher;
