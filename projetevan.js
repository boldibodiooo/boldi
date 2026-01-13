console.log("yo tout le monde");

let motTapeOk = true; // Essayez de mettre false à la place de true
if (motTapeOk) {
    console.log("Bravo, vous avez correctement tapé le mot");
} else {
    console.log("Échec, le mot n'est pas correct");
}

const motApplication = "Bonjour";
let motUtilisateur = prompt("Entrez le mot : " + motApplication);

if (motUtilisateur === motApplication) {
    console.log("Bravo !");
} else {
    console.log("Vous avez fait une erreur de frappe.");
}

switch (motUtilisateur) {
    case motApplication:
        console.log("Bravo !");
        break;
    case "Gredin":
    case "Mécréant":
        console.log("Restez correct !");
        break;
    case "Vilain":
        console.log("Soyez gentil !");
        break;
    default:
        console.log("Vous avez fait une erreur de frappe.");
}

let listeMots = ["Cachalot", "coca cola", "Serviette"];
let listePhrases = ["tete d'oeuf", "attention a toi", "guerre des cheuveux"];
let score = 0;

let choix = prompt("Veuillez choisir la liste : mots ou phrases");
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez choisir la liste : mots ou phrases");
}

if (choix === "mots") { 
    for (let i = 0; i < listeMots.length; i++) {
        motUtilisateur = prompt("Entrez le mot : " + listeMots[i]);
        if (motUtilisateur === listeMots[i]) {
            score++;
        }
    }
    console.log("Votre score est de " + score + " sur " + listeMots.length);
} else { 
    for (let i = 0; i < listePhrases.length; i++) { 
        motUtilisateur = prompt("Entrez la phrase : " + listePhrases[i]);
        if (motUtilisateur === listePhrases[i]) { 
            score++;
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length);
}

console.log("Score final : " + score);

for (let i = 0; i < 3; i++) { 
    console.log(i);
}

let mot = prompt("Écrivez ok"); 
while (mot !== "ok") { 
    mot = prompt("Écrivez ok");  
}

console.log("Vous avez écrit ok !");

function retournerMessageScore(score, nombreQuestions) {
    let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
    return message
}

let nouveauMessage = retournerMessageScore(5, 10)
console.log(nouveauMessage)

let retourFonction = retournerMessageScore(1, 3)
console.log (retourFonction)