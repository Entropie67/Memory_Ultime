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

for (let i = 0 ; i < nbCartes ; i++){
    main.innerHTML += `<img id ="image${i}" src="images/dos.png" alt="une image">`;
}

for (let j = 0 ; j < nbCartes ; j ++){
    let carte = document.getElementById(`image${j}`);
    carte.addEventListener("click", (e) => {
        if (carte.src.slice(-7) == "dos.png") {
            carte.style.border = "solid red";
            carte.src = `images/${tab[j]}`;
        }else {
            carte.src = "images/dos.png";
        }

    });
}