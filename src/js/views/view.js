import logo from "../../img/redLogo.png";
class view {
  _data;
  _parentEl;
  _optionsContainer;
  constructor() {}
  render(data) {
    this._data = data;
    let markup = this._generateMarkup();
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  Spinner() {
    this._parentEl.innerHTML = `<div class="spinner">
    <div class="logo">
      <img src=${logo} alt="spinner" />
    </div>
  </div> `;
  }
}
export default view;