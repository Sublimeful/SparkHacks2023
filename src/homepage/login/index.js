import loadSignup from "/homepage/signup/index.js";
import loadDashboard from "/dashboard/index.js";
import { login } from "/firebase.js";

export default function render() {
  const homepageForm = document.getElementById("homepage-form");

  // Load login
  homepageForm.innerHTML = `
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        ></input>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        ></input>
        <button type="submit" id="loginBtn">
          Log In
        </button>
        <p>
          Don't have an account?{" "}
          <a id="signupLink">
            Sign Up
          </a>
        </p>
    `;

  const submitLogin = async (event) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Here, you would use your preferred authentication method to check the user's credentials and log them in
    // For example, you could use Firebase Authentication or your own server-side authentication logic
    
    // Error if fails to login, user credentials if succeeds
    let res;

    try {
      res = await login(email, password);
      loadDashboard();
    } catch (error) {
      console.error("Invalid password!");
    }

    event.preventDefault();
  };
  homepageForm.addEventListener("submit", submitLogin);

  const signupLink = document.getElementById("signupLink");

  signupLink.addEventListener("click", () => {
    // Detach login event listener
    homepageForm.removeEventListener("submit", submitLogin);

    // Load signup
    loadSignup();
  });
}
