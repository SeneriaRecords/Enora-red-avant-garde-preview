// Créer un observateur d'intersection
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si l'élément est visible dans la fenêtre du navigateur
        if (entry.isIntersecting) {
            // Ajouter la classe "active" pour démarrer l'animation
            entry.target.classList.add('active');
            // Arrêter d'observer cet élément une fois qu'il est visible
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5  // L'élément doit être à 50% visible pour être déclenché
});

// Observer chaque élément de la tracklist
document.querySelectorAll('.tracklist li').forEach(item => {
    observer.observe(item);
});

/*MES TRACKS À FAIRE TOURNER*/

// Sélectionne tous les liens "Écouter"
const buttons = document.querySelectorAll('.ecouter');

// Crée une variable audio qui sera réutilisée
let audio = new Audio();

buttons.forEach(button => {
    // Lorsque la souris entre dans le bouton
    button.addEventListener('mouseenter', function() {
        const audioSource = button.getAttribute('data-audio');
        
        // Change la source de l'audio et commence à jouer
        audio.src = audioSource;
        audio.play();
    });

    // Lorsque la souris quitte le bouton
    button.addEventListener('mouseleave', function() {
        // Arrête l'audio dès que la souris sort
        audio.pause();
        audio.currentTime = 0; // Reviens au début de l'audio
    });
});

/* LES FAIRE MARCHER DIRECT*/


const preloadAudio = (sources) => {
    sources.forEach(src => {
        const audio = new Audio(src);
        audio.load();
    });
};

const audioFiles = [
    'audio/track_dvar.mp3',
    'audio/track_pr.mp3',
    'audio/track_cnpp.mp3',
    'audio/track_tempo.mp3',
    'audio/track_gn.mp3',
    'audio/track_cav2.mp3'
];

preloadAudio(audioFiles);

const écouterLinks = document.querySelectorAll('.ecouter');

écouterLinks.forEach(link => {
    const audio = new Audio(link.href);
    audio.preload = 'auto'; // Force le préchargement de l'audio

    link.addEventListener('mouseover', () => {
        audio.play();
    });

    link.addEventListener('mouseout', () => {
        audio.pause();
        audio.currentTime = 0;
    });
});

