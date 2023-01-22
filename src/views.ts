export  function win(){
    document.querySelector('.buttWinners').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.garage').style.display  = 'none'
        document.querySelector<HTMLElement>('.garage1').style.display  = 'none'
        document.querySelector<HTMLElement>('.winners').style.display  = ''
    })
}
export  function garage(){
    document.querySelector('.buttGarage').addEventListener('click', ()=>{
        document.querySelector<HTMLElement>('.winners').style.display  = 'none'
        document.querySelector<HTMLElement>('.garage').style.display  = ''
        document.querySelector<HTMLElement>('.garage1').style.display  = ''
    })
} 

