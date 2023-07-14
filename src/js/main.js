
const barEl = document.querySelector('.bar')
const userEl = document.querySelector('.user')

barEl.addEventListener('click', function (e) {
    e.stopPropagation()
    !barEl.classList.contains('show') ? showUserMenu() : hideUserMenu();
})

window.addEventListener('click', function () {
    hideUserMenu()
})
userEl.addEventListener('click', function (e) {
    e.stopPropagation() // 이벤트 버블링 막는 것
})

const hideUserMenu = () => barEl.classList.remove('show')
const showUserMenu = () => barEl.classList.add('show')

// 카테고리 메뉴 생성
const categoryData = JSON.parse(JSON.stringify(categoryList))
const categoryEl = document.querySelector('.category')
let template = '';

for (let i = 0; i < categoryData.length; i++) {
    const div = document.createElement('div')

    template = `
    <button type="button">
    <img src=${categoryData[i].url}>
    <span>${categoryData[i].title}</span>
    </button>
    `
    div.classList.add('category-item')
    div.innerHTML = template
    categoryEl.appendChild(div)
}

window.addEventListener('load', () => categoryEl.childNodes[0].classList.add('active'))

// 카테고리 클릭 애니메이션
const categoriItemEls = [...document.querySelectorAll('.category-item')];

for (let i = 0; i < categoriItemEls.length; i++) {
    categoriItemEls[i].addEventListener('click', function (e) {
        for (let i = 0; i < categoriItemEls.length; i++) {
            categoriItemEls[i].classList.remove('active')
        }
        e.currentTarget.classList.add('active')
    });
}

// 스크롤 애니메이션
const categoryWrapEl = document.querySelector('.category-wrap')
const CHECK_SCROLL_DOWN = 1;

window.addEventListener('scroll', function () {
    window.scrollY > CHECK_SCROLL_DOWN ? checkClassCategory() : RemoveClassToCategory()
})

const checkClassCategory = () => categoryWrapEl.classList.contains('on') ? 'return' : AddClassToCategory()
const AddClassToCategory = () => categoryWrapEl.classList.add('on')
const RemoveClassToCategory = () => categoryWrapEl.classList.remove('on')

// 룸 정보
const roomData = JSON.parse(JSON.stringify(roomList))
const roomInfoEl = document.querySelector('.room-info')

for (let i = 0; i < 20; i++) {
    const div = document.createElement('div')

    template = `
    <a href="javascript:void(0)">
        <div class="room-img">
            <img src=${roomData[i].url} />
            <div class="room-like">
                <button type="button"><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="room-btn">
                <button type="button">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
            <ul class="room-dot">
                <li class="dot on"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
            </ul>
        </div>
        <div class="room-text">
            <p class="room-location">${roomData[i].location}<span class="room-score"><i class="fa-solid fa-star"></i><span>${roomData[i].score}</span></span></p>
            <p class="room-distance">${roomData[i].distance}</p>
            <p class="room-distance">${roomData[i].date}</p>
            <p class="room-price"><strong>${roomData[i].price}</strong> /박</p>        
        </div>
    </a>    
    `;

    div.classList.add('room-item')
    div.innerHTML = template
    roomInfoEl.appendChild(div)
}

window.addEventListener('scroll', getRoomData)
let roomItemValue = 0;

function getRoomData() {
    const roomItemEls = [...document.querySelectorAll('.room-item')]
    const winScrollValue = Math.floor((window.scrollY + window.innerHeight) * 1.002)
    const bodyScrollHeight = Math.floor(document.body.scrollHeight)
    const roomDataLength = roomData.length
    let getDataNum = parseInt(roomItemValue + 20)


    if (winScrollValue >= bodyScrollHeight) {
        if (roomDataLength >= roomItemEls.length) {
            for (let i = roomItemValue; i < getDataNum; i++) {
                const div = document.createElement('div')
                roomItemValue = parseInt(roomItemValue + 1)

                template = `
                <a href="javascript:void(0)">
                    <div class="room-img">
                        <img src=${roomData[i].url} />
                        <div class="room-like">
                            <button type="button"><i class="fa-solid fa-heart"></i></i></button>
                        </div>
                        <div class="room-btn">
                            <button type="button">
                                <i class="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                        <ul class="room-dot">
                            <li class="dot"></li>
                            <li class="dot"></li>
                            <li class="dot"></li>
                            <li class="dot"></li>
                            <li class="dot"></li>
                        </ul>
                    </div>
                    <div class="room-text">
                        <p class="room-location">${roomData[i].location}<span class="room-score"><i class="fa-solid fa-star"></i><span>${roomData[i].score}</span></span></p>
                        <p class="room-distance">${roomData[i].distance}</p>
                        <p class="room-distance">${roomData[i].date}</p>
                        <p class="room-price"><strong>${roomData[i].price}</strong> /박</p>        
                    </div>                    
                </a>    
                `;

                div.classList.add('room-item')
                div.innerHTML = template
                roomInfoEl.appendChild(div)
            }
        }
    }
}
