export function paggination(){
    document.querySelector('.garage').insertAdjacentHTML('afterend', `<div class="backNextButton"><button class="back" disabled>BACK</button><button class="next" disabled>NEXT</button></div>`)
}

export function nextBackButton() {
    let i:number = 1
    document.querySelector('.next').addEventListener('click', function(){
        if(document.querySelector('.cars').childNodes.length / 7 <= i){
            document.querySelector<HTMLSelectElement>('.next').disabled = true
        }else{     
            i++
            document.querySelector('.pageNumber').textContent = `Page ${i}`
            if(i>1){
                document.querySelector<HTMLSelectElement>('.back').disabled = false
            }
            document.querySelectorAll<HTMLDivElement>(`.blockCar`).forEach(function(el){
                el.style.display = 'none'
            })
            for (let k:number = 7; k > 0; k--){            
                if(document.querySelectorAll<HTMLDivElement>(`.blockCar`)[(7*i) - k]){
                    document.querySelector<HTMLDivElement>(`blockCar${(7*i) - k + 1}`).style.display = ''
                    document.querySelectorAll<HTMLDivElement>(`.blockCar`)[(7*i) - k].style.display = ''
                }
            }
        }
    })
    document.querySelector('.back').addEventListener('click', function(){
        if(i == 1){ 
            document.querySelector<HTMLSelectElement>('.back').disabled = true
        }else{
            i--
            document.querySelector('.pageNumber').textContent = `Page ${i}`
            document.querySelector<HTMLSelectElement>('.next').disabled = false
            document.querySelectorAll<HTMLDivElement>(`.blockCar`).forEach(function(el){
                el.style.display = 'none'
            })
        }      
    })
}

