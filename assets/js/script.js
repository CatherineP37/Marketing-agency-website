let mobileMenu = document.getElementById('mobileMenu');
let opened = document.getElementById('opened');
let closed = document.getElementById('closed');
const questions = document.querySelectorAll('.question-container');

questions.forEach(question => {
    question.addEventListener('click', e => {
        let questionButton = document.getElementById('questionButton');
        question.classList.toggle('open');
        if(questionButton.textContent === '+') {
            questionButton.textContent = '-';
        } else {
            questionButton.textContent = '+';
        }
    })
})    

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