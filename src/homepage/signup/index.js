export default function render() {
  const hompageForm = document.getElementById("homepage-form");

  // Load login
  hompageForm.innerHTML = `
        <div class="form-group">
          <label for="first-name">First Name:</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>
        <div class="form-group">
          <label for="last-name">Last Name:</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>    
`;
}
