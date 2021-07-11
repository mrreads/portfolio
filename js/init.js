ScrollReveal().reveal('.anim', { delay: 150 });

new TypeIt("#type", {
    speed: 55,
    startDelay: 900
})
.type("Я - разработчик сайтов, дизайнер.", {delay: 100})
.delete(18)
.move(-10, {speed: 50, delay: 100})
.delete(7)
.type("Веб-р", {delay: 200})
.move(10, {speed: 150, delay: 100})
.type(".", {delay: 250})
.delete(1)
.type(", CG-generalist.", {delay: 1250})
.type("..", {delay: 500})
.delete(18)
.type("!", {delay: 700})
.move(-13, {speed: 50, delay: 100})
.delete(3)
.type("Frontend", {delay: 1250})
.move(15, {speed: 150, delay: 100})
.go();



document.querySelectorAll('.accord_title').forEach(acc => {
    acc.addEventListener('click', a => {

        let additionalInfo;

        if (a.target.tagName == 'IMG')
            additionalInfo = a.target.parentElement.nextElementSibling;
        else
            additionalInfo = a.target.nextElementSibling;

        if (additionalInfo.classList.contains('hide'))
        {
            additionalInfo.style.maxHeight = '1500px';
            additionalInfo.style.paddingBottom = '15px';
            acc.querySelector('.arrow').style.transform = 'rotate(0deg)';

            additionalInfo.classList.remove('hide');
        }
        else
        {
            additionalInfo.style.maxHeight = 0;
            additionalInfo.style.paddingBottom = 0;
            acc.querySelector('.arrow').style.transform = 'rotate(180deg)';

            additionalInfo.classList.add('hide');    
        }
    }, false);

});