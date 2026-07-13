//console.dir(document); key value pair
document.all[7].innerHTML="Welcome";

//getElementById
let obj=document.getElementById("nat");
obj.src="ip4.webp";

//getElementByclassname
let ob=document.getElementsByClassName("cl");
console.log(ob);

//manipulating attributes 
let im=document.querySelector('.clap');
im.setAttribute('src',"ip6.webp");

//manipulating style
let ob1=document.querySelector('h1');
ob1.style.backgroundColor="black";

let p=document.querySelectorAll('p');
for(let i=0;i<p.length;i++)
{
    p[i].style.backgroundColor="yellow";
}
