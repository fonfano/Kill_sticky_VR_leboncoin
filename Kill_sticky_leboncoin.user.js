// ==UserScript==
// @name        Kill_sticky_VR_leboncoin
// @namespace   github.com/fonfano
// @match       https://www.leboncoin.fr/compte/part/mes-annonces
// @grant       none
// @version     0.2
// @author      -
// @description 01/08/2023 10:35:45
// ==/UserScript==

// Historique
// 29-07-2023   0.1   creation :  Kill dirty header when scrolling
// 02-08-2023   0.2   redesign :  New way to do the job


window.addEventListener('scroll', function() {kill()});

function kill()  {
  let toKill = document.querySelector("#mainContent > div:nth-child(2) > div:nth-child(2) > div.src__CenteredWrapper-sc-1bgl6we-0.jvloxK > section > div.styles_DashboardHeader__0YNrp > div._3IX1b._2VRRU > div");
  if (toKill) {
    toKill.style.display = "none";
    console.log("dothejob");
  }
}
