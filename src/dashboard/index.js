import "./style.css";
import loadSideNav from "./sidenav/index.js";

const app = document.querySelector("#app");

function render(html) {
  app.innerHTML = html;
}

export default function loadPage() {
  render(`
        <div id="sidenav"></div>
        <div id="dashboard">
            Hello Dashboard! Your Mom
        </div>
    `);

  loadSideNav();
}
