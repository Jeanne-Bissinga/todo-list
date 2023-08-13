const form = document.querySelector('form');

//stocker les éléments dans le local storage
function storeList () {
    //on fait window.localStorage.leNomdeCeQueJeVeuxStocker
    window.localStorage.todoList = list.innerHTML; //On lui passe ici tout le contenu de l'ul. on prend tout ce qui à été taper dans l'ul et on l'envoie dans le local storage
}

//fonction qui permet de récupérer les todos
function getTodos () {
    //est-ce qu'il y'a des élément dans window.localStorage.todoList? si oui tu les affiche
    if (window.localStorage.todoList){
        list.innerHTML = window.localStorage.todoList;
    } else {
        // si non tu affiche ça
        list.innerHTML = `<li> cliquez sur un todo pour le supprimer </li>`;
    }
}
// au chargement de la page tu me joue getTodos
window.addEventListener('load', getTodos);


// ajouter sur le dom ce qui est ecrit dans le formulaire
form.addEventListener("submit", (e) =>{
    // on ne veut pas recharger la page à la validation du formulaire. Don on fait e.preventDefault
    e.preventDefault();

    // on recupère ce qui a été mit dans le input. on fait nom-balise ou selecteur-balise .value. quand c'est pour récupérer ce qui à été taper dans une balise c'est .textContent au lieu de .value
    list.innerHTML += `<li>${item.value}</li>`;
    item.value = ""; // pour que le champs redevienne vide après validation

    storeList(); //on joue la fonction pour stocker les élements
});


//supprimer un élément
list.addEventListener("click", (e) =>{
    //contains() est une méthode qui cherche à savor si la classe existe.
    if(e.target.classList.contains("checked")){
        e.target.remove();
    } else{
        //On veut d'abord checked un élément pour ensuite le supprimer
        e.target.classList.add("checked");
    }
    // pour savoir sur quoi on click c'est e.target
    //e.target.remove(); // pupprime le truc sur lequel jai cliqué

    storeList(); //on joue la fonction pour stocker les élements
});


