// References to DOM elements
const bikeIdGroup = document.getElementById('bikeIdGroup');
const actionSelect = document.getElementById('action');
const outputDiv = document.getElementById('output');
const bikeIdInput = document.getElementById('bikeId');

// Event Listener for action dropdown
actionSelect.addEventListener('change', function () {
    if (this.value === 'rent' || this.value === 'return') {
        bikeIdGroup.style.display = 'block';
    } else {
        bikeIdGroup.style.display = 'none';
        bikeIdInput.value = ''; // Clear the input if not needed
    }
});

// Function to validate Bike ID
function validateBikeId(bikeId) {
    const bikeIdPattern = /^[A-Za-z0-9]{3,10}$/; // Bike ID: Alphanumeric, 3-10 characters
    return bikeIdPattern.test(bikeId);
}

// Function to handle actions
function handleAction() {
    const action = actionSelect.value;
    const bikeId = bikeIdInput.value.trim(); // Trim whitespace

    let message = '';

    switch (action) {
        case 'view':
            message = 'Displaying available bikes...';
            break;

        case 'rent':
            if (!bikeId) {
                message = 'Please enter a Bike ID to rent.';
            } else if (!validateBikeId(bikeId)) {
                message = 'Invalid Bike ID! Please enter a valid Bike ID (3-10 alphanumeric characters).';
            } else {
                message = `Bike with ID "${bikeId}" has been rented successfully.`;
            }
            break;

        case 'return':
            if (!bikeId) {
                message = 'Please enter a Bike ID to return.';
            } else if (!validateBikeId(bikeId)) {
                message = 'Invalid Bike ID! Please enter a valid Bike ID (3-10 alphanumeric characters).';
            } else {
                message = `Bike with ID "${bikeId}" has been returned successfully.`;
            }
            break;

        default:
            message = 'Please select a valid action.';
    }

    // Update output div
    outputDiv.textContent = message;
    outputDiv.style.color = action === 'rent' || action === 'return' ? (message.includes('successfully') ? 'green' : 'red') : '#333';
}
