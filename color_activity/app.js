let obj=document.querySelector('h3');
let ob=document.querySelector('button');
let cg=document.querySelector('div');
ob.addEventListener("click",random)
function random()
{
    let r=Math.floor((Math.random()*256));
    let g=Math.floor((Math.random()*256));
    let b=Math.floor((Math.random()*256));
    let color=`rgb(${r},${g},${b})`;
    obj.innerText=color;
    cg.style.backgroundColor=color;
}