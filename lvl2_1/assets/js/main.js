
const home = document.getElementById("navHome");

document.getElementById("navChange").addEventListener("click", (event)=>{
    let targeti = event.target;
    home.classList.toggle("togglelist")
})