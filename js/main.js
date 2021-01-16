'use strict';


const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

//Navbar 투명하게 만들기.
//애로우함수 -> 아무런 인자 받지 않고 실행
document.addEventListener('scroll', () => {
    //console.log(window.scrollY); // 스크롤 값 표시
    //console.log('navbar height : ' + navbarHeight); //네비바 높이 표시
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//navbar의 메뉴 선택시, Scrolling되어 화면 이동.
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if(link == null){
        return;
    }
    //console.log(event.target.dataset.link);
    scrollIntoView(link);
});

//contact 버튼 선택시, Scrolling되어 화면 이동.
const contactBtn = document.querySelector('.home_contact');
contactBtn.addEventListener('click', (event) =>{
    scrollIntoView('#contact');
});

// Scrolling 할때마다 상단 home transparent 하게 만들기.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    // 스크롤 내릴때마다 1 -> 0.5 -> 0 -> -1 ...
    // console.log(1 - window.scrollY / homeHeight); 
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


//스크롤 함수
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior : "smooth"} );
}

