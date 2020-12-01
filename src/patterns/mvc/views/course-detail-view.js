class CourseDetailView {
  _parentElememt = document.querySelector('.modal');
  _overlay = document.querySelector('.overlay');
  _data;

  addHandlerCloseDialog(subscriber) {
    const closeBtn = this._parentElememt.querySelector('.btn-close-modal');
    closeBtn.addEventListener('click', () => subscriber());
  }

  renderDialog(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clearMarkup();
    this._parentElememt.insertAdjacentHTML('afterbegin', markup);
    this._overlay.classList.remove('hidden');
    this._parentElememt.classList.remove('hidden');
  }

  closeDialog() {
    this._overlay.classList.add('hidden');
    this._parentElememt.classList.add('hidden');
  }

  _generateMarkup() {
    return `<button class="btn-close-modal">&times;</button>
    <h2 class="modal-header">${this._data.title}</h2>
    <div class="details">${this._data.description}</div>
    <small class="sub-details">Kurslängd ${this._data.duration} timmar</small>`;
  }

  _clearMarkup() {
    this._parentElememt.innerHTML = '';
  }
}

export default new CourseDetailView();
