// let valueDisplays = document.querySelectorAll(".num");
// let section=document.querySelector(".counter")

// function startcount(el){
//     let goal=el.dataset.goal;
//     let count =setInterval(()=>{
//         el.textContent++;
//         if(el.textContent==goal){
//             clearInterval(count)
//         }
//     },10)
// }


// startcount(document.querySelectorAll(".num"))




let nums=document.querySelectorAll(".nums .num");
let section=document.querySelector(".three")
let started=false;


window.onscroll=function(){
    if(window.scrollY>=section.offsetTop){
        if(!started){
            nums.forEach((num)=>startcount(num));
        }
        started=true;
    }
};

function startcount(el){
    let goal=el.dataset.goal;
    let count =setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    },2000 / goal)
}