import "./style.scss";

import iconSVG from "./assets/logo.svg";

import loadHomepage from "/homepage/index.js";

function render(html) {
  sidenav.innerHTML = html;
}

export default function loadPage() {
  const sidenav = document.querySelector("#sidenav");

  render(`
        <div class="sidenav">
            <div class="top">
                <div class="logo">
                  <img src="${iconSVG}" alt="logo"/>
                </div>
                <span>Ligma</span>
            </div>
            <ul class="user">
                <li><a href="#"><i class="fas fa-user"></i>First Last</a></li>
                <li><a href="#"><i class="fas fa-sign-out-alt"></i>Logout</a></li>
            </ul>
            <ul class="nav">
                <li><a href="#"><i class="far fa-calendar-alt"></i>My Events</a></li>
                <li><a href="#"><i class="fas fa-pencil-alt"></i>Create An Event</a></li>
                <li><a href="#"><i class="fas fa-map-marker-alt"></i>Explore</a></li>
            </ul>
        </div>
    `);

  const sidebarLogo = document.querySelector(".top .logo img");

  sidebarLogo.addEventListener("click", (event) => {
    event.preventDefault();
    loadHomepage();
  });
}
