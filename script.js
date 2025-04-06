/* 
    - addEventListener
    - target
    - Array
    - getElementBy / getElementsByTagName
    - parentNode / nodeName
    - classList
    - for loop
*/

var The_heading = document.getElementById('heading'),
    The_ul = document.getElementById("list"),
    The_Button  = document.getElementById("button"),
    The_li = document.getElementById("list").getElementsByTagName("li"),
    counter = 1;
/*
The_li[0].addEventListener("click",function(){
    The_heading.innerHTML = The_li[0].innerHTML;
}) ;   
*/

/*for (var i = 0; i < The_li.length; i++) {
    The_li[i].addEventListener("click",function(){
        The_heading.innerHTML = The_li[i].innerHTML;
    });
}*/
/******ORRRRRRRRRRRR*****************/
/*
for (var i = 0; i < The_li.length; i++) {

    The_li[i].addEventListener("click",active)

}


function active(){
    The_heading.innerHTML = this.innerHTML;
    for (var i = 0; i < The_li.length; i++) {
        
        The_li[i].classList.remove("active");
        
    }
    
    this.classList.add("active");
    
}

// Add New
The_Button.addEventListener("click",Add);

function Add() {
    The_ul.innerHTML += "<li> New item " + counter + "</li>";
    counter++;
}
*/

// Click on the ul
The_ul.addEventListener("click",active);

function active(e){
    // When click on li
    if(e.target.nodeName == "LI") {
        The_heading.innerHTML = e.target.innerHTML;
        for (var i = 0; i < e.target.parentNode.children.length; i++) {
            
            e.target.parentNode.children[i].classList.remove("active");
            
        }
        
        e.target.classList.add("active");
    
    }
}


// Add New
The_Button.addEventListener("click",Add);

function Add() {
    The_ul.innerHTML += "<li> New item " + counter + "</li>";
    counter++;
}


