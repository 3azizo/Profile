import view from "./view";

class ProjectsView extends view {
  _data;
  _parentEl = document.querySelector(".projects");
  _optionsContainer = document.querySelector(".projects-filter ul");
  _generateMarkup() {
    return this._data
      .map((pro) => {
        return `<div class="project-card">
      <img src="${pro.img}" alt="project img" />
      <div class="project-skills">
        ${this._generateSkill(pro.skills)}
      </div>
      <div class="info">
        <h3 class="title">${pro.name}</h3>
        <p class="discription">${pro.discription}</p>
        <div class="links">
          <a href="${pro.repo}">Github=&gt;</a>
          <a href="${pro.live}">Live=&gt;</a>
        </div>
      </div>
    </div>`;
      })
      .join("");
  }
  _generateSkill(skills) {
    return skills
      .map((skill) => {
        return `<span> ${skill}</span>`;
      })
      .join(" ");
  }
  renderOptions() {
    let arrOfOptions = this._data.map((pro) => pro.skills).flat();
    let uniqeOptions = [...new Set(arrOfOptions)];
    let markup = uniqeOptions
      .map((op) => `<li class="option" data-skill=${op}>${op}</li>`)
      .join("");
    this._optionsContainer.insertAdjacentHTML("beforeend", markup);
  }
  filterHandler(handler) {
    this._optionsContainer.addEventListener("click", (e) => {
      let checkIsOp = e.target.classList.contains("option");
      if (!checkIsOp) return;
      let option = e.target;
      document.querySelector(".option.active").classList.remove("active");
      handler(option);
    });
  }
}
export default new ProjectsView();
