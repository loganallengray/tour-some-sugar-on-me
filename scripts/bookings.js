import { getBookings, getBands } from "./database.js";

const bookings = getBookings();
const bands = getBands();

/* 
    Define empty HTML string.
    Iterate through bookings.
    Add data to the HTML string, wrapped in tags.
    Return HTML string when fully iterated.
*/

export const listBookings = () => {
    let html = '';

    for (const booking of bookings) {
        html += `<div id="booking--${booking.id}">${booking.bandName} are playing at ${booking.venueName} on ${booking.date}</div>`;
    }

    return html;
}

/* 
    Add event listener for when they click a booking.
    In the event listener, start a window alert.
    In the window alert, band's info.
    To do this I will have to define a function that 
    looks through bands and checks the bandname of the booking.
*/

const bookedBands = (booking) => {
    /* 
        Iterate through bands.
        Check if band name is equal to the booking's band name.
        If it is, return the band.
    */
    for (const band of bands) {
        if (band.name === booking.bandName) {
            return band;
        }
    }
}

document.addEventListener("click",
(e) => {
    // assign the target to a variable
    const itemClicked = e.target;

    // check if the target's ID name matches
    if (itemClicked.id.startsWith("booking")) {
        // get the ID value
        const [, bookingId] = itemClicked.id.split("--");

        // iterate through bookings
        for (const booking of bookings) {
            // check if booking ID is equal to the target's ID
            if (booking.id === parseInt(bookingId)) {
                // window alert
                const bandInfo = bookedBands(booking);

                window.alert(`
                    ${bandInfo.name}
                    ${bandInfo.musicalGenre}
                    Formed in ${bandInfo.yearFormed}
                    ${bandInfo.members} band members`
                );
            }
        }
    }
});