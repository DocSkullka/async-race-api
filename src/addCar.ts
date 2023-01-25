export default function addingCars() {
    let i = 0
    let j = 0
    let k = 1
    document.querySelector('.create').addEventListener('click', () =>{
        document.querySelector('.garageCount').textContent = `GARAGE ${document.querySelectorAll('.blockCar').length + 1}`
        i++
        j++
        let road = `<div class="blockCar"><div class="settInfo"><button class="select${i}">Select</button><button class="remove">Remove</button><div class="namCar${i}"></div></div><div class="road"><div class="startStop${i}"><button class="start">A</button><button class="stop" disabled/>B</button></div><div class="way"> <img class="carImg carColor${i}" src="assets/car.png" alt="car"><img class="flag" src="assets/flag.png" alt="flag"></div></div></div>`
        let cars = document.createElement(`blockCar${i}`)
        cars.innerHTML = road 
        document.querySelector(".cars").appendChild(cars) 
        document.querySelector(`.namCar${i}`).textContent =  document.querySelector<HTMLInputElement>('.inpCreat').value
        document.querySelector<HTMLInputElement>(`.carColor${i}`).style.backgroundColor =  document.querySelector<HTMLInputElement>(".createColor").value
        if(j  > 7){
            document.querySelector<HTMLDivElement>(`blockCar${i}`).style.display = 'none'
        }
        
        if(j > 7){                       
            document.querySelector<HTMLSelectElement>('.next').disabled = false
            
        }                 
    })
    document.querySelector('.next').addEventListener('click', function(){   
        return j = document.querySelectorAll<HTMLDivElement>(`.blockCar`).length - (7*k)
    })
    document.querySelector('.next').addEventListener('click', function(){   
        document.querySelector<HTMLSelectElement>('.next').disabled = true 
        k++    
    })
    document.querySelector('.back').addEventListener('click', function(){   
        k--    
    })
}



