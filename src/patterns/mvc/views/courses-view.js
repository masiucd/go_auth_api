class CourseListView {
  _parentElement = document.querySelector('.course-list');

  addHandlerRender(subscriber) {
    ['load'].forEach((e) => window.addEventListener(e, subscriber));
  }

  addHandlerClickRow(subscriber) {
    const rows = this._parentElement.querySelectorAll('tr');
    rows.forEach((row) => {
      const { courseno } = row.dataset;
      row.addEventListener('click', (e) => {
        subscriber(courseno);
      });
    });
  }

  renderCourses(data) {
    let markup = data.map(this._generateMarkup).join('');
    this._parentElement.insertAdjacentHTML('beforeend', markup);        
  }

  _generateMarkup(row) {
    return `<tr data-courseno=${row.courseNumber}><td>${row.courseNumber}</td><td>${row.title}</td><td>${row.duration}</td></tr>`;
  }
}

export default new CourseListView();
