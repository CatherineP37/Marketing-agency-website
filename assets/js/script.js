let mobileMenu = document.getElementById('mobileMenu');
let opened = document.getElementById('opened');
let closed = document.getElementById('closed');

function openMobileMenu() {    
    mobileMenu.style.display = "flex";
    mobileMenu.style.flexDirection = "column";
    mobileMenu.style.gap = "2px";
    closed.style.display = "none";
    opened.style.display = "block";
}

function closeMobileMenu() {
    mobileMenu.style.display = "none";
    closed.style.display = "block";
    opened.style.display = "none";
}