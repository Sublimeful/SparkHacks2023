import "./styles.scss";

import loadSideNav from "./sidenav/index.js";
import loadCreateEvent from "./create-event/index.js";

const app = document.querySelector("#app");

function render(html) {
  app.innerHTML = html;
}

export default function loadPage() {
  render(`
        <div id="dashboard-page">
          <div id="sidenav"></div>
          <div id="dashboard">
              Hello Dashboard! Your Mom
          </div>
        </div>
    `);

  loadSideNav();
  loadCreateEvent();
}
