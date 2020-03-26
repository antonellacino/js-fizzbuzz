//Variante con il while

//dichiarazione della varabile di iterazione
/*var i = 1;
 while (i <= 100){
   if ( i % 3 ===0 &&  i % 5 ===0) {
     //se è si, stamperò la stringa "FizzBuzz"
     console.log("FizzBuzz");
     //se è no, passerò al controllo successivo
   } else if (i % 3 === 0) {//è divisibile x3?
     //se si, stamerò “Fizz” al posto del numero
     console.log("Fizz");
     //se è no, passerò al controllo successivo
   } else if (i % 5 === 0) {//è divisibile x5?
     //se si, stamerò “Buzz” al posto del numero
     console.log("Buzz");
   } else {
     console.log(i);
   }
   i++;
 }*/


//Variante con il do while

//dichiarazione della varabile di iterazione
var i = 1;
  do {
   if ( i % 3 ===0 &&  i % 5 ===0) {
     //se è si, stamperò la stringa "FizzBuzz"
     console.log("FizzBuzz");
     //se è no, passerò al controllo successivo
   } else if (i % 3 === 0) {//è divisibile x3?
     //se si, stamerò “Fizz” al posto del numero
     console.log("Fizz");
     //se è no, passerò al controllo successivo
   } else if (i % 5 === 0) {//è divisibile x5?
     //se si, stamerò “Buzz” al posto del numero
     console.log("Buzz");
   } else {
     console.log(i);
   }
   i++;
 } while (i <= 100)
