import "./style.css";

import iconSVG from "./assets/logo.svg";

import loadHomepage from "/homepage/index.js";

const sidenav = document.querySelector("#sidenav");

function render(html) {
  sidenav.innerHTML = html;
}

export default function loadPage() {
  render(`
        <ul class="sidenav">
            <div class="logo">
                <img src="${iconSVG}" id="sidebar-logo" alt="logo"/>
                <span>Ligma</span>
            </div>
            <div class="user">
                <li><a href="#"><i class="fas fa-user"></i>First Last</a></li>
                <li><a href="#"><i class="fas fa-sign-out-alt"></i>Logout</a></li>
            </div>
            <div class="nav">
                <li><a href="#"><i class="far fa-calendar-alt"></i>My Events</a></li>
                <li><a href="#"><i class="fas fa-pencil-alt"></i>Create An Event</a></li>
                <li><a href="#"><i class="fas fa-map-marker-alt"></i>Explore</a></li>
            </div>
        </ul>
    `);

  const sidebarLogo = document.querySelector("#sidebar-logo");

  sidebarLogo.addEventListener("click", (event) => {
    event.preventDefault();
    loadHomepage();
  });
}
