function checkOutProgress(){
    let t=setInterval(()=>{
    },100)
    setTimeout(()=>clearInterval(t),100)
}
// //8384
let div=document.querySelector('.progress')

let endpages=8384,scroll=0;
function changeWidth(scroll){
    let value=Math.floor((scroll*100)/endpages);
    div.style.width=value+"%"
}
let t=setInterval(()=>{
    if(scrollY!==scroll){
        checkOutProgress()
        scroll=scrollY
        changeWidth(scroll)
    }
},10)
