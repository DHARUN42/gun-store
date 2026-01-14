




function login() {
    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
    } else {
        window.location.href = "main.html";
    }
}
