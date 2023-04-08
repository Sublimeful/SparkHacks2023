import { addEvent } from "/firebase.js";

function render(html) {
  document.querySelector("#dashboard").innerHTML = html;
}

export default function loadPage() {
  render(`
    <div class="container">
      <h1>Create An Event</h1>
      <form id="formCreateEvent">
        <div class="input-container">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter event name">
        </div>
        <div class="input-container">
          <label for="date">Date</label>
          <input type="date" id="date" name="date">
        </div>
        <div class="input-container">
          <label for="time">Time</label>
          <input type="time" id="time" name="time">
        </div>
        <div class="input-container">
          <label for="description">Description</label>
          <textarea id="description" name="description" placeholder="Enter event description"></textarea>
        </div>
        <button id="create-button">Create</button>
      </form>
    </div>
    <script src="script.js"></script>
    `);
  const eventForm = document.querySelector("#formCreateEvent");
  const submitCreateEvent = async () => {
    const formData = new FormData(eventForm);
    const data = {};
    for (const item of formData.entries()) {
      data[item[0]] = item[1];
    }
    await addEvent(data);
  };
  eventForm.addEventListener("submit", (e) => {
    submitCreateEvent();
    e.preventDefault();
  });
}
