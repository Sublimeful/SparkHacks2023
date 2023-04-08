import "./style.css";
import iconSVG from "./assets/icon.svg";

const sidebar = document.querySelector("#sidebar");

import loadDashboard from "/dashboard/index.js";
import loadHomepage from "/homepage/index.js";

function render(html) {
  sidebar.innerHTML = html;
}

export default function loadPage() {
  render(`
      <a href="#" class="logo"><img src=${iconSVG}></a>
      <nav class="side-links">
        <ul>
          <li><a href="#" id="homepage-link">Homepage</a></li>
          <li><a href="#" id="dashboard-link">Dashboard</a></li>
        </ul>
      </nav>
    `);

  const homepageLink = document.querySelector("#homepage-link");
  const dashboardLink = document.querySelector("#dashboard-link");

  homepageLink.addEventListener("click", (event) => {
    event.preventDefault();
    loadHomepage();
  });

  dashboardLink.addEventListener("click", (event) => {
    event.preventDefault();
    loadDashboard();
  });
}
