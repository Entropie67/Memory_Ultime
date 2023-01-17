// Fichier script.js

let main = document.getElementById("main");
let nbCartes = 12;
for (let i = 0 ; i < nbCartes ; i++){
    main.innerHTML += `<img id ="image${i}" src="images/dos.png" alt="une image">`;
}

for (let j = 0 ; j < nbCartes ; j ++){
    let carte = document.getElementById(`image${j}`);
    carte.addEventListener("click", (e) => {
        carte.style.border = "solid red";

    });
}