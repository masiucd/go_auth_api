;(() => {
  "use strict"
  var t,
    e = (function () {
      function t(t, e, n, s) {
        ;(this.id = t),
          (this.subject = e),
          (this.students = n),
          (this.teacher = s)
      }
      return (
        (t.prototype.addStudent = function (t) {
          this.students.push(t), t.courses.push(this)
        }),
        (t.prototype.removeStudent = function (t) {
          this.students = this.students.filter(function (e) {
            return e.id !== t
          })
        }),
        (t.prototype.getStudent = function (t) {
          var e = this.students.find(function (e) {
            return e.id === t
          })
          return e && e
        }),
        (t.prototype.updateStudent = function (t) {}),
        t
      )
    })(),
    n = function (t, e, n) {
      ;(this.id = t), (this.firstName = e), (this.lastName = n)
    },
    s =
      ((t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
          })(e, n)
      }),
      function (e, n) {
        function s() {
          this.constructor = e
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((s.prototype = n.prototype), new s()))
      }),
    i = (function (t) {
      function e(e, n, s, i) {
        var r = t.call(this, e, n, s) || this
        return (r.subjects = i), r
      }
      return s(e, t), e
    })(n),
    r = (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
          })(e, n)
      }
      return function (e, n) {
        function s() {
          this.constructor = e
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((s.prototype = n.prototype), new s()))
      }
    })(),
    o = (function (t) {
      function e(e, n, s, i) {
        var r = t.call(this, e, n, s) || this
        return (r.courses = i), r
      }
      return r(e, t), e
    })(n),
    u = (function () {
      function t(t, e, n) {
        ;(this.students = t),
          (this.courses = e),
          (this.teachers = n),
          (this.main = this.getElement("#root")),
          (this.wrapper = this.createElement("div", "wrapper")),
          (this.title = this.createElement("h1", "main-title")),
          (this.title.textContent = "WesCoast"),
          (this.modalButton = this.createElement("button", "modal-btn")),
          (this.modalButton.textContent = "show data"),
          (this.coursesList = this.createElement("ul", "courses-list")),
          (this.studentList = this.createElement("ul", "students-list")),
          (this.teachersList = this.createElement("ul", "teachaers-list")),
          this.coursesList.classList.add("hide"),
          this.teachersList.classList.add("hide"),
          this.studentList.classList.add("hide"),
          this.wrapper.append(
            this.title,
            this.modalButton,
            this.coursesList,
            this.studentList,
            this.teachersList
          ),
          this.main.append(this.wrapper)
      }
      return (
        (t.prototype.createElement = function (t, e) {
          void 0 === e && (e = "")
          var n = document.createElement(t)
          return e && n.classList.add(e), n
        }),
        (t.prototype.getElement = function (t) {
          return document.querySelector(t)
        }),
        (t.prototype.renderStudents = function () {
          return this.students
            .map(function (t) {
              return (
                "\n        <li>" +
                t.firstName +
                "-" +
                t.lastName +
                "</li>\n        <p>" +
                t.firstName +
                " currently study:</p>\n        " +
                t.courses
                  .map(function (t) {
                    return "<li>" + t.subject + "</li>"
                  })
                  .join("") +
                "\n      "
              )
            })
            .join("")
        }),
        (t.prototype.renderTeachers = function () {
          return this.teachers
            .map(function (t) {
              return (
                "\n        <li>" +
                t.firstName +
                "-" +
                t.lastName +
                "</li>\n      "
              )
            })
            .join("")
        }),
        (t.prototype.renderCourses = function () {
          return this.courses
            .map(function (t) {
              return (
                '\n        <li class="course">' +
                t.subject +
                "</li>\n        <p>Students that read " +
                t.subject +
                "</p>\n        " +
                t.students
                  .map(function (t) {
                    return "<li>" + t.firstName + "- " + t.lastName + " </li>"
                  })
                  .join("") +
                "\n      "
              )
            })
            .join("")
        }),
        (t.prototype.render = function () {
          var t = this
          ;(this.studentList.innerHTML =
            "\n      <li> <strong> Student List </strong> </li>\n      " +
            this.renderStudents() +
            "\n    "),
            (this.teachersList.innerHTML =
              "\n      <li> <strong>Teachers List</strong> </li>\n      " +
              this.renderTeachers() +
              "\n    "),
            (this.coursesList.innerHTML =
              "\n      <li> <strong>Courses List</strong> </li>\n      " +
              this.renderCourses() +
              "\n    "),
            this.modalButton.addEventListener("click", function () {
              t.studentList.classList.toggle("show"),
                t.coursesList.classList.toggle("show"),
                t.teachersList.classList.toggle("show")
            })
        }),
        t
      )
    })()
  let a = (t = 21) => {
    let e = "",
      n = crypto.getRandomValues(new Uint8Array(t))
    for (; t--; ) {
      let s = 63 & n[t]
      e +=
        s < 36
          ? s.toString(36)
          : s < 62
          ? (s - 26).toString(36).toUpperCase()
          : s < 63
          ? "_"
          : "-"
    }
    return e
  }
  var c, h, d, l, p, f, m, y, L, w, S
  ;(c = new o(a(), "Mike", "Szymkowiak", [])),
    (h = new o(a(), "Jon", "Smith", [])),
    (d = new o(a(), "Clara", "Sten", [])),
    (l = new o(a(), "Kim", "Kallstrom", [])),
    (p = new o(a(), "Stina", "Turner", [])),
    (f = new i(a(), "Boris", "Einstein", [])),
    (m = new i(a(), "Linda", "Smith", [])),
    (y = new i(a(), "Mia", "Jonson", [])),
    (L = new e(a(), "math", [], f)),
    (w = new e(a(), "english", [], f)),
    (S = new e(a(), "swedish", [], f)),
    L.addStudent(c),
    L.addStudent(h),
    w.addStudent(d),
    w.addStudent(p),
    S.addStudent(l),
    S.addStudent(p),
    new u([c, h, d], [L, w, S], [f, m, y]).render()
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9zY2hvb2wvZXhlcmNpc2UvQ291cnNlLnRzIiwid2VicGFjazovL3NjaG9vbC1kYXRhLy4vc3JjL3NjaG9vbC9leGVyY2lzZS9QZXJzb24udHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvc2Nob29sL2V4ZXJjaXNlL1RlYWNoZXIudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvc2Nob29sL2V4ZXJjaXNlL1N0dWRlbnQudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvc2Nob29sL3ZpZXcvVmlldy50cyIsIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXgucHJvZC5qcyIsIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJpZCIsInN1YmplY3QiLCJzdHVkZW50cyIsInRlYWNoZXIiLCJ0aGlzIiwiYWRkU3R1ZGVudCIsInN0dWRlbnQiLCJwdXNoIiwiY291cnNlcyIsInJlbW92ZVN0dWRlbnQiLCJzdHVkZW50SUQiLCJmaWx0ZXIiLCJnZXRTdHVkZW50IiwiZmluZCIsInVwZGF0ZVN0dWRlbnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInN1YmplY3RzIiwiUGVyc29uIiwidGVhY2hlcnMiLCJtYWluIiwiZ2V0RWxlbWVudCIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsIm1vZGFsQnV0dG9uIiwiY291cnNlc0xpc3QiLCJzdHVkZW50TGlzdCIsInRlYWNoZXJzTGlzdCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInRhZyIsImNsYXNzTmFtZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsInJlbmRlclN0dWRlbnRzIiwibWFwIiwiY291cnNlIiwiam9pbiIsInJlbmRlclRlYWNoZXJzIiwicmVuZGVyQ291cnNlcyIsInJlbmRlciIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJuYW5vaWQiLCJzaXplIiwiYnl0ZXMiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwiYnl0ZSIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJtaWtlIiwiam9uIiwiY2xhcmEiLCJraW0iLCJzdGluYSIsImJvcmlzIiwibGluZGEiLCJtaWEiLCJtYXRoIiwiZW5nbGlzaCIsInN3ZWRpc2giLCJTdHVkZW50IiwiVGVhY2hlciIsIkNvdXJzZSIsIlZpZXciXSwibWFwcGluZ3MiOiJtQkFLQSxJLEVBQUEsYUFLRSxXQUFZQSxFQUFZQyxFQUFrQkMsRUFBcUJDLEdBQzdEQyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxRQUFVQSxFQUNmRyxLQUFLRixTQUFXQSxFQUNoQkUsS0FBS0QsUUFBVUEsRUFxQm5CLE9BYkUsWUFBQUUsV0FBQSxTQUFXQyxHQUNURixLQUFLRixTQUFTSyxLQUFLRCxHQUNuQkEsRUFBUUUsUUFBUUQsS0FBS0gsT0FHdkIsWUFBQUssY0FBQSxTQUFjQyxHQUNaTixLQUFLRixTQUFXRSxLQUFLRixTQUFTUyxRQUFPLFNBQUFMLEdBQVcsT0FBQUEsRUFBUU4sS0FBT1UsTUFFakUsWUFBQUUsV0FBQSxTQUFXRixHQUNULElBQU1KLEVBQVVGLEtBQUtGLFNBQVNXLE1BQUssU0FBQVAsR0FBVyxPQUFBQSxFQUFRTixLQUFPVSxLQUM3RCxPQUFPSixHQUFXQSxHQUVwQixZQUFBUSxjQUFBLFNBQWNSLEtBQ2hCLEVBOUJBLEdDTEEsRUFLRSxTQUFZTixFQUFZZSxFQUFtQkMsR0FDekNaLEtBQUtKLEdBQUtBLEVBQ1ZJLEtBQUtXLFVBQVlBLEVBQ2pCWCxLQUFLWSxTQUFXQSxHLDBVQ0xwQixjQUdFLFdBQ0VoQixFQUNBZSxFQUNBQyxFQUNBQyxHQUpGLE1BTUUsWUFBTWpCLEVBQUllLEVBQVdDLElBQVMsSyxPQUM5QixFQUFLQyxTQUFXQSxFLEVBRXBCLE9BWjZC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ZixDQUFDTCxFQUFPQyxFQUFPQyxJQUs5QnBCLFUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiXG5pbXBvcnQgeyBUZWFjaGVyIH0gZnJvbSBcIi4vVGVhY2hlclwiXG5pbXBvcnQgeyBTdHVkZW50IH0gZnJvbSBcIi4vU3R1ZGVudFwiXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcIi4vVHlwZXNcIlxuXG5leHBvcnQgY2xhc3MgQ291cnNlIHtcbiAgaWQ6IHN0cmluZ1xuICBzdWJqZWN0OiBTdWJqZWN0XG4gIHN0dWRlbnRzOiBTdHVkZW50W11cbiAgdGVhY2hlcjogVGVhY2hlclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBzdWJqZWN0OiBTdWJqZWN0LCBzdHVkZW50czogU3R1ZGVudFtdLCB0ZWFjaGVyOiBUZWFjaGVyKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdFxuICAgIHRoaXMuc3R1ZGVudHMgPSBzdHVkZW50c1xuICAgIHRoaXMudGVhY2hlciA9IHRlYWNoZXJcblxuICAgIC8vIHRoaXMudGVhY2hlci5jb3Vyc2VzLnB1c2godGhpcylcbiAgICAvLyB0aGlzLnN0dWRlbnRzLmZvckVhY2goc3R1ZGVudCA9PiB7XG4gICAgLy8gICBzdHVkZW50LmNvdXJzZXMucHVzaCh0aGlzKVxuICAgIC8vIH0pXG4gIH1cblxuICBhZGRTdHVkZW50KHN0dWRlbnQ6IFN0dWRlbnQpIHtcbiAgICB0aGlzLnN0dWRlbnRzLnB1c2goc3R1ZGVudClcbiAgICBzdHVkZW50LmNvdXJzZXMucHVzaCh0aGlzKVxuICB9XG5cbiAgcmVtb3ZlU3R1ZGVudChzdHVkZW50SUQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3R1ZGVudHMgPSB0aGlzLnN0dWRlbnRzLmZpbHRlcihzdHVkZW50ID0+IHN0dWRlbnQuaWQgIT09IHN0dWRlbnRJRClcbiAgfVxuICBnZXRTdHVkZW50KHN0dWRlbnRJRDogc3RyaW5nKTogU3R1ZGVudCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3Qgc3R1ZGVudCA9IHRoaXMuc3R1ZGVudHMuZmluZChzdHVkZW50ID0+IHN0dWRlbnQuaWQgPT09IHN0dWRlbnRJRClcbiAgICByZXR1cm4gc3R1ZGVudCAmJiBzdHVkZW50XG4gIH1cbiAgdXBkYXRlU3R1ZGVudChzdHVkZW50OiBTdHVkZW50KTogdm9pZCB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIFBlcnNvbiB7XG4gIGlkOiBzdHJpbmdcbiAgZmlyc3ROYW1lOiBzdHJpbmdcbiAgbGFzdE5hbWU6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWVcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWVcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4vUGVyc29uXCJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9UeXBlc1wiXG5cbmV4cG9ydCBjbGFzcyBUZWFjaGVyIGV4dGVuZHMgUGVyc29uIHtcbiAgc3ViamVjdHM6IFN1YmplY3RbXVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgZmlyc3ROYW1lOiBzdHJpbmcsXG4gICAgbGFzdE5hbWU6IHN0cmluZyxcbiAgICBzdWJqZWN0czogU3ViamVjdFtdLFxuICApIHtcbiAgICBzdXBlcihpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSlcbiAgICB0aGlzLnN1YmplY3RzID0gc3ViamVjdHNcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ291cnNlIH0gZnJvbSBcIi4vQ291cnNlXCJcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gXCIuL1BlcnNvblwiXG5cbmV4cG9ydCBjbGFzcyBTdHVkZW50IGV4dGVuZHMgUGVyc29uIHtcbiAgY291cnNlczogQ291cnNlW11cblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgY291cnNlczogQ291cnNlW10pIHtcbiAgICBzdXBlcihpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSlcbiAgICB0aGlzLmNvdXJzZXMgPSBjb3Vyc2VzXG4gIH1cbn1cbiIsImltcG9ydCB7IFN0dWRlbnQgfSBmcm9tIFwiLi4vZXhlcmNpc2UvU3R1ZGVudFwiXG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tIFwiLi4vZXhlcmNpc2UvQ291cnNlXCJcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiLi4vZXhlcmNpc2UvVGVhY2hlclwiXG5cbmV4cG9ydCBjbGFzcyBWaWV3IHtcbiAgbWFpbjogSFRNTERpdkVsZW1lbnRcbiAgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcbiAgdGl0bGU6IEhUTUxIZWFkRWxlbWVudFxuXG4gIG1vZGFsQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudFxuXG4gIHN0dWRlbnRzOiBTdHVkZW50W11cbiAgY291cnNlczogQ291cnNlW11cbiAgdGVhY2hlcnM6IFRlYWNoZXJbXVxuICBzdHVkZW50TGlzdDogSFRNTFVMaXN0RWxlbWVudFxuICB0ZWFjaGVyc0xpc3Q6IEhUTUxVTGlzdEVsZW1lbnRcbiAgY291cnNlc0xpc3Q6IEhUTUxVTGlzdEVsZW1lbnRcblxuICBjb25zdHJ1Y3RvcihzdHVkZW50czogU3R1ZGVudFtdLCBjb3Vyc2VzOiBDb3Vyc2VbXSwgdGVhY2hlcnM6IFRlYWNoZXJbXSkge1xuICAgIHRoaXMuc3R1ZGVudHMgPSBzdHVkZW50c1xuICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZXNcbiAgICB0aGlzLnRlYWNoZXJzID0gdGVhY2hlcnNcblxuICAgIHRoaXMubWFpbiA9IHRoaXMuZ2V0RWxlbWVudChcIiNyb290XCIpIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgdGhpcy53cmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwid3JhcHBlclwiKSBhcyBIVE1MRGl2RWxlbWVudFxuXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImgxXCIsIFwibWFpbi10aXRsZVwiKSBhcyBIVE1MSGVhZEVsZW1lbnRcbiAgICB0aGlzLnRpdGxlLnRleHRDb250ZW50ID0gXCJXZXNDb2FzdFwiXG5cbiAgICB0aGlzLm1vZGFsQnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibW9kYWwtYnRuXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50XG4gICAgdGhpcy5tb2RhbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwic2hvdyBkYXRhXCJcblxuICAgIHRoaXMuY291cnNlc0xpc3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBcImNvdXJzZXMtbGlzdFwiKSBhcyBIVE1MVUxpc3RFbGVtZW50XG4gICAgdGhpcy5zdHVkZW50TGlzdCA9IHRoaXMuY3JlYXRlRWxlbWVudChcInVsXCIsIFwic3R1ZGVudHMtbGlzdFwiKSBhcyBIVE1MVUxpc3RFbGVtZW50XG4gICAgdGhpcy50ZWFjaGVyc0xpc3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBcInRlYWNoYWVycy1saXN0XCIpIGFzIEhUTUxVTGlzdEVsZW1lbnRcbiAgICB0aGlzLmNvdXJzZXNMaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgdGhpcy50ZWFjaGVyc0xpc3QuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB0aGlzLnN0dWRlbnRMaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG5cbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kKFxuICAgICAgdGhpcy50aXRsZSxcbiAgICAgIHRoaXMubW9kYWxCdXR0b24sXG4gICAgICB0aGlzLmNvdXJzZXNMaXN0LFxuICAgICAgdGhpcy5zdHVkZW50TGlzdCxcbiAgICAgIHRoaXMudGVhY2hlcnNMaXN0LFxuICAgIClcblxuICAgIHRoaXMubWFpbi5hcHBlbmQodGhpcy53cmFwcGVyKVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudCh0YWc6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuICAgIGlmIChjbGFzc05hbWUpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgZ2V0RWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdHVkZW50cygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN0dWRlbnRzXG4gICAgICAubWFwKFxuICAgICAgICBzdHVkZW50ID0+XG4gICAgICAgICAgYFxuICAgICAgICA8bGk+JHtzdHVkZW50LmZpcnN0TmFtZX0tJHtzdHVkZW50Lmxhc3ROYW1lfTwvbGk+XG4gICAgICAgIDxwPiR7c3R1ZGVudC5maXJzdE5hbWV9IGN1cnJlbnRseSBzdHVkeTo8L3A+XG4gICAgICAgICR7c3R1ZGVudC5jb3Vyc2VzLm1hcChjb3Vyc2UgPT4gYDxsaT4ke2NvdXJzZS5zdWJqZWN0fTwvbGk+YCkuam9pbihcIlwiKX1cbiAgICAgIGAsXG4gICAgICApXG4gICAgICAuam9pbihcIlwiKVxuICB9XG4gIHByaXZhdGUgcmVuZGVyVGVhY2hlcnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50ZWFjaGVyc1xuICAgICAgLm1hcChcbiAgICAgICAgdGVhY2hlciA9PlxuICAgICAgICAgIGBcbiAgICAgICAgPGxpPiR7dGVhY2hlci5maXJzdE5hbWV9LSR7dGVhY2hlci5sYXN0TmFtZX08L2xpPlxuICAgICAgYCxcbiAgICAgIClcbiAgICAgIC5qb2luKFwiXCIpXG4gIH1cbiAgcHJpdmF0ZSByZW5kZXJDb3Vyc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY291cnNlc1xuICAgICAgLm1hcChcbiAgICAgICAgY291cnNlID0+XG4gICAgICAgICAgYFxuICAgICAgICA8bGkgY2xhc3M9XCJjb3Vyc2VcIj4ke2NvdXJzZS5zdWJqZWN0fTwvbGk+XG4gICAgICAgIDxwPlN0dWRlbnRzIHRoYXQgcmVhZCAke2NvdXJzZS5zdWJqZWN0fTwvcD5cbiAgICAgICAgJHtjb3Vyc2Uuc3R1ZGVudHNcbiAgICAgICAgICAubWFwKHN0dWRlbnQgPT4gYDxsaT4ke3N0dWRlbnQuZmlyc3ROYW1lfS0gJHtzdHVkZW50Lmxhc3ROYW1lfSA8L2xpPmApXG4gICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICBgLFxuICAgICAgKVxuICAgICAgLmpvaW4oXCJcIilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnN0dWRlbnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICAgIDxsaT4gPHN0cm9uZz4gU3R1ZGVudCBMaXN0IDwvc3Ryb25nPiA8L2xpPlxuICAgICAgJHt0aGlzLnJlbmRlclN0dWRlbnRzKCl9XG4gICAgYFxuXG4gICAgdGhpcy50ZWFjaGVyc0xpc3QuaW5uZXJIVE1MID0gYFxuICAgICAgPGxpPiA8c3Ryb25nPlRlYWNoZXJzIExpc3Q8L3N0cm9uZz4gPC9saT5cbiAgICAgICR7dGhpcy5yZW5kZXJUZWFjaGVycygpfVxuICAgIGBcbiAgICB0aGlzLmNvdXJzZXNMaXN0LmlubmVySFRNTCA9IGBcbiAgICAgIDxsaT4gPHN0cm9uZz5Db3Vyc2VzIExpc3Q8L3N0cm9uZz4gPC9saT5cbiAgICAgICR7dGhpcy5yZW5kZXJDb3Vyc2VzKCl9XG4gICAgYFxuICAgIHRoaXMubW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc3R1ZGVudExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIilcbiAgICAgIHRoaXMuY291cnNlc0xpc3QuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIilcbiAgICAgIHRoaXMudGVhY2hlcnNMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpXG4gICAgfSlcbiAgfVxufVxuIiwiLy8gVGhpcyBmaWxlIHJlcGxhY2VzIGBpbmRleC5qc2AgaW4gYnVuZGxlcnMgbGlrZSB3ZWJwYWNrIG9yIFJvbGx1cCxcbi8vIGFjY29yZGluZyB0byBgYnJvd3NlcmAgY29uZmlnIGluIGBwYWNrYWdlLmpzb25gLlxuXG5pbXBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuXG5pZiAoZmFsc2UpIHtcbiAgLy8gQWxsIGJ1bmRsZXJzIHdpbGwgcmVtb3ZlIHRoaXMgYmxvY2sgaW4gdGhlIHByb2R1Y3Rpb24gYnVuZGxlLlxuICBpZiAoXG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyAmJlxuICAgIHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdSZWFjdCBOYXRpdmUgZG9lcyBub3QgaGF2ZSBhIGJ1aWx0LWluIHNlY3VyZSByYW5kb20gZ2VuZXJhdG9yLiAnICtcbiAgICAgICAgJ0lmIHlvdSBkb27igJl0IG5lZWQgdW5wcmVkaWN0YWJsZSBJRHMgdXNlIGBuYW5vaWQvbm9uLXNlY3VyZWAuICcgK1xuICAgICAgICAnRm9yIHNlY3VyZSBJRHMsIGltcG9ydCBgcmVhY3QtbmF0aXZlLWdldC1yYW5kb20tdmFsdWVzYCAnICtcbiAgICAgICAgJ2JlZm9yZSBOYW5vIElELiBJZiB5b3UgdXNlIEV4cG8sIGluc3RhbGwgYGV4cG8tcmFuZG9tYCAnICtcbiAgICAgICAgJ2FuZCB1c2UgYG5hbm9pZC9hc3luY2AuJ1xuICAgIClcbiAgfVxuICBpZiAodHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdJbXBvcnQgZmlsZSB3aXRoIGBpZiAoIXdpbmRvdy5jcnlwdG8pIHdpbmRvdy5jcnlwdG8gPSB3aW5kb3cubXNDcnlwdG9gJyArXG4gICAgICAgICcgYmVmb3JlIGltcG9ydGluZyBOYW5vIElEIHRvIGZpeCBJRSAxMSBzdXBwb3J0J1xuICAgIClcbiAgfVxuICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnWW91ciBicm93c2VyIGRvZXMgbm90IGhhdmUgc2VjdXJlIHJhbmRvbSBnZW5lcmF0b3IuICcgK1xuICAgICAgICAnSWYgeW91IGRvbuKAmXQgbmVlZCB1bnByZWRpY3RhYmxlIElEcywgeW91IGNhbiB1c2UgbmFub2lkL25vbi1zZWN1cmUuJ1xuICAgIClcbiAgfVxufVxuXG5sZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5cbmxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIHNpemUsIGdldFJhbmRvbSkgPT4ge1xuICAvLyBGaXJzdCwgYSBiaXRtYXNrIGlzIG5lY2Vzc2FyeSB0byBnZW5lcmF0ZSB0aGUgSUQuIFRoZSBiaXRtYXNrIG1ha2VzIGJ5dGVzXG4gIC8vIHZhbHVlcyBjbG9zZXIgdG8gdGhlIGFscGhhYmV0IHNpemUuIFRoZSBiaXRtYXNrIGNhbGN1bGF0ZXMgdGhlIGNsb3Nlc3RcbiAgLy8gYDJeMzEgLSAxYCBudW1iZXIsIHdoaWNoIGV4Y2VlZHMgdGhlIGFscGhhYmV0IHNpemUuXG4gIC8vIEZvciBleGFtcGxlLCB0aGUgYml0bWFzayBmb3IgdGhlIGFscGhhYmV0IHNpemUgMzAgaXMgMzEgKDAwMDExMTExKS5cbiAgLy8gYE1hdGguY2x6MzJgIGlzIG5vdCB1c2VkLCBiZWNhdXNlIGl0IGlzIG5vdCBhdmFpbGFibGUgaW4gYnJvd3NlcnMuXG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgLy8gVGhvdWdoLCB0aGUgYml0bWFzayBzb2x1dGlvbiBpcyBub3QgcGVyZmVjdCBzaW5jZSB0aGUgYnl0ZXMgZXhjZWVkaW5nXG4gIC8vIHRoZSBhbHBoYWJldCBzaXplIGFyZSByZWZ1c2VkLiBUaGVyZWZvcmUsIHRvIHJlbGlhYmx5IGdlbmVyYXRlIHRoZSBJRCxcbiAgLy8gdGhlIHJhbmRvbSBieXRlcyByZWR1bmRhbmN5IGhhcyB0byBiZSBzYXRpc2ZpZWQuXG5cbiAgLy8gTm90ZTogZXZlcnkgaGFyZHdhcmUgcmFuZG9tIGdlbmVyYXRvciBjYWxsIGlzIHBlcmZvcm1hbmNlIGV4cGVuc2l2ZSxcbiAgLy8gYmVjYXVzZSB0aGUgc3lzdGVtIGNhbGwgZm9yIGVudHJvcHkgY29sbGVjdGlvbiB0YWtlcyBhIGxvdCBvZiB0aW1lLlxuICAvLyBTbywgdG8gYXZvaWQgYWRkaXRpb25hbCBzeXN0ZW0gY2FsbHMsIGV4dHJhIGJ5dGVzIGFyZSByZXF1ZXN0ZWQgaW4gYWR2YW5jZS5cblxuICAvLyBOZXh0LCBhIHN0ZXAgZGV0ZXJtaW5lcyBob3cgbWFueSByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG4gIC8vIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIGdldHMgZGVjaWRlZCB1cG9uIHRoZSBJRCBzaXplLCBtYXNrLFxuICAvLyBhbHBoYWJldCBzaXplLCBhbmQgbWFnaWMgbnVtYmVyIDEuNiAodXNpbmcgMS42IHBlYWtzIGF0IHBlcmZvcm1hbmNlXG4gIC8vIGFjY29yZGluZyB0byBiZW5jaG1hcmtzKS5cblxuICAvLyBgLX5mID0+IE1hdGguY2VpbChmKWAgaWYgZiBpcyBhIGZsb2F0XG4gIC8vIGAtfmkgPT4gaSArIDFgIGlmIGkgaXMgYW4gaW50ZWdlclxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogc2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIC8vIEEgY29tcGFjdCBhbHRlcm5hdGl2ZSBmb3IgYGZvciAodmFyIGkgPSAwOyBpIDwgc3RlcDsgaSsrKWAuXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgLy8gQWRkaW5nIGB8fCAnJ2AgcmVmdXNlcyBhIHJhbmRvbSBieXRlIHRoYXQgZXhjZWVkcyB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICAvLyBgaWQubGVuZ3RoICsgMSA9PT0gc2l6ZWAgaXMgYSBtb3JlIGNvbXBhY3Qgb3B0aW9uLlxuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSArc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSkgPT4gY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5cbmxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PiB7XG4gIGxldCBpZCA9ICcnXG4gIGxldCBieXRlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpXG5cbiAgLy8gQSBjb21wYWN0IGFsdGVybmF0aXZlIGZvciBgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGVwOyBpKyspYC5cbiAgd2hpbGUgKHNpemUtLSkge1xuICAgIC8vIEl0IGlzIGluY29ycmVjdCB0byB1c2UgYnl0ZXMgZXhjZWVkaW5nIHRoZSBhbHBoYWJldCBzaXplLlxuICAgIC8vIFRoZSBmb2xsb3dpbmcgbWFzayByZWR1Y2VzIHRoZSByYW5kb20gYnl0ZSBpbiB0aGUgMC0yNTUgdmFsdWVcbiAgICAvLyByYW5nZSB0byB0aGUgMC02MyB2YWx1ZSByYW5nZS4gVGhlcmVmb3JlLCBhZGRpbmcgaGFja3MsIHN1Y2hcbiAgICAvLyBhcyBlbXB0eSBzdHJpbmcgZmFsbGJhY2sgb3IgbWFnaWMgbnVtYmVycywgaXMgdW5uZWNjZXNzYXJ5IGJlY2F1c2VcbiAgICAvLyB0aGUgYml0bWFzayB0cmltcyBieXRlcyBkb3duIHRvIHRoZSBhbHBoYWJldCBzaXplLlxuICAgIGxldCBieXRlID0gYnl0ZXNbc2l6ZV0gJiA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIC8vIGAwLTlhLXpgXG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICAvLyBgQS1aYFxuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mykge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH1cbiAgfVxuICByZXR1cm4gaWRcbn1cblxuZXhwb3J0IHsgbmFub2lkLCBjdXN0b21BbHBoYWJldCwgY3VzdG9tUmFuZG9tLCB1cmxBbHBoYWJldCwgcmFuZG9tIH1cbiIsImltcG9ydCB7IENvdXJzZSB9IGZyb20gXCIuL3NjaG9vbC9leGVyY2lzZS9Db3Vyc2VcIlxuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCIuL3NjaG9vbC9leGVyY2lzZS9UZWFjaGVyXCJcbmltcG9ydCB7IFN0dWRlbnQgfSBmcm9tIFwiLi9zY2hvb2wvZXhlcmNpc2UvU3R1ZGVudFwiXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vc2Nob29sL3ZpZXcvVmlld1wiXG5cbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIlxuOygoKSA9PiB7XG4gIGNvbnN0IG1pa2UgPSBuZXcgU3R1ZGVudChuYW5vaWQoKSwgXCJNaWtlXCIsIFwiU3p5bWtvd2lha1wiLCBbXSlcbiAgY29uc3Qgam9uID0gbmV3IFN0dWRlbnQobmFub2lkKCksIFwiSm9uXCIsIFwiU21pdGhcIiwgW10pXG4gIGNvbnN0IGNsYXJhID0gbmV3IFN0dWRlbnQobmFub2lkKCksIFwiQ2xhcmFcIiwgXCJTdGVuXCIsIFtdKVxuICBjb25zdCBraW0gPSBuZXcgU3R1ZGVudChuYW5vaWQoKSwgXCJLaW1cIiwgXCJLYWxsc3Ryb21cIiwgW10pXG4gIGNvbnN0IHN0aW5hID0gbmV3IFN0dWRlbnQobmFub2lkKCksIFwiU3RpbmFcIiwgXCJUdXJuZXJcIiwgW10pXG5cbiAgY29uc3QgYm9yaXMgPSBuZXcgVGVhY2hlcihuYW5vaWQoKSwgXCJCb3Jpc1wiLCBcIkVpbnN0ZWluXCIsIFtdKVxuICBjb25zdCBsaW5kYSA9IG5ldyBUZWFjaGVyKG5hbm9pZCgpLCBcIkxpbmRhXCIsIFwiU21pdGhcIiwgW10pXG4gIGNvbnN0IG1pYSA9IG5ldyBUZWFjaGVyKG5hbm9pZCgpLCBcIk1pYVwiLCBcIkpvbnNvblwiLCBbXSlcblxuICBjb25zdCBtYXRoID0gbmV3IENvdXJzZShuYW5vaWQoKSwgXCJtYXRoXCIsIFtdLCBib3JpcylcbiAgY29uc3QgZW5nbGlzaCA9IG5ldyBDb3Vyc2UobmFub2lkKCksIFwiZW5nbGlzaFwiLCBbXSwgYm9yaXMpXG4gIGNvbnN0IHN3ZWRpc2ggPSBuZXcgQ291cnNlKG5hbm9pZCgpLCBcInN3ZWRpc2hcIiwgW10sIGJvcmlzKVxuXG4gIG1hdGguYWRkU3R1ZGVudChtaWtlKVxuICBtYXRoLmFkZFN0dWRlbnQoam9uKVxuICBlbmdsaXNoLmFkZFN0dWRlbnQoY2xhcmEpXG4gIGVuZ2xpc2guYWRkU3R1ZGVudChzdGluYSlcbiAgc3dlZGlzaC5hZGRTdHVkZW50KGtpbSlcbiAgc3dlZGlzaC5hZGRTdHVkZW50KHN0aW5hKVxuXG4gIGNvbnN0IHN0dWRlbnRzID0gW21pa2UsIGpvbiwgY2xhcmFdXG4gIGNvbnN0IHRlYWNoZXJzID0gW2JvcmlzLCBsaW5kYSwgbWlhXVxuICBjb25zdCBjb3Vyc2VzID0gW21hdGgsIGVuZ2xpc2gsIHN3ZWRpc2hdXG5cbiAgY29uc3QgdiA9IG5ldyBWaWV3KHN0dWRlbnRzLCBjb3Vyc2VzLCB0ZWFjaGVycylcbiAgLy8gY29uc29sZS5sb2codi5yZW5kZXIoKSlcbiAgdi5yZW5kZXIoKVxufSkoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
