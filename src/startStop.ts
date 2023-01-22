export default function startStop() {

let i = 0 
    document.addEventListener('click', function(el:any):void { 
        if(el.target.classList.contains('start') || el.target.classList.contains('stop')){
            i++
            // el.target.className.replace('start','').trim().disabled = false
            document.querySelectorAll<HTMLInputElement>(`.str${i}`)[1].disabled = false
            document.querySelectorAll<HTMLInputElement>(`.str${i}`)[0].disabled = false
            // document.querySelector<HTMLInputElement>(`.start${i}`).disabled = true
            // document.querySelector<HTMLInputElement>(`.stop${i}`).disabled = false
            // el.target.disabled = true 
            console.log('gfdg');
            console.log(el.target.className.replace('start','').trim());
        }
    })
}