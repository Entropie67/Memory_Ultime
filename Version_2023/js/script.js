// Fichier script.js
let tab = [];
let nbCartes = 13;
// On ajoute le nom des cartes dans un tableau
for (let k = 0 ; k < nbCartes ; k++){
    tab.push(`${k}.jpg`);
    tab.push(`${k}.jpg`);
}
const melange =  (array) => {
    array.sort(() => Math.random() - 0.5);
}
// On mélange ce tableau
melange(tab);
console.log(tab);

let main = document.getElementById("main");

for (let i = 0 ; i < nbCartes * 2 ; i++){
    main.innerHTML += `<img id ="image${i}" src="images/dos.png" alt="une image">`;
}
let cliquees = [];

for (let j = 0 ; j < nbCartes * 2 ; j ++){
    let carte = document.getElementById(`image${j}`);
    carte.addEventListener("click", (e) => {
        if (carte.src.slice(-7) == "dos.png") {
            carte.src = `images/${tab[j]}`;
            cliquees.push(carte);
        }else {
            carte.src = "images/dos.png";
        }
        console.log(cliquees);
    });
}