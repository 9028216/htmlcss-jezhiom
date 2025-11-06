let kleuren = ["green", "red", "blue", "orange", "purple"];
let index = 0;

function kleur_aanpassen() {
    const title = document.getElementById("hello");
    title.style.color = kleuren[index]; // verander naar de volgende kleur

    // ga naar de volgende kleur
    index++;
    if (index >= kleuren.length) {
        index = 0; // begin opnieuw
    }
}
