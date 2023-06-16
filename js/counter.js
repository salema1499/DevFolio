let valueDisplays = document.querySelectorAll(".num");
let section=document.querySelector(".counter")

function startcount(el){
    let goal=el.dataset.goal;
    let count =setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count)
        }
    },10)
}


startcount(document.querySelectorAll(".num"))