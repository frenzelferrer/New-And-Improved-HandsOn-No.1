// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';

    // Save theme preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
});

// Load theme preference on page load
window.addEventListener('load', () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Toggle Light Mode';
    }
});

// Add fade-in animation to sections on scroll
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

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effect to table rows
document.querySelectorAll('tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.transform = 'scale(1.02)';
        row.style.transition = 'transform 0.2s ease';
    });
    row.addEventListener('mouseleave', () => {
        row.style.transform = 'scale(1)';
    });
});

// Add click effect to styled elements
document.querySelectorAll('.styled-text, .bg-color, .bordered, .large-font, .custom-color').forEach(el => {
    el.addEventListener('click', () => {
        el.style.transform = 'scale(1.1)';
        setTimeout(() => {
            el.style.transform = 'scale(1)';
        }, 200);
    });
});

// Add typing effect to the main heading
const heading = document.querySelector('h1');
const text = heading.textContent;
heading.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 1000);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.width = '0%';
progressBar.style.height = '4px';
progressBar.style.background = 'linear-gradient(90deg, #070778, #25af75)';
progressBar.style.zIndex = '1000';
progressBar.style.transition = 'width 0.25s ease';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});
