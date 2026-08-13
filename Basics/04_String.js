const name = "Omraje"
const repocount = "50"

console.log(`My name is ${name} my rapo is ${repocount}`);

const GameName = new String (`Omraje`)

console.log(GameName [1]);
//  o/p-----> "m" beacuse string doing the o--->O 1---->m 2----->r etc
console.log(GameName.length);  //------> they give a lengnth eg "6"
console.log(GameName.toUpperCase());
console.log(GameName.charAt(3)); // this function give to us charchter in which postion 

const newString = GameName.substring(0 , 3)
console.log(newString); //O/P ------> omr 

const anothereString = GameName.slice(-6 , 4)
console.log(anothereString); // OP------> Omra