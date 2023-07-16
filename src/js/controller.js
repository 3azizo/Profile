// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import data from "./projectsData";
import projectsView from "./views/projectsView";
import Typed from "typed.js";
import { render } from "sass";

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
const filterController = (e) => {
  let skill = e.dataset.skill;
  let filterData;
  if (skill !== "All") {
    filterData = data.filter((data) => data.skills.includes(skill));
  } else {
    filterData = data;
  }

  projectsView.render(filterData);
  console.log(filterData);
};

function init() {
  projectsView.render(data);
  projectsView.renderOptions();
  projectsView.filterHandler(filterController);
}
init();
