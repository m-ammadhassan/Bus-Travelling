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