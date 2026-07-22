let f=document.querySelector("form");
let inp=document.querySelectorAll("input");
f.addEventListener("submit",extraction)

function extraction(e)
{
    e.preventDefault();
   let user=this.elements[0];
   let pass=this.elements[1];

   console.log(user.value);
   console.log(pass.value);
}

// function extract(e)
// {
//     e.preventDefault();
//     let arr=[];
//    for(let i=0;i<inp.length;i++)
//     {
//      arr[i]=inp[i].value;
//     }
//     console.log(arr);
// }
//"change"=> detects only initial and final states.
let sr=document.querySelector("#usr");
sr.addEventListener("change",function()
{
 console.log("input changed");
 console.log(`user=${sr.value}`);
})
//"input"=> detects even the smallest changes.
let ps=document.querySelector("#pass");
ps.addEventListener("input",function()
{
 console.log("input changed");
 console.log(`pass=${ps.value}`);
})

    