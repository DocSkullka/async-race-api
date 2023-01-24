export default function anim (){
    let width = 0 
    setInterval(function(){
    width = +window.innerWidth - 120
    },1000)
    document.addEventListener('click', function(co:any){
        if (co.target.className == 'start'){
            let m:number = 10
            let i = co.target.id
            let timer = setInterval(function(){
                m=m + 20
                document.querySelector<HTMLInputElement>(`.carColor${i}`).style.left=m+'px'
                if(m >= width)clearInterval(timer)
                
            },25) 
        }
        if(co.target.className == 'stop') {
            let s = co.target.id
            document.querySelector<HTMLInputElement>(`.carColor${s}`).style.left= 45+'px'
            console.log(s);
            return
            }else {
                return
            }  
    })
    }
    
