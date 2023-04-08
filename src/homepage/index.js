import "./style.css";

import iconSVG from "./assets/icon.svg";

const app = document.querySelector("#app");

function render(html) {
  app.innerHTML = html;
}

export default function loadPage() {
  render(`
        <div class="homepage">
          <div class="logo"><img src="${iconSVG}" /></div>
            <div class="slogan">
              <h1>Improved Eventing</h1>
            </div>
          <div class="register"></div>
        </div>
    `);
}
