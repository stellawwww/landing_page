// This file serves as notes 

// build the nav
// we want to create <li><a class="menu__link" href="#${sectionID}"> ... </a></li>

const section_names = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];
const sections_array = Array.from(sections);

for (const section_name of section_names){
    const li= document.createElement("li");
    li.classList.add('menu__link');
    a_tag = document.createElement("a");
    a_tag.innerHTML=section_name; 
    li.appendChild(a_tag);
    navigation.appendChild(li);  
}


const sections=Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
let numberOfListItems = sections.length;

function createListItem() {
    for (section of sections){
        sectionName = section.getAttribute('data-nav');
        sectionLink= section.getAttribute('id');
        listItem = document.createElement('li');
        listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;
        menu.appendChild(listItem);
    }
}


// Add class 'active' to section when near top of viewport
function Check_viewport(element){
    const elementPosition= element.getBoundingClientRect();
    if (elementPosition.top>=0){
        return true;
    } //means in the viewport
        
}

function add_class_active(){
    for (const section of sections_array){
        if (Check_viewport(section) ==true){
            // check if the currenrt section has active class as its classname
            if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');}
        }
        else{ //if the section isn't in current viewport
            section.classList.remove('your-active-class');
        }
    }
}


// Method 2
// Add class 'active' to section when near top of viewport
function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }


function add_class_active(){
    for (const section of sections_array){
        if (elementInViewport(section) ){
            // check if the currenrt section has active class as its classname
            if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');}
        }
        else{ //if the section isn't in current viewport
            section.classList.remove('your-active-class');
        }
    }
}

//rework on the method
function Check_viewport(element){
    const elementPosition= element.getBoundingClientRect();
    if (elementPosition.top>=0){
        return true;
    } //means in the viewport
        
}

function add_class_active(){
    for (const section of sections_array){
        if (Check_viewport(section) ==true){
            // check if the currenrt section has active class as its classname
            if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');}
        }
        else{ //if the section isn't in current viewport
            section.classList.remove('your-active-class');
        }
    }
}

function sectionActivation(){
    for (const section of sections_array){
        section.classList.remove('your-active-class');
        if (Check_viewport(section)){
            section.classList.add('your-active-class')

        }
    }
}


// answer online
const offset=(section) =>{
    return Math.floor(section.getBoundingClientRect().top);
}

const removeActive = (section) => {
    section.classList.remove('your-active-class');
}

const addActive = (condition, section) =>{
    if (condition){
        section.classList.add('your-active-class');
    };
}

const sectionActivation = () =>{
    sections.forEach(section =>{
        const elementOffset = offset(section);

        inviewport=() =>elementOffset <150 && elementOffset>= -150;
        removeActive(section);
        addActive(inviewport(),section);
    });
};
window.addEventListener('scroll',sectionActivation );

