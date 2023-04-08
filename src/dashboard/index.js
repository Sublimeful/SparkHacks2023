import "./style.css";

const app = document.querySelector("#app");

function render(html) {
  app.innerHTML = html;
}

export default function loadPage() {
  render(`
        <div class="sidenav">
            Hello Dashboard! Your Mom
        </div>
    `);
}
