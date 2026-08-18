// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element ==5 ) {
        // console.log("this is mid point");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loopvalue: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inneer loop ${i}`);
    // console.log(i + `*` + j + `=` + i*j );   
    }
    
}



let myarray = ["flash","batman","superman"]

for (let index = 0; index < myarray.length; index++) { // when we not do index++ then code will be loop wise going
    const element = myarray[index];
    // console.log(element);
    
}


//======key words======

// break; and continue
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
}