const database = {
    venues: [
        {
            id: 1,
            name: "Nashville Palace",
            address: "2611 McGavock Pk",
            squareFootage: 1500,
            maximumOccupancy: 150
        }, {
            id: 2,
            name: "The Station Inn",
            address: "402 12th Ave S",
            squareFootage: 1000,
            maximumOccupancy: 75
        }, {
            id: 3,
            name: "Analog at Hutton Hotel",
            address: "1808 West End Ave 2nd Floor",
            squareFootage: 500,
            maximumOccupancy: 30
        }
    ],
    bands: [
        {
            id: 1,
            name: "The Devil Makes Three",
            members: 3,
            musicalGenre: "Country",
            yearFormed: 2002
        }, {
            id: 2,
            name: "Mastodon",
            members: 5,
            musicalGenre: "Heavy Metal",
            yearFormed: 1999
        }, {
            id: 3,
            name: "Disturbed",
            members: 7,
            musicalGenre: "Heavy Metal",
            yearFormed: 1994
        }, {
            id: 4,
            name: "Talking Heads",
            members: 4,
            musicalGenre: "Rock",
            yearFormed: 1975
        }, {
            id: 5,
            name: "Five Finger Death Punch",
            members: 9,
            musicalGenre: "Heavy Metal",
            yearFormed: 2005
        }
    ],
    bandMembers: [
        {
            id: 1,
            firstName: "test",
            lastName: "test",
            yearBorn: 1999,
            bandRole: "test",
            bandId: 1
        },
        {
            id: 2,
            firstName: "test",
            lastName: "test",
            yearBorn: 1999,
            bandRole: "test",
            bandId: 1
        },
        {
            id: 3,
            firstName: "test",
            lastName: "test",
            yearBorn: 1999,
            bandRole: "test",
            bandId: 1
        },
    ],
    bookings: [
        {
            id: 1,
            bandName: "The Devil Makes Three",
            venueName: "Nashville Palace",
            date: "12/1/22"
        }, {
            id: 2,
            bandName: "Disturbed",
            venueName: "Nashville Palace",
            date: "12/2/22"
        }, {
            id: 3,
            bandName: "Five Finger Death Punch",
            venueName: "The Station Inn",
            date: "12/3/22"
        }, {
            id: 4,
            bandName: "Talking Heads",
            venueName: "Analog at Hutton Hotel",
            date: "12/3/22"
        }, {
            id: 5,
            bandName: "Mastodon",
            venueName: "Nashville Palace",
            date: "12/4/22"
        }, {
            id: 6,
            bandName: "Disturbed",
            venueName: "The Station Inn",
            date: "12/6/22"
        }, {
            id: 7,
            bandName: "The Devil Makes Three",
            venueName: "Analog at Hutton Hotel",
            date: "12/7/22"
        }, {
            id: 8,
            bandName: "Talking Heads",
            venueName: "The Station Inn",
            date: "12/7/22"
        }, {
            id: 9,
            bandName: "Mastodon",
            venueName: "The Station Inn",
            date: "12/8/22"
        }, {
            id: 10,
            bandName: "Five Finger Death Punch",
            venueName: "Analog at Hutton Hotel",
            date: "12/9/22"
        }
    ]
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}

export const getBandMembers = () => {
    return database.bandMembers.map(member => ({ ...member }))
}