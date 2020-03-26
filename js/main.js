//Fizz Buzz test:
//Scrivi un programma che stampi i numeri da 1 a 100,
//1.per i multipli di 3 stampi “Fizz” al posto del numero
//2. per i multipli di 5 stampi “Buzz”.
//3. Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.


//devo creare un ciclo, partendo da uno, dove controllare per ogni numero, fino ad un massimo di 100 se :
for (var i = 1; i <= 100; i++) {
// il numero è divisilie x3 e x5
  if ( i % 3 ===0 &&  i % 5 ===0) {
    //se è si, stamperò la stringa "FizzBuzz"
    console.log("FizzBuzz");
    //se è no, passerò al controllo successivo
  } else if ( i % 3 > 0 &&  i % 5 > 0) {//non è divisibile x nessuno dei 2?
    //allora scrivo se stesso
    console.log(i);
    //è divisibile x3?
  } else if (i % 3 ===0) {
    //se si, stamerò “Fizz” al posto del numero
    console.log("Fizz");
    //se è no, passerò al controllo successivo
  } else if (i % 5 ===0) {//è divisibile x5?
    //se si, stamerò “Buzz” al posto del numero
    console.log("Buzz");
  }
}
