// ==UserScript==
// @name        Kill_sticky_VR_leboncoin
// @namespace   github.com/fonfano
// @match       https://www.leboncoin.fr/compte/part/mes-annonces
// @grant       none
// @version     0.2.5
// @author      Lt Ripley
// @description Kills dirty header when scrolling
// ==/UserScript==


// Historique
// 27-12-2023   0.2.5 update   :  For new header
// 07-10-2023   0.2.4 update   :  For new header
// 27-08-2023   0.2.3 update   :  Removed boolean (isRemoved) to allow better working
// 03-08-2023   0.2.2 update   :  Added boolean to minimize costs (isRemoved)
// 03-08-2023   0.2.1 update   :  New way to do the job
// 02-08-2023   0.2   redesign :  New way to do the job
// 29-07-2023   0.1   creation :  Kill dirty header when scrolling

var delay = 10



window.addEventListener("load", (event) => {  // Censé attendre que la page soit complètement chargée

  setTimeout(() => {

    window.addEventListener('scroll', function() {kill()} );

    function kill()  {

      let toKill = document.querySelector('div[data-test-id="sticky-container"]');

        if (toKill) {
          toKill.remove();
          console.log("killStickyLeboncoinVR removed dirty header");
        }
    }

  }, delay);
});









