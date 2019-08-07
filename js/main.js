function hideContant()
{
    document.querySelector(".contact").style.opacity = "0";
    document.querySelector(".contact").style.zIndex = "-1";
    document.querySelector(".block:nth-child(5)").style.justifyContent = "space-evenly";
    
    document.querySelector(".block:nth-child(5)").style.Width = document.querySelector(".block:nth-child(5)").offsetWidth + "px";
    
    //document.querySelector(".block:nth-child(5)").style.maxWidth = document.querySelector(".block:nth-child(5)").offsetWidth + "px";
    //document.querySelector(".block:nth-child(5)").style.minWidth = document.querySelector(".block:nth-child(5)").offsetWidth + "px";
    
    document.querySelector(".vk").style.display = "flex";
    document.querySelector(".github").style.display = "flex";
    document.querySelector(".codepen").style.display = "flex";
}