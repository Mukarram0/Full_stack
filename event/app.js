let ob=document.querySelector('p');
let obj=document.querySelector('button');
ob.addEventListener("click",hello);
obj.addEventListener("click",hello);
function hello()
{
    console.log(this);
}

//keyboard events
let inp=document.querySelector("input");
inp.addEventListener("keydown",function(e)
{
    if(e.code=="ArrowUp")
    {
     console.log("move up");
    }
    else if(e.code=="ArrowDown")
    {
     console.log("move back");
    }
    else if(e.code=="ArrowLeft")
    {
     console.log("move left");
    }
    else if(e.code=="ArrowRight")
    {
     console.log("move right");
    }
    else
    {
        console.log("wrong move");
    }
});
