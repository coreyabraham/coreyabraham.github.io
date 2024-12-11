let menuCurrentState = true;

let menuInstance = null;
let menuIconInstance = null;

function onMenuResize(event)
{
    if (menuInstance == null)
    {
        console.log("`menuInstance` is nulled, skipping...");
        return;
    }

    if (menuIconInstance == null)
    {
        console.log("`menuIconInstance` is nulled, skipping....");
        return;
    }
    
    var testify = event.currentTarget.innerWidth > 1000 && menuInstance.style.display != "block";
    if (!testify) return;

    menuCurrentState = true;

    menuIconInstance.classList.toggle("change");
    menuInstance.style.display = "block";
}

function onMenuButtonClick(x) 
{
    if (menuIconInstance == null) menuIconInstance = x;
    menuCurrentState = !menuCurrentState;

    x.classList.toggle("change");
    
    var target = document.getElementById("barGradient")
    if (target == null) return;

    var type = "none";
    if (menuCurrentState == true) type = "block";

    target.style.display = type;

    if (menuInstance == null)
    {
        menuInstance = target;
        addEvent(this, "resize", onMenuResize);
    }
}