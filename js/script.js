

let confirmUser=0; //numro de saisie utilisateur
let usernumber=0;  //numero demande a l'user
let compteur = 1;  //le compteur

let userwinner =false;  //message gagnant utilisateur


// mise en place de la fonction

function playTheGame(){

    confirmUser = confirm("Do you like to play the Game ?")

    if (confirmUser == false) {

        alert("No problem, Goodbye");

    } else {

        usernumber = prompt("Enter a number between 0 and 10");

        if(isNaN(usernumber)){

            alert("Sorry Not a number, Goodbye");

        } else{

          usernumber =Math.round(usernumber);

          let computerNumber =Math.random()*10;

          computerNumber = Math.round(computerNumber);
          console.log(computerNumber);

          compareNumbers(usernumber,computerNumber);


        }

    }
}

//creation de fonction de comparaison des deux nombres

function compareNumbers(userNumber,computerNumber){
    console.log("je rentre dans la fonction");
do {
    
    console.log(compteur);
    
    if (compteur == 3) {
        alert("out of chances");
        break;
    }

    if (userNumber == computerNumber) {
        
        alert("WINNER");
        
        userwinner =true;
        break;
        
    } else if(userNumber > computerNumber) {
        
        usernumber = prompt("Your number is bigger then the computers, guess again");
        compteur+=1;
        compareNumbers(userNumber,computerNumber)
    } else {
        
        usernumber = prompt("Your number is lower then the computers, guess again");
        compteur+=1;
        compareNumbers(userNumber,computerNumber)
    }  
    
} while (compteur <= 3);

}


