//Variante con il while

//dichiarazione della varabile di iterazione
var i = 1;
var msg = "";
 while (i <= 100){
   if ( i % 3 ===0 &&  i % 5 ===0) {
     //se è si, stamperò la stringa "FizzBuzz"
     msg = msg + "<li>FizzBuzz</li>";
     //se è no, passerò al controllo successivo
   } else if (i % 3 === 0) {//è divisibile x3?
     //se si, stamerò “Fizz” al posto del numero
     msg = msg + "<li>Fizz</li>";
     //se è no, passerò al controllo successivo
   } else if (i % 5 === 0) {//è divisibile x5?
     //se si, stamerò “Buzz” al posto del numero
       msg = msg + "<li>Buzz</li>";
   } else {
     msg = msg + "<li>" + i + "</li>" ;
   }
   i++;
   document.getElementById('id').innerHTML = msg;
   msg = document.getElementById('id').innerHTML;
    console.log(i);
 }


//Variante con il do while

/*dichiarazione della varabile di iterazione
var i =1;
var msg = "";
  do {
   if ( i % 3 ===0 && i % 5 ===0) {
     //se è si, stamperò la stringa "FizzBuzz"
     msg = msg + "<li>FizzBuzz</li>";
     //se è no, passerò al controllo successivo
   } else if (i % 3 === 0) {//è divisibile x3?
     //se si, stamerò “Fizz” al posto del numero
      msg = msg + "<li>Fizz</li>";
     //se è no, passerò al controllo successivo
   } else if (i % 5 === 0) {//è divisibile x5?
     //se si, stamerò “Buzz” al posto del numero
      msg = msg + "<li>Buzz</li>";
   } else {
      msg = msg + "<li>" + i + "</li>" ;
   }
   i++;
   document.getElementById('id').innerHTML = msg;
   msg = document.getElementById('id').innerHTML;
   console.log(i);
 } while (i <=100)
*/
