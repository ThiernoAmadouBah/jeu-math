let nb1 = document.querySelector(".nb1");
let nb2 = document.querySelector(".nb2");
let op = document.querySelector(".op");
let Message = document.querySelector(".Message");
let score = document.querySelector(".score");
let link = document.querySelector(".link");
let section = document.querySelector("section");
let input = document.querySelector(".res");
let submiter = document.querySelector(".submiter");
let compteur = 0;

//Nombres aléatoires Début du jeu
random1 = Math.random()*11<< 0; //Pour générer des nombres entre 0 et 11.
random2 = Math.random()*11<< 0; //Pour générer des nombres entre 0 et 11.
   
//Inserer les nombres au hazard dans les variables nb1 et nb2.
nb1.innerHTML = random1;
nb2.innerHTML = random2;

//Fonction dde vérification 
function verification() {
    //Récupération du résultat entré par le joueur.
    let res = document.querySelector(".res").value;
    if(random1 + random2 == res){
        Message.style.background = "green"; 
        Message.innerHTML= "Correcte !";
        input.value = "";
        //Creer d'autres nombres aléatoires.        
            //Nombres aléatoires Début du jeu
            random1 = Math.random()*11<< 0; //Pour générer des nombres entre 0 et 11.
            random2 = Math.random()*11<< 0; //Pour générer des nombres entre 0 et 11.
            //Inserer les nombres au hazard dans les variables nb1 et nb2.
            nb1.innerHTML = random1;
            nb2.innerHTML = random2;
            compteur = compteur + 1;
    }else{
        Message.style.background = "red";
        Message.innerHTML= "Vous avez perdu!";
        section.innerHTML = "";
        score.innerHTML = `<span>${compteur}</span></br>Score`
        link.style.display = "block";
    }
}