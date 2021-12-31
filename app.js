function dropdown()
{
    var y = document.getElementById("nav-bar");
    if(y.className === "row flex nav-bar")
    {
        y.className += "-responsive";
    }
    else
    {
        y.className = "row flex nav-bar";
    }
}

function dropdownReset()
{
    var x = document.getElementById("menu");
    x.className = "";
}


let bookingButton = document.querySelector('#booking-btn');
let arrival = document.querySelector('#arrival_city');
let departure = document.querySelector('#departure_city');
let date = document.querySelector('#booking_date');

bookingButton.addEventListener('click', () => {
    let arrivalCity = arrival.value;
    let departureCity = departure.value;
    let travelDate = date.value;

    if(arrivalCity === departureCity)
    {
        alert("Arrival City and Departure City cannot be same");
    }
    else if(arrivalCity == "arrival")
    {
        alert("Please select Arrival City");
    }
    else if(departureCity == "departure")
    {
        alert("Please select Departure City");
    }
    else if(travelDate == "select_date")
    {
        alert("Please select Travelling Date")
    }
    else
    {
        alert("Your Booking From " + departureCity + " To " + arrivalCity + " On " + travelDate + " is Confirmed");
    }
    console.log(arrivalCity);
})

