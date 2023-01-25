import addingCars from "./addCar"

function allRace(){
    document.querySelector('.race').addEventListener('click', ()=>{
        let width = 0 
    setInterval(function(){
    width = +window.innerWidth - 120
    },1000)
        let m:number = 10

            let timer = setInterval(function(){
                m=m + 20
                // document.querySelectorAll<HTMLElement>(`.carColor${i}`).style.left=m+'px'
                if(m >= width)clearInterval(timer)
                
            },25) 
    })
}