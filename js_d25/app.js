let p=document.querySelector('h2');
function colorchange(color,sec)
{
return new Promise((resolve,reject)=>
{
    setTimeout(()=>
        {
            p.style.color=color;
            resolve();
        },sec);
});
}

async function change() {
    await colorchange("red",1000);
    await colorchange("blue",1000);
    await colorchange("yellow",1000);   
}
change();

let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>
{
    console.log(response);
    return response.json();
})
.then((data)=>
{
    console.log(data);
})
.catch((reject)=>
{
console.log(reject);
});