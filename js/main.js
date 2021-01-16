'use strict';


const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

//Navbar 투명하게 만들기.
//애로우함수 -> 아무런 인자 받지 않고 실행
document.addEventListener('scroll', ()=>{
    console.log(window.scrollY); // 스크롤 값 표시
    console.log('navbar height : ' + navbarHeight); //네비바 높이 표시
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});