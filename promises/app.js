//promises.
function savetoDb(data)
{
    return new Promise((resolve, reject) => {
    let internetspeed=Math.floor(Math.random()*10)+1;
    if(internetspeed>4)
    {
        resolve(`data is saved`);
    }
    else
    {
        reject(`not saved`);
    }
    });
}
// savetoDb("hello")
//     .then((result) => {
//         console.log("saved");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("failed");
//         console.log(error);
//     });

    //promise chaining
savetoDb("hi world")
    .then((res)=>
    {
        console.log(`saved `);
        return savetoDb("GTA 6");
    })
    .then((res)=>
    {
        console.log(`saved`);
    })
    .catch((err)=>
    {
        console.log(`not saved `);
    })
