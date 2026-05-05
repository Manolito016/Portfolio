/**
 * ===== Portfolio JavaScript =====
 * Modern professional interactions
 * @author Manolito016  @version 3.0.0
 */

// ===== Custom Cursor =====
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');
let mouseX = -100, mouseY = -100;
let trailX = -100, trailY = -100;
let cursorActive = false;
let rafId = null;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    if (!cursorActive) {
        cursorActive = true;
        animateTrail();
    }
});

// Smooth trail
function animateTrail() {
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';
    rafId = requestAnimationFrame(animateTrail);
}

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorTrail.style.opacity = '0';
    cursorActive = false;
    if (rafId) cancelAnimationFrame(rafId);
});
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorTrail.style.opacity = '0.3';
});

// ===== Terminal Code Typewriter =====
const terminalEl = document.getElementById('terminalCode');

const codeLines = [
    { text: '// system initialization', cls: 't-cmt', delay: 0 },
    { text: '', delay: 80 },
    { text: 'const engineer = {', cls: '', delay: 100,
      parts: [
        { text: 'const ', cls: 't-kw' },
        { text: 'engineer', cls: 't-var' },
        { text: ' = {', cls: '' }
      ]
    },
    { text: "  name: 'Manolito Almaden Jr.',", delay: 60,
      parts: [
        { text: '  name', cls: 't-key' },
        { text: ': ', cls: '' },
        { text: "'Manolito Almaden Jr.'", cls: 't-str' },
        { text: ',', cls: '' }
      ]
    },
    { text: "  role: 'Software Engineer',", delay: 60,
      parts: [
        { text: '  role', cls: 't-key' },
        { text: ': ', cls: '' },
        { text: "'Software Engineer'", cls: 't-str' },
        { text: ',', cls: '' }
      ]
    },
    { text: "  stack: ['React', 'TypeScript', 'Node'],", delay: 60,
      parts: [
        { text: '  stack', cls: 't-key' },
        { text: ': [', cls: '' },
        { text: "'React'", cls: 't-str' },
        { text: ', ', cls: '' },
        { text: "'TypeScript'", cls: 't-str' },
        { text: ', ', cls: '' },
        { text: "'Node'", cls: 't-str' },
        { text: '],', cls: '' }
      ]
    },
    { text: '  solve(problem: string) {', delay: 60,
      parts: [
        { text: '  ', cls: '' },
        { text: 'solve', cls: 't-fn' },
        { text: '(problem: string) {', cls: '' }
      ]
    },
    { text: "    return `Elegant solution for ${problem}`;", delay: 60,
      parts: [
        { text: '    return ', cls: 't-kw' },
        { text: '`Elegant solution for ${problem}`', cls: 't-str' },
        { text: ';', cls: '' }
      ]
    },
    { text: '  }', delay: 60 },
    { text: '};', delay: 60 },
];

function buildLine(line) {
    if (!line.parts) {
        const span = document.createElement('span');
        span.textContent = line.text;
        if (line.cls) span.className = line.cls;
        return span;
    }
    const frag = document.createDocumentFragment();
    line.parts.forEach(p => {
        const s = document.createElement('span');
        s.textContent = p.text;
        if (p.cls) s.className = p.cls;
        frag.appendChild(s);
    });
    return frag;
}

let lineIndex = 0;

function typeNextLine() {
    if (lineIndex >= codeLines.length) return;
    const line = codeLines[lineIndex];
    const div = document.createElement('div');
    div.appendChild(buildLine(line));
    terminalEl.appendChild(div);
    lineIndex++;
    setTimeout(typeNextLine, line.delay || 70);
}

setTimeout(typeNextLine, 1200);

// ===== Role Typewriter =====
const roleTextEl = document.getElementById('roleText');
const roles = [
    'Full-Stack Software Engineer 💻',
    'Building Scalable Web Apps 🚀',
    'System Architect & Strategist 🏗️',
    'TypeScript Enthusiast 💙',
];
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
let roleTimeout;
let roleActive = true;

function typeRole() {
    if (!roleActive) return;
    const current = roles[roleIdx];
    if (!isDeleting) {
        roleTextEl.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
            isDeleting = true;
            roleTimeout = setTimeout(typeRole, 2500);
            return;
        }
    } else {
        roleTextEl.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
        }
    }
    roleTimeout = setTimeout(typeRole, isDeleting ? 30 : 60);
}

// Cleanup on page hide to prevent dangling timeouts
window.addEventListener('beforeunload', () => {
    roleActive = false;
    clearTimeout(roleTimeout);
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        roleActive = false;
        clearTimeout(roleTimeout);
    } else {
        roleActive = true;
        typeRole();
    }
});

setTimeout(typeRole, 1000);

// ===== Mobile Navigation =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'translateY(7px) rotate(45deg)' : '';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '';
        spans[2].style.transform = navLinks.classList.contains('active') ? 'translateY(-7px) rotate(-45deg)' : '';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        });
    });
}

// ===== Active Nav Highlight =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (!navLink) return;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ===== Navbar on Scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.style.borderBottomColor = 'rgba(59, 130, 246, 0.2)';
    } else {
        navbar.style.borderBottomColor = '';
    }
}, { passive: true });

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Intersection Observer — Scroll Reveal =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
            setTimeout(() => el.classList.add('visible'), delay);
            revealObserver.unobserve(el);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.about-card, .stack-item, .project-item, .cert-card').forEach(el => {
    revealObserver.observe(el);
});

// Stagger stack items
document.querySelectorAll('.stack-item').forEach((el, i) => {
    el.dataset.delay = i * 50;
});

// ===== Console Easter Egg =====
const styles = [
    'color: #3b82f6; font-size: 13px; font-family: sans-serif; font-weight: bold;',
    'color: #94a3b8; font-size: 11px; font-family: sans-serif;'
];

console.log('%c\n  ╔══════════════════════════════╗\n  ║   System Profile Loaded     ║\n  ╚══════════════════════════════╝\n', styles[0]);
console.log('%c  Always looking for high-impact opportunities.\n', styles[1]);
