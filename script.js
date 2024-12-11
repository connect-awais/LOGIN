// Correct email and password (you can change this for testing)
const correctEmail = "awaisyousuf60@gmail.com";
const correctPassword = "AWAISKING";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the default way
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Check if the entered email and password match the correct values
    if (email === correctEmail && password === correctPassword) {
        // Redirect to the website
        window.location.href = "https://connect-awais.github.io/Pixel-Code/"; // Replace with your actual website URL
    } else {
        alert("Incorrect email or password. Please try again.");
    }
});


