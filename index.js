document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-menu').innerHTML = data;

            // Hamburger menu logic - rulează doar după ce meniul e în DOM!
            const menuToggle = document.getElementById('menuToggle');
            const menuList = document.querySelector('.menuList');
            if (menuToggle && menuList) {
                menuToggle.addEventListener('click', function() {
                    menuList.classList.toggle('active');
                    menuToggle.classList.toggle('active');
                });

                // Închide meniul la click pe link (UX mobil)
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

    // === Restul codului tău pentru slideshow ===
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
// Banner cookie simplu
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('cookie-banner');
    const customizePanel = document.getElementById('cookie-customize-panel');
    const acceptAllBtn = document.getElementById('accept-all-cookies');
    const customizeBtn = document.getElementById('customize-cookies');
    const saveBtn = document.getElementById('save-cookies');
    const analyticsCheckbox = document.getElementById('analytics-cookies');

    // Afișează bannerul doar dacă nu există alegere salvată
    if (!localStorage.getItem('cookiePrefs')) {
        banner.style.display = 'block';
    }

    acceptAllBtn.onclick = function() {
        localStorage.setItem('cookiePrefs', JSON.stringify({ essential: true, analytics: true }));
        banner.style.display = 'none';
        // Inițializează aici scripturi de analiză dacă e cazul
    };

    customizeBtn.onclick = function() {
        customizePanel.style.display = 'block';
    };

    saveBtn.onclick = function() {
        localStorage.setItem('cookiePrefs', JSON.stringify({
            essential: true,
            analytics: analyticsCheckbox.checked
        }));
        banner.style.display = 'none';
        // Inițializează aici scripturi de analiză dacă e cazul
    };
});