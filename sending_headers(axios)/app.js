const config={ headers: { Accept: 'application/json' } };
let url="https://catfact.ninja/fact";
let bt=document.querySelector('button');

bt.addEventListener('click',()=>{
    axios.get(url,config)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
});