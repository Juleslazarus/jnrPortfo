// ! the code block below makes the mobile version of the nav menu 
//! work 



let navBtnMobile = document.querySelectorAll('#navBtn-mobile'); 
let mobileMenu = document.querySelector('#mobileMenu'); 
let menuBtn = document.querySelector('#menuBtn'); 
let closeBtn = document.querySelector('#closeBtn'); 

function closeMenu() {
    mobileMenu.style.height = '2em'; 
    mobileMenu.style.width = '4em'; 
    mobileMenu.style.right = '5%'
    mobileMenu.style.opacity = '100%'; 
}

menuBtn.addEventListener('click', () => {
    mobileMenu.style.height = '100vh'
    mobileMenu.style.width = '100%'; 
    mobileMenu.style.right = '0%'; 
    mobileMenu.style.opacity = '80%'; 
   
})

navBtnMobile.forEach((button) => {
    button.addEventListener('click', () => {
        mobileMenu.style.height = '2em'; 
        mobileMenu.style.width = '4em'; 
        mobileMenu.style.right = '5%'
        mobileMenu.style.opacity = '100%'; 
    } ) 
})

closeBtn.addEventListener('click', closeMenu); 
