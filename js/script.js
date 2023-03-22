function login() {
    event.preventDefault()
    var username = document.getElementById("fullName").value;
    var mail = document.getElementById("email").value;
    var code = document.getElementById("Password").value;
    if (mail === "admin@gmail.com" && code === "123456") {
        window.location.assign("homepage.html")
        return
    } else {
        Toastify({
            text: "plz enter Your Email and Password ",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            // onClick: function(){} // Callback after click
        }).showToast();
        return;
    }

    // login();
}
