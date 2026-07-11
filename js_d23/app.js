//dom events
let ob=document.querySelector('button');
console.dir(ob);
ob.onclick=function(){
    console.log("button was clicked");
}
//event listener
ob.nextElementSibling.addEventListener("click",hello);

function hello()
{
    console.log("you have triggered an event listener");
}