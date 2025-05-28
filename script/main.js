import '../components/HeaderComponent.js';
import '../components/HeroComponent.js';
import '../components/TrackingComponent.js';
import '../components/ServicesComponent.js';
import '../components/MapsComponent.js';
import '../components/FooterComponent.js';

(function () {
    const header = document.getElementById('site-header');
    let lastScrollY = window.pageYOffset;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.pageYOffset;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // rolando para baixo → esconde
            header.classList.add('hidden');
        } else {
            // rolando para cima → mostra
            header.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
    });
})();


