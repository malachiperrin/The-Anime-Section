//Filename: TheAnimeSection.js
//Author: Malachi Perrin

"use-strict";

//Button events

document.getElementById("button").addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = "flex";

});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
})
