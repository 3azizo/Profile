// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import data from "./projectsData";
import projectsView from "./views/projectsView";
import Typed from "typed.js";
var typed = new Typed("#change", {
  strings: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Computer Science Student",
  ],
  typeSpeed: 60,
  loop: true,
  backSpeed: 50,
});
const filterController = (option) => {
  let skill = option.dataset.skill;
  option.classList.add("active");
  let filterData;
  if (skill !== "All") {
    filterData = data.filter((data) => data.skills.includes(skill));
  } else {
    filterData = data;
  }
  projectsView.render(filterData);
};
function init() {
  projectsView.render(data);
  projectsView.renderOptions();
  projectsView.filterHandler(filterController);
}
init();
