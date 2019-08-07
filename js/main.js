function hideContant()
{
    setTimeout(function()
    {
        document.querySelector(".contact").style.opacity = "0";
        document.querySelector(".contact").style.zIndex = "-1";
        document.querySelector(".block:nth-child(5)").style.justifyContent = "space-evenly";
        document.querySelector(".block:nth-child(5)").style.Width = document.querySelector(".block:nth-child(5)").offsetWidth + "px";
    }, 0);
    setTimeout(function()
    {
        document.querySelector(".vk").style.display = "flex";
        document.querySelector(".github").style.display = "flex";
        document.querySelector(".codepen").style.display = "flex";
    }, 700);

}

function showContact()
{
    if (document.querySelector(".codepen").style.display === "flex")
    {
        setTimeout(function()
        {
            document.querySelector(".github").style.display = "none";
            document.querySelector(".codepen").style.display = "none";
            document.querySelector(".vk").style.display = "none";
            document.querySelector(".block:nth-child(5)").style.justifyContent = "center";
            document.querySelector(".block:nth-child(5)").style.Width = document.querySelector(".block:nth-child(5)").offsetWidth + "px";
        }, 100);
        setTimeout(function()
        {
            document.querySelector(".contact").style.zIndex = "1";
            document.querySelector(".contact").style.opacity = "1";
        }, 50);
    }
}

let items = document.querySelectorAll(".block:not(:nth-child(5)) a:not(.icon)");

for(let i = 0; i < items.length; i++)
{
    items[i].addEventListener("mouseover", showContact);
}

showContact();