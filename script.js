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
let projCont2Due = document.querySelector('.projCont2Due'); 

//? these vars are the nav DOM elements for the exp section: 
let expNavOne = document.querySelector('.expNavOne'); 
let expNavTwo = document.querySelector('.expNavTwo'); 
let expNavThree = document.querySelector('.expNavThree'); 
let expNavFour = document.querySelector('.expNavFour');
let leftArrow = document.querySelector('.leftArrow'); 
let rightArrow = document.querySelector('.rightArrow'); 

//? vars we'll use to check which project is active and visible: 
let cnbProjIsActive = true; //? this will make it so that the first project i want seen is visible 
let swdProjIsActive = false; 
let instaProjIsActive = false; 
let todoProjIsActive = false; 

//? these conditional statements setup the DOM depending on what is active
//? this was done this way to provide infinite scrolling of projects

function setCNBProjActive() {
        cnbProjIsActive = true; 
        swdProjIsActive = false; 
        instaProjIsActive = false; 
        todoProjIsActive = false; 
        expNavOne.style.background = 'blue'; 
        expNavTwo.style.background = 'white'; 
        expNavThree.style.background = 'white'; 
        expNavFour.style.background = 'white'; 
        projContCnb.style.display = 'inline-block'; 
        projContSwd.style.display = 'none'; 
        projContInsta.style.display = 'none'; 
        projCont2Due.style.display = 'none'; 
}
function setSWDProjActive() {
    cnbProjIsActive = false; 
    swdProjIsActive = true
    instaProjIsActive = false; 
    todoProjIsActive = false; 
    expNavOne.style.background = 'white'; 
    expNavTwo.style.background = 'blue'; 
    expNavThree.style.background = 'white'; 
    expNavFour.style.background = 'white';
    projContCnb.style.display = 'none'; 
    projContSwd.style.display = 'inline-block'; 
    projContInsta.style.display = 'none'; 
    projCont2Due.style.display = 'none'; 
}
function setInstaProjActive() {
    cnbProjIsActive = false; 
    swdProjIsActive = false 
    instaProjIsActive = true; 
    todoProjIsActive = false; 
    expNavOne.style.background = 'white'; 
    expNavTwo.style.background = 'white'; 
    expNavThree.style.background = 'blue'; 
    expNavFour.style.background = 'white';
    projContCnb.style.display = 'none';
    projContSwd.style.display = 'none'; 
    projContInsta.style.display = 'inline-block'; 
    projCont2Due.style.display = 'none'; 
}
function setTodoProjActive() {
    cnbProjIsActive = false; 
    swdProjIsActive = false; 
    instaProjIsActive = false; 
    todoProjIsActive = true; 
    expNavOne.style.background = 'white'; 
    expNavTwo.style.background = 'white'; 
    expNavThree.style.background = 'white'; 
    expNavFour.style.background = 'blue'; 
    projContCnb.style.display = 'none'; 
    projContSwd.style.display = 'none'; 
    projContInsta.style.display = 'none'; 
    projCont2Due.style.display = 'inline-block'; 
}

//? event handlers for the arrow buttons LEFT/RIGHT: 

rightArrow.addEventListener('click', () => {
    if (cnbProjIsActive === true) {
        setSWDProjActive(); 
    } else if (swdProjIsActive === true) {
        setInstaProjActive(); 
    } else if (instaProjIsActive === true) {
        setTodoProjActive(); 
    } else if (todoProjIsActive === true) {
        setCNBProjActive(); 
    }
})

leftArrow.addEventListener('click', () => {
    if (cnbProjIsActive === true) {
        setTodoProjActive(); 
    } else if (swdProjIsActive === true) {
        setCNBProjActive(); 
    }else if (instaProjIsActive === true) {
        setSWDProjActive(); 
    } else if (todoProjIsActive === true) {
        setInstaProjActive(); 
    }
})

//? this is for if someone uses the nav bubbles to navigate experience 
//? instead of arrows: 

expNavOne.addEventListener('click' , () => {
    setCNBProjActive(); 
})

expNavTwo.addEventListener('click', () => {
    setSWDProjActive(); 
})
expNavThree.addEventListener('click' , () => {
    setInstaProjActive(); 
})