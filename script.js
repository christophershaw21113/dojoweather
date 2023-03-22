let cookiePopup = document.querySelector("#cookie-popup");

function dismissBtn() {
    cookiePopup.remove();
}
let todayDayTemp = document.querySelector(".red-degrees.today");
let todayEveningTemp = document.querySelector(".blue-degrees.today");
let tomorrowDayTemp = document.querySelector(".red-degrees.tomorrow");
let tomorrowEveningTemp = document.querySelector(".blue-degrees.tomorrow");
let fridayDayTemp = document.querySelector(".red-degrees.friday");
let fridayEveningTemp = document.querySelector(".blue-degrees.friday");
let saturdayDayTemp = document.querySelector(".red-degrees.saturday");
let saturdayEveningTemp = document.querySelector(".blue-degrees.saturday");



function tempChange(e) {

    if (e.value == "farenheit") {
        todayDayTemp.innerHTML = "24&deg;";
        todayEveningTemp.innerHTML = "18&deg;";
        tomorrowDayTemp.innerHTML = "27&deg;"
        tomorrowEveningTemp.innerHTML = "19&deg;";
        fridayDayTemp.innerHTML = "21&deg;"
        fridayEveningTemp.innerHTML = "16&deg;";
        saturdayDayTemp.innerHTML = "26&deg;"
        saturdayEveningTemp.innerHTML = "21&deg;";



    } else if (e.value == "celsius") {
        todayDayTemp.innerHTML = "-4&deg;";
        todayEveningTemp.innerHTML = "-7&deg;";
        tomorrowDayTemp.innerHTML = "-2&deg;"
        tomorrowEveningTemp.innerHTML = "-7&deg;";
        fridayDayTemp.innerHTML = "-6&deg;"
        fridayEveningTemp.innerHTML = "-8&deg;";
        saturdayDayTemp.innerHTML = "-3&deg;"
        saturdayEveningTemp.innerHTML = "-6&deg;";


    }
}