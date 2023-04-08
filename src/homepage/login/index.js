import loadSignup from "/homepage/signup/index.js";

export default function render() {
  const hompageForm = document.getElementById("homepage-form");

  // Load signup
  hompageForm.innerHTML = `
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

  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Here, you would use your preferred authentication method to check the user's credentials and log them in
    // For example, you could use Firebase Authentication or your own server-side authentication logic

    // For this example, we will simply show an alert with the user's email and password
    alert(`Email: ${email}\nPassword: ${password}`);
  });

  const signupLink = document.getElementById("signupLink");

  signupLink.addEventListener("click", () => {
    // Load signup
    loadSignup();
  });
}
