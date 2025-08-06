document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('login-page');
    const bioDataPage = document.getElementById('bio-data-page');
    const loginButton = document.getElementById('login-button');
    const backToLoginButton = document.getElementById('back-to-login');
    const submitBioDataButton = document.getElementById('submit-bio-data');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginMessage = document.getElementById('login-message');
    const saveMessage = document.getElementById('save-message');
    const bioDataForm = document.getElementById('bio-data-form');

    // Unique login credentials
    const users = {
        'user1': 'pass1',
        'admin': 'admin123',
        'guest': 'welcome'
    };

    let loggedInUser = null; // To keep track of the currently logged-in user

    // Function to show a page
    function showPage(pageElement) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
        });
        pageElement.classList.remove('hidden');
    }

    // Function to save bio-data to localStorage
    function saveBioData() {
        if (loggedInUser) {
            const bioData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                dob: document.getElementById('dob').value,
                gender: document.getElementById('gender').value
            };
            localStorage.setItem(`bioData_${loggedInUser}`, JSON.stringify(bioData));
            saveMessage.textContent = 'Information saved successfully!';
            setTimeout(() => saveMessage.textContent = '', 3000); // Clear message after 3 seconds
        }
    }

    // Function to load bio-data from localStorage
    function loadBioData() {
        if (loggedInUser) {
            const savedData = localStorage.getItem(`bioData_${loggedInUser}`);
            if (savedData) {
                const bioData = JSON.parse(savedData);
                document.getElementById('name').value = bioData.name || '';
                document.getElementById('email').value = bioData.email || '';
                document.getElementById('phone').value = bioData.phone || '';
                document.getElementById('address').value = bioData.address || '';
                document.getElementById('dob').value = bioData.dob || '';
                document.getElementById('gender').value = bioData.gender || '';
            } else {
                // Clear the form if no saved data for the user
                bioDataForm.reset();
            }
        }
    }

    // Login button click handler
    loginButton.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (users[username] && users[username] === password) {
            loggedInUser = username;
            loginMessage.textContent = '';
            showPage(bioDataPage);
            loadBioData(); // Load bio-data for the logged-in user
        } else {
            loginMessage.textContent = 'Invalid username or password.';
        }
    });

    // Back to Login button click handler
    backToLoginButton.addEventListener('click', () => {
        saveBioData(); // Save current bio-data before going back
        showPage(loginPage);
        usernameInput.value = ''; // Clear username
        passwordInput.value = ''; // Clear password
        loginMessage.textContent = ''; // Clear any previous login messages
        loggedInUser = null; // Clear the logged-in user
    });

    // Submit Bio-data button click handler
    bioDataForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        saveBioData();
    });

    // Initialize by showing the login page
    showPage(loginPage);
});