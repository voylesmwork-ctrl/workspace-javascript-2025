var guest = {
    name: "Zhang",
    checkIn: "Oct 17, 2025",
    checkOut: "Oct 17, 2025",
    numGuests: 4,
    roomType: "suite",
    display: function() {
        return this.name;
    }
};

var guestGroup = new Array();

function reservation() {
    var guest = {
        name: document.getElementById('guestname').value,
        checkIn: document.getElementById('checkin').value,
        checkOut: document.getElementById('checkout').value,
        numGuests: document.getElementById('guestnum').value,
        roomType: document.getElementById('room').value
    };
    guestGroup.push(guest);
}

function listReservations() {
    var concat = "";
    guestGroup.forEach((guest) =>{
        concat += "Name: " + guest.name + ", Check in: " + guest.checkIn + ", Check out: " + guest.checkOut + ", Number of guests: " + guest.numGuests + ", Room type: " + guest.roomType + "\n";
    });
    document.getElementById('listbookings').textContent = concat;
}

document.getElementById('submit').addEventListener('click', reservation);
document.getElementById("lists").addEventListener('click', listReservations);