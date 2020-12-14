document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.preloader').remove();
        }, 500);
    }, 100);
});