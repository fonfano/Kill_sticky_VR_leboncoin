// ==UserScript==
// @name        Kill_sticky_VR_leboncoin
// @namespace   github.com/fonfano
// @match       https://www.leboncoin.fr/compte/part/mes-annonces
// @grant       none
// @version     0.2.4
// @author      Lt Ripley
// @description Kills dirty header when scrolling
// ==/UserScript==


// Historique
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
        //let toKill = document.querySelector("#mainContent > div:nth-child(2) > div:nth-child(2) > div.src__CenteredWrapper-sc-1bgl6we-0.jvloxK > section > div.styles_DashboardHeader__0YNrp > div._3IX1b._2VRRU > div");
        let toKill = document.querySelector("#mainContent > div:nth-child(2) > div.flex.flex-col.items-center > section.w-full.max-w-page-max.px-lg > div.styles_DashboardHeader__0YNrp > div._3IX1b._2VRRU > div");

        if (toKill) {
          toKill.remove();
          console.log("killStickyLeboncoinVR removed dirty header");
        }
    }

  }, delay);
});









