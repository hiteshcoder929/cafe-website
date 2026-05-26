// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
});
// Close menu on link click (mobile)
document.querySelectorAll('.nav-comp .comp').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
    });
});
// Sticky navbar shadow
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});