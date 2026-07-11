// ============================================
// Theme Toggle
// ============================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const html = document.documentElement;

// Check saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    html.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
});

// ============================================
// Mobile Menu
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Publication Filters (Category + Authorship)
// ============================================
const pubFilters = document.querySelectorAll('.pub-filter');
const authorshipBtns = document.querySelectorAll('.authorship-btn');
const pubCards = document.querySelectorAll('.pub-card');

let currentCategory = 'all';
let currentAuthorship = 'all';

function applyFilters() {
    pubCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardAuthor = card.getAttribute('data-author');

        const categoryMatch = currentCategory === 'all' || cardCategory === currentCategory;
        const authorMatch = currentAuthorship === 'all' || cardAuthor === currentAuthorship;

        if (categoryMatch && authorMatch) {
            card.style.display = '';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

pubFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        pubFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        currentCategory = filter.getAttribute('data-filter');
        applyFilters();
    });
});

authorshipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        authorshipBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentAuthorship = btn.getAttribute('data-authorship');
        applyFilters();
    });
});

// ============================================
// Scroll Reveal Animation
// ============================================
const revealElements = document.querySelectorAll('.section, .pub-card, .timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ============================================
// Current Year in Footer
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offset = 64;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
