const idiomaActual = document.getElementById('idioma');
const titulo = document.getElementById('titulo_descripcion');
const descripcion = document.getElementById('descripcion');
const skill1 = document.getElementById('skill1');
const skill2 = document.getElementById('skill2');
const dipyexp = document.getElementById('dye');
const projectsTitle = document.getElementById('projects_title');

let lang = 'es';

const texts = {
    es: {
        titulo: 'DESCRIPCION',
        descripcion: 'Soy ingeniero electrónico, desarrollador de software y desarrollador web full stack con experiencia en la creación de páginas web responsivas, estáticas y dinámicas que ayudan a las empresas a mostrar sus productos y retribuir su inversión en TI',
        skill1: 'C++ | C# | Python | JavaScript',
        skill2: 'mySQL | PostgreSQL',
        dipyexp: 'CERTIFICACIONES Y EXPERIENCIAS',
        projectsTitle: 'PROYECTOS',
        langBtn: 'ENGLISH'
    },
    en: {
        titulo: 'DESCRIPTION',
        descripcion: 'I am an electronic engineer, software developer and full stack web developer with experience creating responsive, static and dynamic websites that help businesses showcase their products and maximize their IT investment',
        skill1: 'C++ | C# | Python | JavaScript',
        skill2: 'mySQL | PostgreSQL',
        dipyexp: 'CERTIFICATIONS AND EXPERIENCES',
        projectsTitle: 'PROJECTS',
        langBtn: 'ESPAÑOL'
    }
};

function updateLanguage(lang) {
    const t = texts[lang];
    titulo.textContent = t.titulo;
    descripcion.textContent = t.descripcion;
    skill1.textContent = t.skill1;
    skill2.textContent = t.skill2;
    dipyexp.textContent = t.dipyexp;
    projectsTitle.textContent = t.projectsTitle;
    idiomaActual.textContent = t.langBtn;
}

idiomaActual.addEventListener('click', function () {
    lang = lang === 'es' ? 'en' : 'es';
    updateLanguage(lang);
});

// Nav toggle mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// Certificate modal
const modalOverlay = document.getElementById('modalOverlay');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.certificates-track img').forEach(img => {
    img.addEventListener('click', function () {
        modalImage.src = this.src;
        modalImage.alt = this.alt;
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project-card, .hero-left, .hero-right').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
