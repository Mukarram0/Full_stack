let act=document.querySelector('div');
let para=document.querySelector('p');
let gamesq=[];
let usersq=[];
let btns=["red","yellow","purple","green"];

let level=0;
let start=false;
document.addEventListener("keypress",function()
{
  if(start==false)
  {
    start=true;
    levelup();
  }
 
})
function btnflash(btn)
{
  btn.classList.add("flash");
  setTimeout(function(){
   btn.classList.remove("flash");
  },300);
}

function levelup()
{
  usersq=[];
  level++;
  para.innerText=`level ${level}`;
  let ranidx=Math.floor(Math.random()*4);
  let rancolor=btns[ranidx];
  gamesq.push(rancolor);
  let randbtn=document.querySelector(`.${rancolor}`);
  btnflash(randbtn);
}

function match(i)
{
  if(usersq[i]===gamesq[i])
  {
    if(usersq.length==gamesq.length)
    {
      setTimeout(levelup,1000);
    }
  }
  else{
  para.innerHTML=`Game over!your score is <b>${level-1}<b>, <br> press any key to start again`;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
  document.querySelector("body").style.backgroundColor="white";},200);
  reset();
  }  
}

function btn_press()
{
  let btn=this;
  btnflash(btn);
  let color=btn.getAttribute("id");
  usersq.push(color);
  match(usersq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(i of allbtns)
{
  i.addEventListener("click",btn_press);
}

function reset()
{
  level=0;
  usersq=[];
  gamesq=[];
  start=false;
}