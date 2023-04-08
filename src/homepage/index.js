import "./style.css";
import logoSVG from "/homepage/assets/icon.svg";
import loadLogin from "/homepage/login/index.js";

export default function render() {
  document.getElementById("app").innerHTML = `
    <div class="container">
      <div class="logo">
        <img src=${logoSVG} alt="Ligma Logo"></img>
      </div>
      <h1>Ligma</h1>
      <h2>Improved Eventing</h2>
      <form id="homepage-form"></form>
    </div>
  `;

  // Load login first
  loadLogin();
}
