/**
* Jeu du nombre mystère
* @author  Steve Fallet
* @version 0.1
* @since   2018-09-09 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let nbMystere = tireNombre(1, 100);
    let reponse;
    let nbEssais = 0;

    do {
        reponse = Number( prompt('Entrez un nombre entre 1 et 100'));
        nbEssais++;

        if (reponse > nbMystere){
            alert(`C'est moins !`);
        }else if(reponse < nbMystere){
            alert(`C'est plus`);
        }
    }while (reponse !== nbMystere);

    alert('Vous avez trouvé après ' + nbEssais + ' essais.');
}()); // main IIFE
