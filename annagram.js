
annagram("chat","chien");

function annagram(mot1, mot2) {
 let arrayMot1 = mot1.split("");
 let arrayMot2 = mot2.split("");
 let motTrie1 = arrayMot1.sort().join();
 let motTrie2 = arrayMot2.sort().join();

 if (motTrie1 == motTrie2){
   console.log(mot1 + " est un annagramme de "+ mot2 + " !");
 }
 else {
   console.log("Ceci n'est pas un string !");
 }

}
