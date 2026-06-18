// objects of objects(nesting of objects)
const info={
    aman:{
        name:"Aman",
        grade:"A+",
        age:21
    },
    rahul:{
        name:"rahul",
        grade:"O",
        age:22
    }
};
// array of objects
const classinfo=[
    {
        name:"dhoni",
        profession:"cricketer",
        age:37
    },
    {
        name:"virat",
        profession:"cricketer",
        age:35
    }
];
//guessing game
let a=prompt("enter a number");
let digit=Math.floor(Math.random()*a);
console.log("__________welcome to a quiz game___________");
console.log("give a maximum number and then guess the number from 0 to max number");
while(true)
{
    let guess=prompt("guess the number");
    if(digit==guess)
    {
     console.log("hola amigo your guess is correct.");
     break;
    }
    else if(guess=="quit")
    {
        console.log("oh! looks you have quit the game.")
        break;
    }
}
