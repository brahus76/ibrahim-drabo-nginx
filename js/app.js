/* ==================== EMAILJS INITIALIZATION ==================== */
(function(){
    emailjs.init("R113-sKhMz_pDFdKL");
})();

/* ==================== FORMULAIRE DE CONTACT ==================== */
const contactForm = document.getElementById("contact-form");
const statusElement = document.getElementById("status");

if (contactForm && statusElement) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Désactiver le bouton pendant l'envoi
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        emailjs.sendForm(
            "service_kurpvof",
            "template_amrhs2n",
            this
        ).then(function() {
            // Succès
            statusElement.innerText = "✅ Message envoyé avec succès !";
            statusElement.style.color = "#28a745";
            statusElement.style.background = "rgba(40, 167, 69, 0.1)";
            statusElement.style.padding = "15px";
            statusElement.style.borderRadius = "8px";
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Faire disparaître après 5 secondes
            setTimeout(() => {
                statusElement.classList.add('fade-out');
                setTimeout(() => {
                    statusElement.innerText = "";
                    statusElement.style.background = "transparent";
                    statusElement.classList.remove('fade-out');
                }, 1000);
            }, 5000);
            
        }, function(error) {
            // Erreur
            statusElement.innerText = "❌ Erreur lors de l'envoi. Veuillez réessayer.";
            statusElement.style.color = "#dc3545";
            statusElement.style.background = "rgba(220, 53, 69, 0.1)";
            statusElement.style.padding = "15px";
            statusElement.style.borderRadius = "8px";
            console.error('Erreur EmailJS:', error);
            
            // Faire disparaître après 5 secondes
            setTimeout(() => {
                statusElement.classList.add('fade-out');
                setTimeout(() => {
                    statusElement.innerText = "";
                    statusElement.style.background = "transparent";
                    statusElement.classList.remove('fade-out');
                }, 1000);
            }, 5000);
            
        }).finally(() => {
            // Réactiver le bouton
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
}

/* ==================== MENU HAMBURGER ==================== */
const hamburger = document.getElementById('hamburger');
const headerNav = document.getElementById('headerNav');
const body = document.body;

if (hamburger && headerNav) {
    // Toggle du menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        headerNav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Fermer le menu quand on clique sur un lien
    const menuLinks = document.querySelectorAll('.header-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            headerNav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Fermer le menu quand on clique en dehors
    headerNav.addEventListener('click', (e) => {
        if (e.target === headerNav || e.target.classList.contains('header-nav')) {
            hamburger.classList.remove('active');
            headerNav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Fermer le menu avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && headerNav.classList.contains('active')) {
            hamburger.classList.remove('active');
            headerNav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#' || targetId === '#accueil') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/* ==================== HEADER SCROLL EFFECT ==================== */
let lastScroll = 0;
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Ajouter une ombre plus prononcée au scroll
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

/* ==================== ANIMATIONS AU SCROLL ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les sections pour les animer au scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});

/* ==================== CONSOLE MESSAGE ==================== */
console.log('%c👨‍💻 Portfolio Ibrahim DRABO', 'color: #0b0b38; font-size: 20px; font-weight: bold;');
console.log('%c✨ Développé avec passion au Burkina Faso 🇧🇫', 'color: #1a1a5a; font-size: 14px;');

/* ==================== GESTION DES NOTIFICATIONS ==================== */
window.onload = function() {
    const notif = document.getElementById('notification');
    if (notif) {
        setTimeout(() => {
            notif.classList.add('fade-out');
            setTimeout(() => notif.remove(), 1000);
        }, 5000);
    }
};