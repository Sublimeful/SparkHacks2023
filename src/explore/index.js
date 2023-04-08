import "./style.css";
import loadTopNav from "./topnav/index.js";

const app = document.querySelector("#app");

function render(html) {
  app.innerHTML = html;
}

export default function loadPage() {
  render(`
        <div id="topnav"></div>
        <div class="search-bar">
			<input type="text" placeholder="Search events...">
			<button><i class="fas fa-search"></i></button>
		</div>

        <div class="event-cards"></div>
    `);

  loadTopNav();
}
