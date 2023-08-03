// ==UserScript==
// @name        Kill_sticky_VR_leboncoin
// @namespace   github.com/fonfano
// @match       https://www.leboncoin.fr/compte/part/mes-annonces
// @grant       none
// @version     0.2.2
// @author      -
// @description Kills dirty header when scrolling
// ==/UserScript==


// Historique
// 03-08-2023   0.2.2 update   :  Add boolean to minimize costs (isRemoved)
// 03-08-2023   0.2.1 update   :  New way to do the job
// 02-08-2023   0.2   redesign :  New way to do the job
// 29-07-2023   0.1   creation :  Kill dirty header when scrolling


window.addEventListener('scroll', function() {kill()} );
var isRemoved = false;

function kill()  {
  
  if (!isRemoved) {
    let toKill = document.querySelector("#mainContent > div:nth-child(2) > div:nth-child(2) > div.src__CenteredWrapper-sc-1bgl6we-0.jvloxK > section > div.styles_DashboardHeader__0YNrp > div._3IX1b._2VRRU > div");
    if (toKill) {
      toKill.remove();
      isRemoved = true;
      console.log("killStickyLeboncoin removed dirty header");
    }
  }

}
