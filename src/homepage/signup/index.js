import { register } from "/firebase.js";
import loadDashBoard from "/dashboard/index.js";

export default function render() {
  const homepageForm = document.getElementById("homepage-form");

  // Load signup
  homepageForm.innerHTML = `
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button id="register-btn" type="submit">Register</button>    
`;

  homepageForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Error if fails to sign up, user credentials if succeeds
    let res;

    try {
      res = await register(email, password);
      loadDashBoard();
    } catch (error) {
      console.error("Error in registration!");
    }
  });
}
