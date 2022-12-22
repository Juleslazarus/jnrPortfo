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

//! below is the logic for the experience cont section: 

//? functions that set the projects to active or inactive: 

//? these are the individual projects: 
let projContCnb = document.querySelector('.projContCnb'); 
let projContSwd = document.querySelector('.projContSwd'); 
let projContInsta = document.querySelector('.projContInsta'); 

//? these vars are the nav DOM elements for the exp section: 
let expNavLeft = document.querySelector('.expNavLeft'); 
let expNavMiddle = document.querySelector('.expNavMiddle'); 
let expNavRight = document.querySelector('.expNavRight'); 
let leftArrow = document.querySelector('.leftArrow'); 
let rightArrow = document.querySelector('.rightArrow'); 

//? vars we'll use to check which project is active and visible: 
let leftProjIsActive = true; //? this will make it so that the first project i want seen is visible 
let middleProjIsActive = false; 
let rightProjIsActive = false; 

//? these conditional statements setup the DOM depending on what is active
//? this was done this way to provide infinite scrolling of projects

function setLeftProjActive() {
        leftProjIsActive = true; 
        middleProjIsActive = false; 
        rightProjIsActive = false; 
        expNavLeft.style.background = 'blue'; 
        expNavMiddle.style.background = 'white'; 
        expNavRight.style.background = 'white'; 
        projContCnb.style.display = 'inline-block'; 
        projContSwd.style.display = 'none'; 
        projContInsta.style.display = 'none'; 
}
function setMiddleProjActive() {
    leftProjIsActive = false; 
    middleProjIsActive = true
    rightProjIsActive = false; 
    expNavLeft.style.background = 'white'; 
    expNavMiddle.style.background = 'blue'; 
    expNavRight.style.background = 'white'; 
    projContCnb.style.display = 'none'; 
    projContSwd.style.display = 'inline-block'; 
    projContInsta.style.display = 'none'; 
}
function setRightProjActive() {
    leftProjIsActive = false; 
    middleProjIsActive = false 
    rightProjIsActive = true; 
    expNavLeft.style.background = 'white'; 
    expNavMiddle.style.background = 'white'; 
    expNavRight.style.background = 'blue'; 
    projContCnb.style.display = 'none';
    projContSwd.style.display = 'none'; 
    projContInsta.style.display = 'inline-block'; 
}

//? event handlers for the arrow buttons LEFT/RIGHT: 

rightArrow.addEventListener('click', () => {
    if (leftProjIsActive === true) {
        setMiddleProjActive(); 
    } else if (middleProjIsActive === true) {
        setRightProjActive(); 
    } else if (rightProjIsActive === true) {
        setLeftProjActive(); 
    }
})

leftArrow.addEventListener('click', () => {
    if (leftProjIsActive === true) {
        setRightProjActive(); 
    } else if (middleProjIsActive === true) {
        setLeftProjActive(); 
    }else if (rightProjIsActive === true) {
        setMiddleProjActive(); 
    }
})

//? this is for if someone uses the nav bubbles to navigate experience 
//? instead of arrows: 

expNavLeft.addEventListener('click' , () => {
    setLeftProjActive(); 
})

expNavMiddle.addEventListener('click', () => {
    setMiddleProjActive(); 
})
expNavRight.addEventListener('click' , () => {
    setRightProjActive(); 
})