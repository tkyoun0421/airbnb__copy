
const barEl = document.querySelector('.bar');

barEl.addEventListener('click', function(){
    if (!barEl.classList.contains('show')) {
        barEl.classList.add('show');
    } else {
        barEl.classList.remove('show');
    }
});