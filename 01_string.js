console.log("Hello");

let s ="karakterlánc \"Hello\"";
console.log(s);

let ujsor ="karakterlánc \n \"Hello\"";
console.log(ujsor);
console.log(ujsor.length);

let kocsi ="karakterlánc \r \"Hello\"";
console.log(kocsi);


//for ciklus
let sz = "JavaScript"; 
for(let i = 0; i < s.length; i++) 
    { 
        console.log(sz[i]); 
    } 

    //for of ciklus
    let sz1 = "JavaScript";
    for(betu of sz1)
    {console.log(betu)}

    //szövegösszefűzés
    console.log(sz+sz1);
    console.log(sz1 + " " + sz);
    console.log(`${sz} ${sz1}`);

    //concat method használata
    let szovegosszefuzes = sz.concat(" ", sz1);
    console.log(szovegosszefuzes);


let s2 = "Hello";
console.log(s.endsWith("Világ!"));
console.log(hello.startsWith("Világ!"));

