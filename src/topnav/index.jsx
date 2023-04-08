import "./style.scss";

import iconSVG from "./assets/logo.svg";

import loadHomepage from "/homepage/index.js";

function render(html) {
  sidenav.innerHTML = html;
}

export default function loadPage() {
  const sidenav = document.querySelector("#sidenav");

  render(`
        <nav>
            <div class="logo">
                <img src="logo.png" alt="Logo">
                <span>Ligma</span>
            </div>
            <div class="page-title">
                <h1>Page Title</h1>
            </div>
            <div class="user-profile">
                <img src="user.png" alt="User">
            </div>
        </nav>
    `);

  const sidebarLogo = document.querySelector(".logo .logo img");

  sidebarLogo.addEventListener("click", (event) => {
    event.preventDefault();
    loadHomepage();
  });
}
