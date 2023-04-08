import loadSignup from "/homepage/signup/index.js";
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
        <button type="submit" id="signupLink">
          Sign Up
        </button>
        
    `;

  homepageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Here, you would use your preferred authentication method to check the user's credentials and log them in
    // For example, you could use Firebase Authentication or your own server-side authentication logic
    login(email, password);
  });

  const signupLink = document.getElementById("signupLink");

  signupLink.addEventListener("click", () => {
    // Load signup
    loadSignup();
  });
}
