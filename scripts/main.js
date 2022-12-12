import { listBookings } from "./bookings.js"
import { listBands } from "./bands.js"
import { listVenues } from "./venues.js"

/* 
    Define variable that hold querySelector to store all HTML in.
    Define variabe that holds all content HTML, use backticks and call
    the imported functions to get the lists of data.
    set the querySelector .innerHTML to equal the content HTML
*/

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="bookings">
    <h2>Bookings</h2>
    ${listBookings()}
</article>

<article class="details">
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${listBands()}
    </section>
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${listVenues()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML