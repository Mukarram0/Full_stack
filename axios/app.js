let url="https://catfact.ninja/fact";
let p=document.querySelector('p');
let b=document.querySelector('button');

b.addEventListener("click",fch);
async function fch() {
    try{
    let res=await axios.get(url);
    let txt=res.data.fact;
    p.innerText=txt;
    }
    catch(e)
    {
        console.log(e);
    }
    
}