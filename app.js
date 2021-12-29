function dropdown()
{    
    var x = document.getElementById("menu");
    if(x.className === "")
    {
        x.className += "menu-responsive";
    }
    else
    {
        x.className = "";
    }
}

function dropdownReset()
{
    var x = document.getElementById("menu");
    x.className = "";
}



function booking()
{
    let arrivalCity = document.getElementById("arrival_city");
    let departureCity = document.getElementById("departure_city");
    console.log(arrivalCity);
    console.log(departureCity);

    if(arrivalCity !== departureCity)
    {
        alert("Your booking is confirmed");
    
    }
    else
    {
        alert("You cannot select same Departure City or Arrival City");
    }
}

