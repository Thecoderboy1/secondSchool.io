const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const bar1 = document.getElementById("bar-1")
const bar2 = document.getElementById("bar-2")
const bar3 = document.getElementById("bar-3")
 hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    bar2.classList.toggle("changePosotion2")
    bar1.classList.toggle("changePosotion1")
    bar3.classList.toggle("changePosotion3")

 })

 const anchorTags = navMenu.querySelectorAll('a');
 anchorTags.forEach(tag => {
  tag.addEventListener('click', function(event) {
    hamburger.classList.remove('active')
     navMenu.classList.remove('active')
     bar2.classList.remove("changePosotion2")
     bar1.classList.remove("changePosotion1")
     bar3.classList.remove("changePosotion3")
 
    event.preventDefault(); // Prevent the default link behavior
  });
});