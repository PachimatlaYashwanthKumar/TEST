// This file contains JavaScript functions to handle the submission of biodata entered in the profile page, including logic to save the data (note: saving to a folder would typically require a backend service).

document.getElementById('biodataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather biodata from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Here you would typically send the data to a server
    // For demonstration, we'll just log it to the console
    console.log('Biodata submitted:', {
        name: name,
        age: age,
        email: email
    });

    // Optionally, you can show a success message or redirect the user
    alert('Biodata submitted successfully!');
});