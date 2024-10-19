document.getElementById('confirmBooking').addEventListener('click', function() {
    const concert = document.getElementById('concert');
    const ticketType = document.getElementById('ticketType');
    const quantity = document.getElementById('quantity');
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error messages
    errorMessage.innerText = '';

    // Validate inputs
    if (!concert.value || !ticketType.value || !quantity.value || quantity.value <= 0) {
        errorMessage.innerText = 'Error: Please select all required fields';
        return;
    }

    // Get ticket price and calculate total
    const ticketPrice = parseInt(ticketType.options[ticketType.selectedIndex].dataset.price);
    const totalPrice = ticketPrice * quantity.value;

    // Update booking summary
    document.getElementById('summaryConcert').innerText = concert.value;
    document.getElementById('summaryTicketType').innerText = ticketType.value;
    document.getElementById('summaryQuantity').innerText = quantity.value;
    document.getElementById('summaryTotalPrice').innerText = totalPrice;

    // Show the summary and hide the form
    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('bookingSummary').classList.remove('hidden');
});

document.getElementById('editBooking').addEventListener('click', function() {
    // Hide summary and show the form
    document.getElementById('bookingForm').style.display = 'block';
    document.getElementById('bookingSummary').classList.add('hidden');
});
