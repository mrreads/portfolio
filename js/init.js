ScrollReveal().reveal('.anim', { delay: 150 });

new TypeIt("#type", {
    speed: 50,
    startDelay: 900
})
.type("Я - разработчик сайтов", {delay: 100})
.delete(7)
.move(-10, {speed: 50, delay: 100})
.delete(5)
.type("Веб-р", {delay: 200})
.move(10, {speed: 150, delay: 100})
.type(".", {delay: 250})
.delete(1)
.type(", дизайнер.", {delay: 2250})
.go();