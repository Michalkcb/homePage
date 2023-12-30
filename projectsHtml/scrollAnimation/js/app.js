let sections = document.querySelectorAll('section');

window.onscroll = () => {
    // Iteruj przez każdą sekcję
    sections.forEach(section => {
        // Pobierz aktualne położenie przewinięcia strony
        let top = window.scrollY;

        // Pobierz początkowe położenie aktualnej sekcji
        let offset = section.offsetTop - 150;

        // Pobierz wysokość aktualnej sekcji
        let height = section.offsetHeight;

        // Sprawdź, czy aktualna sekcja jest widoczna na ekranie
        if (top >= offset && top < height + offset) {
            section.classList.add('show-animate');
        }
        else {
            section.classList.remove('show-animate');

        }
    });
};