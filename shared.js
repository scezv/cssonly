var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button')
var modal = document.querySelector('.modal')
var cancelButton = document.querySelector('.modal__actions button')
var sideBar = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')
//console.dir(selectPlanButton)
// console.dir(backdrop)
//  modal.style.display = 'block'

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

if (cancelButton) {
    cancelButton.addEventListener('click', function () {
        modal.classList.remove('open');
        backdrop.classList.remove('open');
    });
}

backdrop.addEventListener('click', function () {
    if (modal) {
        modal.classList.remove('open');

    } backdrop.classList.remove('open');
    mobileNav.classList.remove('open');
});

sideBar.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});