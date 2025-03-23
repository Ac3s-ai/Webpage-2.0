const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', () => {
   const sections = document.querySelectorAll('section > .container');
    sections.forEach(section => {
        observer.observe(section);
    });


    const neonButtons = document.querySelectorAll('.neon-button');
    neonButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = button.classList.contains('blue') 
                ? '0 0 30px rgba(59, 130, 246, 0.7)'
                : '0 0 30px rgba(147, 51, 234, 0.7)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = button.classList.contains('blue')
                ? '0 0 20px rgba(59, 130, 246, 0.5)'
                : '0 0 20px rgba(147, 51, 234, 0.5)';
        });
    });


    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const image = card.querySelector('img');
            image.style.opacity = '0.7';
        });

        card.addEventListener('mouseout', () => {
            const image = card.querySelector('img');
            image.style.opacity = '0.5';
        });
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("start").addEventListener("click", function() {
  const target = document.getElementById("go");
  target.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
});
