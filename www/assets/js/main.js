// ═══════════════════════════════════════════════════
//  MAYA ARÉVALO — Portfolio
//  main.js
// ═══════════════════════════════════════════════════

// Navbar: añadir sombra al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }
});