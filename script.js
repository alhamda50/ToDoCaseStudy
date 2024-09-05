// Select form and inputs
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Login credentials
const validUsername = 'admin';
const validPassword = '12345';

// Callback function to handle redirection after successful login
function redirectToMainPage() {
    window.location.href = 'todo.html'; // Redirect to the todo.html page
}

// Form submit event listener
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the input fields
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Validate the username and password
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Clear any previous error messages
        errorMessage.textContent = '';

        // Call the redirect function if login is successful
        redirectToMainPage();
    } else {
        // Show an error message if the credentials are incorrect
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
