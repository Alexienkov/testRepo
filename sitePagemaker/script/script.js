function clickRu() {document.location = '../index.html'}
function clickEn() {document.location = 'ru/index.html'}

let aboutButton = document.querySelector('.about-button');
let projectButton = document.querySelector('.project-button')
let techButton = document.querySelector('.tech-button')
let tech = document.querySelector('.tech');
let letter = document.querySelector('.letter');
let project = document.querySelector('.project')
let body = document.querySelector('.body');
let header = document.getElementById('header');
let closeButton = document.querySelectorAll('.close-wrap');

aboutButton.onclick = function(){
    project.classList.remove('active');
    tech.classList.remove('active');
    setTimeout(() => {
        letter.classList.toggle('active');
    }, 1200);
    body.classList.toggle('lock');
    header.classList.toggle('header');
}
projectButton.onclick = function(){
    project.classList.toggle('active');
    body.classList.toggle('lock');
    header.classList.toggle('header');
}
techButton.onclick = function(){
    tech.classList.toggle('active');
    body.classList.toggle('lock');
    header.classList.toggle('header');
}
closeButton.forEach(element => {
    element.onclick = function () {
        letter.classList.remove('active');
        project.classList.remove('active');
        tech.classList.remove('active');
        body.classList.remove('lock');
        header.classList.remove('header');
}});