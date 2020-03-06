const blocks = document.querySelectorAll('.block:not(:nth-child(5))');
const concact_butn = document.querySelector('.contact-button');
const icons = document.querySelectorAll('.icon');

let hideIsActive, showIsActive = false;

function hideContant()
{
    if (!showIsActive)
    {
        hideIsActive = true;
        setTimeout(function()
        {
            concact_butn.style.opacity = "0";
            concact_butn.style.zIndex = "-5";
        }, 0);
        setTimeout(function()
        {
            icons.forEach((icon) => 
            {
                icon.removeAttribute("style");
                icon.style.zIndex = "5";
            });
            hideIsActive = false;
        }, 1000);
    }
}

function showContact()
{
    if (!hideIsActive)
    {
        showIsActive = true;
        setTimeout(function()
        {
            icons.forEach((icon) => 
            {
                icon.removeAttribute("style");
                icon.style.opacity = "0";
                icon.style.zIndex = "-5";
            });
        }, 0);
        setTimeout(function()
        {
            concact_butn.style.opacity = "1";
            concact_butn.style.zIndex = "5";
            showIsActive = false;
        }, 1000);
    }
}


blocks.forEach((block) => 
{
    block.addEventListener('mouseover', () =>
    {
        if (!hideIsActive) 
        { 
            showContact();
        }
    });
});

icons.forEach((icon) => 
{
    icon.removeAttribute("style");
    icon.style.opacity = "0";
    icon.style.zIndex = "-5";
});
concact_butn.style.opacity = "1";
concact_butn.style.zIndex = "5";