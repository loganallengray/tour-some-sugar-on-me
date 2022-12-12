import { getBands, getBookings, getBandMembers } from "./database.js";

const bands = getBands();
const bookings = getBookings();
const bandMembers = getBandMembers();

/* 
    Define empty HTML string.
    Iterate through bands.
    Add data to the HTML string, wrapped in tags.
    Return HTML string when fully iterated.
*/

export const listBands = () => {
    let html = '<ul>';

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`;
    }

    return html += "</ul>"
}

/* 
    Add event listener for when they click a venue.
    In the event listener, start a window alert.
    In the window alert, display venue name and the 
    band names that have booked the venue.
    To do this I will have to define a function that 
    looks through bookings.
*/

const bandBookings = (band) => {
    /* 
        Define empty array.
        Iterate through bookings.
        Check if band name is equal to the booking's band name.
        If it is, add venue name to the array.
        Return the joined the array at the end.
    */
    const venues = []

    for (const booking of bookings) {
        if (band.name === booking.bandName) {
            venues.push(booking.venueName);
        }
    }

    // joins the array, and replaces the last comma with ", and"
    return venues.join(', ').replace(/, ([^,]*)$/, ', and $1');
}

/* 
    Create empty array
    Iterate through bandmembers
    Check if band ID is equal to bandmembers ID
    If true, push to empty array
    return array
*/

const listOfBandMembers = (band) => {
    const list = [];

    for (const bandMember of bandMembers) {
        if (bandMember.bandId === band.id) {
            list.push(`${bandMember.firstName} ${bandMember.lastName} (${bandMember.bandRole})`);
        }
    }

    return list.join('\n');
}

document.addEventListener("click",
(e) => {
    // assign the target to a variable
    const itemClicked = e.target;

    // check if the target's ID name matches
    if (itemClicked.id.startsWith("band")) {
        // get the ID value
        const [, bandId] = itemClicked.id.split("--");

        // iterate through bands
        for (const band of bands) {
            // check if band ID is equal to the target's ID
            if (band.id === parseInt(bandId)) {
                // window alert
                const bandMemberList = listOfBandMembers(band);

                window.alert(`${bandMemberList}\n${band.name} will be playing at ${bandBookings(band)}
                `);
            }
        }
    }
});