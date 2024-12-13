// Variables pour le scroll
let lastScrollTop = 0;
const nav = document.querySelector('nav');
const scrollThreshold = 10;

// Gestion du scroll pour la navigation
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Vérifie si le défilement dépasse le seuil
    if (Math.abs(lastScrollTop - scrollTop) <= scrollThreshold)
        return;
        
    // Ajout d'une classe pour l'opacité de la nav
    if (scrollTop > 100) {
        nav.style.backgroundColor = 'rgba(42, 82, 152, 1)';
    } else {
        nav.style.backgroundColor = 'rgba(42, 82, 152, 0.95)';
    }
    
    // Gestion de l'affichage/masquage de la nav
    if (scrollTop > lastScrollTop && scrollTop > nav.offsetHeight) {
        // Défilement vers le bas
        nav.style.transform = 'translateY(-100%)';
        nav.style.transition = 'transform 0.3s ease-in-out';
    } else {
        // Défilement vers le haut
        nav.style.transform = 'translateY(0)';
        nav.style.transition = 'transform 0.3s ease-in-out';
    }
    
    lastScrollTop = scrollTop;
});

// Reset de la position de la nav quand on est en haut de la page
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        nav.style.transform = 'translateY(0)';
        nav.style.backgroundColor = 'rgba(42, 82, 152, 0.95)';
    }
});

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulaire de contact avec envoi d'email
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Création du corps du message avec formatage
    const mailBody = `Message de : ${name}
Email : ${email}

Message :
${message}`;
    
    // Création du lien mailto
    const mailtoLink = `mailto:Levilo97@outlook.com?subject=Contact depuis le Portfolio&body=${encodeURIComponent(mailBody)}`;
    
    // Ouvrir le client mail
    window.location.href = mailtoLink;
    
    // Réinitialiser le formulaire
    this.reset();
    
    // Message de confirmation
    alert('Message envoyé');
});

// Animation des cartes de compétences au scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer pour les cartes de compétences
document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    observer.observe(card);
});

// Observer pour les projets
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    observer.observe(card);
});

// Animation des icônes techniques
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2) rotate(360deg)';
        this.style.transition = 'transform 0.5s';
    });

    icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) rotate(0)';
    });
});

// Animation du texte d'en-tête au chargement
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.header-title');
    const subtitle = document.querySelector('.header-subtitle');
    
    title.style.opacity = '0';
    subtitle.style.opacity = '0';
    
    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
        subtitle.style.opacity = '1';
    }, 800);
});

// Effet de parallaxe pour le header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    header.style.backgroundPositionY = scrolled * 0.5 + 'px';
});