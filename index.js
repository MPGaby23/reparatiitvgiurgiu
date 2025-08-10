document.addEventListener("DOMContentLoaded", function() {
   
    fetch('cookie-banner.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('cookie-banner-placeholder').innerHTML = html;

            const cookieBanner = document.getElementById("cookie-banner");
            const acceptCookiesButton = document.getElementById("accept-all-cookies");
            const customizeCookiesButton = document.getElementById("customize-cookies");
            const cookieCustomizePanel = document.getElementById("cookie-customize-panel");
            const saveCookiesButton = document.getElementById("save-cookies");
            const analyticsCookiesCheckbox = document.getElementById("analytics-cookies");

            if (!localStorage.getItem("cookiesAccepted")) {
                cookieBanner.style.display = "block";
            }

            acceptCookiesButton.addEventListener("click", function() {
                localStorage.setItem("cookiesAccepted", "true");
                cookieBanner.style.display = "none";
            });

            customizeCookiesButton.addEventListener("click", function() {
                cookieCustomizePanel.style.display = "block";
            });

            saveCookiesButton.addEventListener("click", function() {
                const analyticsCookiesAccepted = analyticsCookiesCheckbox.checked;
                localStorage.setItem("analyticsCookies", analyticsCookiesAccepted);
                cookieCustomizePanel.style.display = "none";
                cookieBanner.style.display = "none";
            });
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-menu').innerHTML = data;
            
            const menuToggle = document.getElementById('menuToggle');
            const menuList = document.querySelector('.menuList');
            if (menuToggle && menuList) {
                menuToggle.addEventListener('click', function() {
                    menuList.classList.toggle('active');
                    menuToggle.classList.toggle('active');
                });

                menuList.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        if (window.innerWidth <= 900) {
                            menuList.classList.remove('active');
                            menuToggle.classList.remove('active');
                        }
                    });
                });
            }
        });

    let slideIndex = 0;
    function showSlide(n) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === n);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === n);
        });
        slideIndex = n;
    }
    function nextSlide() {
        const slides = document.querySelectorAll('.slide');
        showSlide((slideIndex + 1) % slides.length);
    }
    function prevSlide() {
        const slides = document.querySelectorAll('.slide');
        showSlide((slideIndex - 1 + slides.length) % slides.length);
    }
    setTimeout(() => {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        next?.addEventListener('click', nextSlide);
        prev?.addEventListener('click', prevSlide);
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => showSlide(i));
        });
        setInterval(nextSlide, 4000);
        showSlide(slideIndex);
    }, 100);
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('main-footer').innerHTML = data;
        // Setează anul curent în footer după ce a fost inserat în DOM
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    });
});
