import "./style.css";

const app = document.querySelector("#app");

function render(html) {
  app.innerHTML = html;
}

export default function loadPage() {
  console.log("HELLO");
  render(`
        <div>
            Hello Homepage!
        </div>
    `);
}
