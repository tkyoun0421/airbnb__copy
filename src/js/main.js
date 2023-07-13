
const barEl = document.querySelector('.bar');
const userEl = document.querySelector('.user');

barEl.addEventListener('click', function(e){
    e.stopPropagation()
    if (!barEl.classList.contains('show')) {
        showUserMenu()
    } else {
        hideUserMenu()
    }
});

window.addEventListener('click', function(){
    hideUserMenu()
});
userEl.addEventListener('click', function(e){
    e.stopPropagation()
});

const hideUserMenu = () => {
    barEl.classList.remove('show')
}

const showUserMenu = () => {
    barEl.classList.add('show')
}