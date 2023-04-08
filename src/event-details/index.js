import "./style.css";
import loadTopNav from "./topnav/index.js";

const app = document.querySelector("#app");

function render(html) {
  app.innerHTML = html;
}

export default function loadPage() {
  render(`
        <div id="topnav"></div>
        <div id="event-details">
            <div class="event-details-container">
                <div class="event-header">
                    <h1>Event Title</h1>
                    <img src="default-event.jpg" alt="Event Image">
                </div>
                <div class="organizer-info">
                    <img src="user.png" alt="Organizer Profile Pic">
                    <p>Organizer Name</p>
                </div>
                <p class="event-description">Event Description goes here.</p>
                <p class="event-date-time">Date and Time of Event</p>
                <button class="rsvp-button">RSVP</button>
                <form class="comment-form">
                    <label for="comment">Comments</label><br>
                    <textarea id="comment" name="comment" rows="4" cols="50"></textarea><br>
                    <button type="submit" class="submit-button">Submit</button>
                </form>
            </div>
        </div>
    `);

  loadTopNav();
}
