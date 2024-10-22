// Script to toggle menu for small screens
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('section');
    let windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        let elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});

document.getElementById('btnLanguages').addEventListener('click', function() {
    document.getElementById('skillsDisplay').innerHTML = `
        <div>
            <img src="html5.jpg" alt="HTML" style="width: 90px; height: 70px;">
            <img src="css3.jpg" alt="CSS" style="width: 100px; height: 70px;"><br>
            <img src="js.jpg" alt="JavaScript" style="width: 100px; height: 70px;">
            <img src="java.jpg" alt="Java" style="width: 100px; height: 70px;">
        </div>
    `;
});

document.getElementById('btnFrameworks').addEventListener('click', function() {
    document.getElementById('skillsDisplay').innerHTML = `
        <div>
             <img src="react.jpg" alt="react" style="width: 120px; height: 100px;"><br>
        </div>
    `;
});

document.getElementById('btnDatabases').addEventListener('click', function() {
    document.getElementById('skillsDisplay').innerHTML = `
        <div>
            <img src="mysql.jpg" alt="mysql" style="width: 100px;"><br>
        </div>
    `;
});

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
});