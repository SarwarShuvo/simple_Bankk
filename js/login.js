
//Login submit Button Event Listener add 
document.getElementById('login-btn').addEventListener('click', function () {

    // Get username 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // Get password 
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    // Check email and password 
    if (userEmail == 'shuvo@gmail.com' && userPass == '12345') {
        window.location.href = "bank.html";
    }
})
