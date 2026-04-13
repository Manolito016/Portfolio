/**
 * ===== Portfolio JavaScript =====
 * Terminal lo-fi aesthetic interactions
 * @author Manolito016  @version 2.0.0
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
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
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
    cursorTrail.style.opacity = '0.45';
});

// ===== Terminal Code Typewriter =====
const terminalEl = document.getElementById('terminalCode');

const codeLines = [
    { text: '// vibe-driven development', cls: 't-cmt', delay: 0 },
    { text: '', delay: 80 },
    { text: 'const coder = {', cls: '', delay: 100,
      parts: [
        { text: 'const ', cls: 't-kw' },
        { text: 'coder', cls: 't-var' },
        { text: ' = {', cls: '' }
      ]
    },
    { text: "  name: 'Manolito016',", delay: 60,
      parts: [
        { text: '  name', cls: 't-key' },
        { text: ': ', cls: '' },
        { text: "'Manolito016'", cls: 't-str' },
        { text: ',', cls: '' }
      ]
    },
    { text: "  style: 'vibe-driven',", delay: 60,
      parts: [
        { text: '  style', cls: 't-key' },
        { text: ': ', cls: '' },
        { text: "'vibe-driven'", cls: 't-str' },
        { text: ',', cls: '' }
      ]
    },
    { text: "  stack: ['JS', 'TS', 'CSS'],", delay: 60,
      parts: [
        { text: '  stack', cls: 't-key' },
        { text: ': [', cls: '' },
        { text: "'JS'", cls: 't-str' },
        { text: ', ', cls: '' },
        { text: "'TS'", cls: 't-str' },
        { text: ', ', cls: '' },
        { text: "'CSS'", cls: 't-str' },
        { text: '],', cls: '' }
      ]
    },
    { text: "  hustle: false,", delay: 60,
      parts: [
        { text: '  hustle', cls: 't-key' },
        { text: ': ', cls: '' },
        { text: 'false', cls: 't-kw' },
        { text: ',', cls: '' }
      ]
    },
    { text: "  vibeLevel: Infinity,", delay: 60,
      parts: [
        { text: '  vibeLevel', cls: 't-key' },
        { text: ': ', cls: '' },
        { text: 'Infinity', cls: 't-num' },
        { text: ',', cls: '' }
      ]
    },
    { text: '', delay: 60 },
    { text: '  build() {', delay: 60,
      parts: [
        { text: '  ', cls: '' },
        { text: 'build', cls: 't-fn' },
        { text: '() {', cls: '' }
      ]
    },
    { text: "    return '✨ cool stuff';", delay: 60,
      parts: [
        { text: '    return ', cls: 't-kw' },
        { text: "'✨ cool stuff'", cls: 't-str' },
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
let totalDelay = 400;

function typeNextLine() {
    if (lineIndex >= codeLines.length) return;
    const line = codeLines[lineIndex];
    const div = document.createElement('div');
    div.appendChild(buildLine(line));
    terminalEl.appendChild(div);
    lineIndex++;
    totalDelay += line.delay || 80;
    setTimeout(typeNextLine, line.delay || 80);
}

setTimeout(typeNextLine, 800);

// ===== Role Typewriter =====
const roleTextEl = document.getElementById('roleText');
const roles = [
    'Web Developer 💻',
    'Building cool stuff ✨',
    'Learning every day 🌱',
    'JS/TS enthusiast 💛',
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
            roleTimeout = setTimeout(typeRole, 2200);
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
    roleTimeout = setTimeout(typeRole, isDeleting ? 45 : 70);
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
        navbar.style.borderBottomColor = 'rgba(57,211,83,0.12)';
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
    el.dataset.delay = i * 70;
});

// ===== Keyboard Shortcuts Easter Egg =====
const keyBuffer = [];
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

document.addEventListener('keydown', (e) => {
    keyBuffer.push(e.key);
    if (keyBuffer.length > KONAMI.length) keyBuffer.shift();
    if (keyBuffer.join(',') === KONAMI.join(',')) {
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => document.body.style.filter = '', 3000);
        console.log('%c🎮 KONAMI! Vibe mode activated.', 'color: #39d353; font-size: 14px; font-family: monospace;');
    }
});

// ===== Console Easter Egg =====
const styles = [
    'color: #39d353; font-size: 13px; font-family: monospace; line-height: 1.6',
    'color: #8b949e; font-size: 11px; font-family: monospace; line-height: 1.6',
    'color: #f0a832; font-size: 11px; font-family: monospace;'
];

console.log('%c\n  ╔══════════════════════════════╗\n  ║   hey fellow developer 👾   ║\n  ╚══════════════════════════════╝\n', styles[0]);
console.log('%c  checking out the source? we\'re vibing on the same frequency.\n', styles[1]);
console.log('%c  try: ↑ ↑ ↓ ↓ ← → ← → B A', styles[2]);