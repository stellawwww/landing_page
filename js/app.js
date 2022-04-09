/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navigation = document.getElementById('navbar__list');
// select all section elements, it returns a Noelist
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



// build the nav
const sections_array = Array.from(sections);

function createNavBar(){
for (const section of sections_array){
    sectionName = section.getAttribute('data-nav');
    sectionLink = section.getAttribute('id');
    li= document.createElement("li");
    // li.classList.add('menu__link');
    li.classList.add('navbar__menu');

    const a_tag = document.createElement("a");
    a_tag.href = `#${sectionLink}`;
    a_tag.innerHTML=sectionName; 
    console.log(a_tag);
    li.appendChild(a_tag);
    navigation.appendChild(li);  
    // scroll to section when link is clicked
    anchorScroll(li, section);
}}



// Add class 'active' to section when near top of viewport


// I first used below as the function to check viewport, but after reading Udacity Answer https://knowledge.udacity.com/questions/778965
// I think the way listed there makes more sense (could be use in all cases)

const  Check_viewport= function (elem) {
	const distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

// function Check_viewport(element){
//     const elementPosition= element.getBoundingClientRect();
//     if (elementPosition.top>=0){
//         return true;
//     } ;//means in the viewport
        
// }



function sectionActivation(){
    for (const section of sections_array){
        section.classList.remove('your-active-class');
        if (Check_viewport(section)){
            section.classList.add('your-active-class');

        };
    }
}




// Scroll to anchor ID using scrollTO event

// Smooth Scrolling
// sections.setAttribute('scroll-behavior','smooth');
function anchorScroll(navbar, section){
    navbar.addEventListener("click", function(event){
        event.preventDefault();
        section.scrollIntoView({behavior:"smooth"})});
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu and add href to tags

createNavBar();


// Set sections as active
//we want to run the function whenever we scroll 
window.addEventListener('scroll', sectionActivation);

