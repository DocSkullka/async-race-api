export function startStop() {

    document.addEventListener('click', function(el:any):void { 
        if(el.target.classList.contains('start')){
            el.target.disabled = true
            el.target.parentNode.childNodes[1].disabled = false 
        }
        else if(el.target.classList.contains('stop')){
            el.target.disabled = true
            el.target.parentNode.childNodes[0].disabled = false
        }
    })
}

export function race() {
    document.querySelector('.race').addEventListener('click', function(){
        document.querySelectorAll('.start').forEach(function(el:any){
            el.disabled = true
        })
        document.querySelectorAll('.stop').forEach(function(el:any){
            el.disabled = false
        })
    })
}


export function reset() {
    document.querySelector('.reset').addEventListener('click', function(){
        document.querySelectorAll('.stop').forEach(function(el:any){
            el.disabled = true
        })
        document.querySelectorAll('.start').forEach(function(el:any){
            el.disabled = false
        })
        
    })
}

