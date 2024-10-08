function login() {
    document.getElementById('spinner').style.display = 'block';
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    setTimeout(() => {
        if (username === 'user' && password === 'password') {
            window.location.href = 'role-selection.html';
        } else {
            document.getElementById('login-message').textContent = 'Invalid username or password. Try again.';
            document.getElementById('spinner').style.display = 'none';
        }
    }, 1000); // Simulated login delay
}

function applyForLoan() {
    alert("Applying for a loan...");
}

function checkLoanStatus() {
    alert("Checking loan status...");
}

function managePayments() {
    alert("Managing payments...");
}

function reviewApplications() {
    alert("Reviewing loan applications...");
}

function generateReports() {
    alert("Generating loan reports...");
}

function contactBorrowers() {
    alert("Contacting borrowers...");
}

function manageUsers() {
    alert("Managing users...");
}

function viewAnalytics() {
    alert("Viewing system analytics...");
}

function configureSettings() {
    alert("Configuring loan settings...");
}
