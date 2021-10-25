/*Variabile per elemento con classe container*/
const container = document.querySelector(".container");

/*Loop da 1 a 100 */
for(i=1; i <=100; i++ ){
/*Creo elemento div box, gli aggiungo la classe per dimensioni e lo appendo al container */
const box = document.createElement("div");
container.append(box);
box.classList.add("box");
/*Aggiungo classi in base a multipli */
/*Multiplo di 3 e 5*/
if (i % 15 == 0){
box.style.backgroundColor="red";
box.innerHTML = "fizzbuzz"
}
/*Multiplo solo di 5*/
else if(i % 5 ==0){
    box.style.backgroundColor="yellow";
    box.innerHTML = "buzz"
}
/*Multiplo solo di 3*/
else if (i % 3 == 0){
    box.style.backgroundColor="green";
    box.innerHTML = "fizz"
}
else{
    box.style.backgroundColor="blue"
    box.innerHTML = i
}
}

