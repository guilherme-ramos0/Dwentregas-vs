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

document.addEventListener('DOMContentLoaded', () => {
    // captura todos os links do menu
    const links = Array.from(document.querySelectorAll('.menu a'));

    // mapeia cada link para a seção correspondente
    const sections = links
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    // configura o observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.id;
                const link = document.querySelector(
                    `.menu a[href="#${id}"]`
                );
                if (entry.isIntersecting) {
                    links.forEach((l) => l.classList.remove('active'));
                    link && link.classList.add('active');
                }
            });
        },
        {
            rootMargin: '-50% 0px -50% 0px', // dispara quando o meio da seção alcança o meio da viewport
            threshold: 0,
        }
    );

    // observa cada seção
    sections.forEach((section) => observer.observe(section));
});
