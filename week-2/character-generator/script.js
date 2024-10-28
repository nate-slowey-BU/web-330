/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Nate Slowey
  Date: 10/28
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return characterClass;
    },
  };
}

document.getElementById("generateHero").addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.getElementById("heroName").value;
  let gender = document.getElementById("heroGender").value;
  let characterClass = document.getElementById("heroClass").value;

  const character = createCharacter(name, gender, characterClass);

  const outputName = character.getName();
  const outputGender = character.getGender();
  const outputClass = character.getClass();

  document.getElementById("outputName").textContent += outputName;
  document.getElementById("outputGender").textContent += outputGender;
  document.getElementById("outputClass").textContent += outputClass;

  document.getElementById("characterForm").style.display = "none";
  document.getElementById("characterOutput").style.display = "block";
});
