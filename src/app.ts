import './style.scss'



    var i = 1
    let road = `<div class="blockCar"><div class="settInfo"><button class="select">Select</button><button class="remove">Remove</button><div class="namCar">Volga</div></div><div class="road"><div class="startStop"><button class="start">A</button><button class="stop" disabled/>B</button></div><div class="way"> <img class="carImg" src="assets/car.png" alt="car"><img class="flag" src="/assets/flag.png" alt="flag"></div></div></div>`
    
    
    document.querySelector(".cars").innerHTML = road
    
    document.querySelector('.start').addEventListener('click', function() { 
        document.querySelector<SVGStyleElement>('.stop').disabled =  false
        document.querySelector<SVGStyleElement>('.start').disabled =  true
    })

document.querySelector('.buttWinners').addEventListener('click', ()=>{
    document.querySelector<HTMLElement>('.garage').style.display  = 'none'
    document.querySelector<HTMLElement>('.garage1').style.display  = 'none'
    document.querySelector<HTMLElement>('.winners').style.display  = ''
})
document.querySelector('.buttGarage').addEventListener('click', ()=>{
    document.querySelector<HTMLElement>('.winners').style.display  = 'none'
    document.querySelector<HTMLElement>('.garage').style.display  = ''
    document.querySelector<HTMLElement>('.garage1').style.display  = ''
})

document.querySelector('.create').addEventListener('click',()=>{
    i++
    let road2 = `<div class="blockCar"><div class="settInfo"><button class="select">Select</button><button class="remove">Remove</button><div class="namCar${i}"></div></div><div class="road"><div class="startStop"><button class="start${i}">A</button><button class="stop${i}" disabled/>B</button></div><div class="way"> <img class="carImg carColor${i}" src="assets/car.png" alt="car"><img class="flag" src="/assets/flag.png" alt="flag"></div></div></div>`
    let cars = document.createElement(`blockCar${i}`)
    cars.innerHTML = road2 
    document.querySelector(".cars").appendChild(cars) 
    document.querySelector(`.namCar${i}`).textContent =  document.querySelector<HTMLInputElement>('.inpCreat').value
    document.querySelector<HTMLInputElement>(`.carColor${i}`).style.backgroundColor =  document.querySelector<HTMLInputElement>(".createColor").value
})


