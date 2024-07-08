const USERNAME = "uros";
const PASSWORD = "1234";

const userName = document.getElementById("userName");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

const redirect = () => {
    window.location.href = "./home.html"
}

const login = () => {
 const inputUserName = userName.value.toLowerCase();
 const inputPassword = password.value.toLowerCase();
 if (inputUserName === USERNAME && inputPassword === PASSWORD) {
    return true;
 } else {
    return false;
 }
}

btnLogin.addEventListener("click", () => {
    const isValid = login();
    if (isValid === true) {
        redirect();
    } else {
        alert("error")
    }
})