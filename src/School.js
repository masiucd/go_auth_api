"use strict";
exports.__esModule = true;
exports.School = void 0;
var School = /** @class */ (function () {
    function School(schoolName, year) {
        this.teachers = [];
        this.schoolName = schoolName;
        this.year = year;
    }
    School.prototype.addTeacher = function (teacher) {
        this.teachers.push(teacher);
        return this;
    };
    return School;
}());
exports.School = School;
