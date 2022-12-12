import { getVenues } from "./database.js";
import { getBookings } from "./database.js";

const venues = getVenues();
const bookings = getBookings();

/* 
    Define empty HTML string.
    Iterate through venues.
    Add data to the HTML string, wrapped in tags.
    Return HTML string when fully iterated.
*/

export const listVenues = () => {
    let html = '<ul>';

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`;
    }

    return html += "</ul>"
}

/* 
    Add event listener for when they click a venue.
    In the event listener, start a window alert.
    In the window alert, display venue name and the 
    band names that have booked the venue.
    To do this I will have to define a function that 
    looks through both bookings.
*/

const venueBookings = (venue) => {
    /* 
        Define empty array.
        Iterate through bookings.
        Check if venue name is equal to the booking's venue name.
        If it is, add band name to the array.
        Return the joined the array at the end.
    */
    const bands = []

    for (const booking of bookings) {
        if (venue.name === booking.venueName) {
            bands.push(booking.bandName);
        }
    }

    // joins the array, and replaces the last comma with ", and"
    return bands.join(', ').replace(/, ([^,]*)$/, ', and $1');
}

document.addEventListener("click",
(e) => {
    // assign the target to a variable
    const itemClicked = e.target;

    // check if the target's ID name matches
    if (itemClicked.id.startsWith("venue")) {
        // get the ID value
        const [, venueId] = itemClicked.id.split("--");

        // iterate through venues
        for (const venue of venues) {
            // check if venue ID is equal to the target's ID
            if (venue.id === parseInt(venueId)) {
                // window alert
                window.alert(`${venue.name} has been booked by ${venueBookings(venue)}`);
            }
        }
    }
});