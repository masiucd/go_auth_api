class TeacherListView {
  _parentElement = document.querySelector('.teachers-display');
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    console.log(this._data);
    const header = `<h2>Våra lärare</h2>`;
    let teachers = this._data.map(this._generateTeacherListMarkup).join('');
    return header + teachers;
  }

  _generateTeacherListMarkup(teacher){
    return `<div style="display:flex;justify-content: space-between;"><span>${teacher.firstName} ${teacher.lastName}</span><span>( ${teacher.expertise})</span></div>`;
  }
}

export default new TeacherListView();
