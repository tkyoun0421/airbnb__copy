
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
    e.stopPropagation() // 이벤트 버블링 막는 것
});

const hideUserMenu = () => barEl.classList.remove('show');
const showUserMenu = () => barEl.classList.add('show');

// 카테고리 메뉴 생성
const categoryData = JSON.parse(JSON.stringify(categoryList));
const categoryEl = document.querySelector('.category');
let template = '';

for(let i = 0; i < categoryData.length; i++) {
    const div = document.createElement('div');

    template = `
    <button type="button">
        <img src=${categoryData[i].url}>
        <span>${categoryData[i].title}</span>
    </button>
    `
    div.classList.add('category-item');
    div.innerHTML = template;
    categoryEl.appendChild(div);
}

// 스크롤 애니메이션
const categoryWrapEl = document.querySelector('.category-wrap');
const CHECK_SCROLL_VALUE = 1;

window.addEventListener('scroll', function(){
    if(window.scrollY > CHECK_SCROLL_VALUE) {
        AddClassToCategory()
    } else {
        RemoveClassToCategory()
    }
});

const AddClassToCategory = () => categoryWrapEl.classList.add('on');
const RemoveClassToCategory = () => categoryWrapEl.classList.remove('on');