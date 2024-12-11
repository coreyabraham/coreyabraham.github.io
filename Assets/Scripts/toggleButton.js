let current = true;

function toggle()
{
    current = !current;

    let elements = document.getElementsByName("toggleButton")	
    let baseName = "-- Projects --";

    if (current == true) { baseName = "<< Projects >>"; }

    elements[0].textContent = baseName;

    let buttons = document.getElementsByName("toggleable");
    for (i = 0; i < buttons.length; i++)
    {
        let targetType = "none";
        if (current == true) { targetType = "block" }

        buttons[i].style.display = targetType;
    }
}