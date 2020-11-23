// Load login details object (if it exists)
let login = JSON.parse(localStorage.getItem('login'));

// Store login details
function storeLogin () {
    localStorage.setItem("login", JSON.stringify(login));
}

// Logout
function signOut () {
    login.loggedIn = null;
    storeLogin();
    location.reload();
}

// login
function signIn () {
    let email = document.getElementById('signIn-_email').value;
    let user = email.slice(0, email.indexOf('@'));
    let password = document.getElementById('signIn-_password').value;
    // check if user exist, check if password matches
    if (login[user] && (email === login[user].email && sha256(password) === login[user].password)) {
        //set loggedIn user as input email
        login.loggedIn = email;
        // store login, redirect
        storeLogin();
        window.location.href = '../index.html';
    } else {
        alert("Username or Password Incorrect");
    }
}


// Sign up
function signUp () {
    let email = document.getElementById('signUp-_email').value;
    let usr = email.slice(0, email.indexOf('@'));
    // If login obj dose not yet exist in memory, create it
    if (!login) {
        login = {
            loggedIn: null
        };
    }
    // Check if email is already in use
    if (Object.keys(login).includes(usr)) {
        return alert("Email already in use, please try another");
    }
    // Check passwords match
    if (document.getElementById('signUp-_password').value !== document.getElementById('signUp-_password2').value) {
        return alert("Passwords did not match");
    }
    // Set new user details as property of login obj, property name = email minus `@mail.com`
    login[usr] = {
        fname: document.getElementById('signUp-_firstName').value,
        lname: document.getElementById('signUp-_lastName').value,
        email: email,
        // Hash password and store
        password: sha256(document.getElementById('signUp-_password').value)
    };
    // Set loggin in user as new user
    login.loggedIn = usr;
    // Store login, redirect
    storeLogin();
    window.location.href = '../index.html';
}

// Add login element to nav bar

let loginElm = document.createElement('div');
if (login && login.loggedIn !== null) {
    // Get logged in user, remove email extension if it exists
    let user = login.loggedIn;
    if (user.indexOf('@') !== -1) {user = user.slice(0, user.indexOf('@'));}
    // Set loginElm as user generated login element
    loginElm.innerHTML = `
        <button onclick="signOut()">Logout</button>
        <button onclick="window.location.href='../pages/login.html'">
        <i class="fas fa-user-circle"></i>
        <p>${login[user].fname}</p>
        </button>`;
    console.log(`logged in as ${login[user].fname}`);

} else {
    // Set loginElm as empty 'login' element
    loginElm.innerHTML = `
        <button onclick="window.location.href='../pages/login.html'">
            <i class="fas fa-user-circle"></i>
            <p>Login</p>
        </button>`;
    console.log("not logged in");

}
// Add login elemnt to DOM
document.getElementsByClassName("header-elements-top")[0].appendChild(loginElm);

console.log('ran login.js');