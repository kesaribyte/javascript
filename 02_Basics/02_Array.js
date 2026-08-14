const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  ---this is two arryas are to connect a one but this is problem beacuse they don't combine that's why not use 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   --- they not combine in push that's why we use concat. we create a new arrays and then give as a combine arryass
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   //--- same as above they give a separete elements and crate a new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(Infinity) //--- khup jayst array chya aata array astil tar aapn .flat use karaych ani te aaplyala ek array det.
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))      // is converting into a arrya like ['h' "i" "t"]
console.log(Array.from({name: "hitesh"})) // interesting  --they give you to a empty array[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));