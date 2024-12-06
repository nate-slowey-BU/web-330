/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Nate Slowey
  Date: 12/6
  Filename: chefs.js
*/

"use strict";
const chef1Name = document.querySelector(".chef1-name");
const chef1Specialty = document.querySelector(".chef1-specialty");
const chef1Weakness = document.querySelector(".chef1-weakness");
const chef1Location = document.querySelector(".chef1-location");

const chef2Name = document.querySelector(".chef2-name");
const chef2Specialty = document.querySelector(".chef2-specialty");
const chef2Weakness = document.querySelector(".chef2-weakness");
const chef2Location = document.querySelector(".chef2-location");

const chef3Name = document.querySelector(".chef3-name");
const chef3Specialty = document.querySelector(".chef3-specialty");
const chef3Weakness = document.querySelector(".chef3-weakness");
const chef3Location = document.querySelector(".chef3-location");

const chef1Error = document.querySelector(".chef1-error");
const chef2Error = document.querySelector(".chef2-error");
const chef3Error = document.querySelector(".chef3-error");

// TODO: Define an array of chef objects
let chefs = [
  {
    name: "Gordan Ramsey",
    specialty: "European cuisine",
    weakness: "Patience",
    restaurantLocation: "London, UK",
  },
  {
    name: "Guy Fieri",
    specialty: "Unique american food",
    weakness: "Eggs",
    restaurantLocation: "United States",
  },
  {
    name: "Bobby Flay",
    specialty: "Southern cuisine",
    weakness: "Soup",
    restaurantLocation: "Las Vegas, USA",
  },
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate a promise rejection
      if (Math.random() > 0.2) {
        resolve(chefs[0]);
      } else {
        reject("fail");
      }
    }, 2000); // 2-second delay
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate a promise rejection
      if (Math.random() > 0.2) {
        resolve(chefs[1]);
      } else {
        reject("fail");
      }
    }, 3000); // 3-second delay
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate a promise rejection
      if (Math.random() > 0.2) {
        resolve(chefs[2]);
      } else {
        reject("fail");
      }
    }, 4000); // 4-second delay
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
function retrieveAllChefs() {
  Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
    .then((results) => {
      // Update Chef 1 Information
      if (results[0].status === "fulfilled") {
        const chef = results[0].value;
        chef1Name.textContent = `Name: ${chef.name}`;
        chef1Specialty.textContent = `Specialty: ${chef.specialty}`;
        chef1Weakness.textContent = `Weakness: ${chef.weakness}`;
        chef1Location.textContent = `Location: ${chef.restaurantLocation}`;
      } else {
        chef1Error.textContent = "Error: Failed to load Chef 1's information.";
      }

      // Update Chef 2 Information
      if (results[1].status === "fulfilled") {
        const chef = results[1].value;
        chef2Name.textContent = `Name: ${chef.name}`;
        chef2Specialty.textContent = `Specialty: ${chef.specialty}`;
        chef2Weakness.textContent = `Weakness: ${chef.weakness}`;
        chef2Location.textContent = `Location: ${chef.restaurantLocation}`;
      } else {
        chef2Error.textContent = "Error: Failed to load Chef 2's information.";

      }

      // Update Chef 3 Information
      if (results[2].status === "fulfilled") {
        const chef = results[2].value;
        chef3Name.textContent = `Name: ${chef.name}`;
        chef3Specialty.textContent = `Specialty: ${chef.specialty}`;
        chef3Weakness.textContent = `Weakness: ${chef.weakness}`;
        chef3Location.textContent = `Location: ${chef.restaurantLocation}`;
      } else {
        chef3Error.textContent = "Error: Failed to load Chef 3's information.";

      }

      console.log("All chef data has been processed.");
    })
    .catch((error) => {
      console.error("Unexpected error:", error);
    });
}

window.onload = retrieveAllChefs;
