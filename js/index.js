




let cities = ["Faislabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Shiekhupura", "Kashmir"]
// Input Value Call
let inputValue = () => {
    return document.getElementById("input").value;
}
// OutPut Call

function showOutput(outputbox) {
    return document.getElementById("output").innerHTML = outputbox
}

// Print Cities

function pac() {
    document.getElementById("output").innerHTML = ""
    let cities = ["Faislabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Shiekhupura", "Kashmir"]
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        let html = num + ")" + cities[i] + "<br>"
        document.getElementById("output").innerHTML += html
    }
}
// Add City in List
function acil() {
    let cities = ["Faislabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Shiekhupura", "Kashmir"]
    let newCity = inputValue();
    if (!newCity) {
        Toastify({
            text: "plz enter city name",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
        return;
    }
    cityFirstLetter = newCity.charAt(0).toUpperCase();
    cityAllLetter = newCity.slice(1).toLowerCase();
    capCity = cityFirstLetter + cityAllLetter;
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === capCity) {
            cityFound = true
            document.getElementById("output").innerHTML = "<span style=color:red;> " + "'" + capCity + "'" + "</span>" + " is Already in list"
        }
    }
    if (cityFound === false) {

        cities.push(capCity)
        document.getElementById("output").innerHTML = "<span style=color:red;> " + "'" + capCity + "'" + "</span>" + " is added in List."
    }
}
// Check City 

function cycil() {
    let cities = ["Faislabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Shiekhupura", "Kashmir"]
    let newCity = inputValue();
    if (!newCity) {
        Toastify({
            text: "plz enter city name",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
        return;
    }
    cityFirstLetter = newCity.charAt(0).toUpperCase();
    cityAllLetter = newCity.slice(1).toLowerCase();
    capCity = cityFirstLetter + cityAllLetter;
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === capCity) {
            cityFound = true
            document.getElementById("output").innerHTML = "<span style=color:red;> " + "'" + capCity + "'" + "</span>" + " is Already in list"
        }
    }
    if (cityFound === false) {

        // cities.push(capCity)
        document.getElementById("output").innerHTML = "<span style=color:red;> " + "'" + capCity + "'" + "</span>" + " is  not  in List."
    }
}

// 
// Footer
let dayTime = new Date();
let year = dayTime.getFullYear();
document.getElementById("footeryear").innerHTML = year;

// clear Output
document.getElementById("clear").onclick = function () {
    document.getElementById("output").innerHTML = "";
}
