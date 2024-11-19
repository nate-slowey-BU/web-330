/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Nate Slowey
  Date: 11/18
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 2, isReserved: 'Yes' },
  { tableNumber: 2, capacity: 4, isReserved: 'No' },
  { tableNumber: 3, capacity: 4, isReserved: 'No' },
  { tableNumber: 4, capacity: 2, isReserved: 'Yes' },
  { tableNumber: 5, capacity: 8, isReserved: 'No' },
  { tableNumber: 6, capacity: 4, isReserved: 'No' },
  { tableNumber: 7, capacity: 2, isReserved: 'Yes' },
  { tableNumber: 8, capacity: 4, isReserved: 'No' },
  { tableNumber: 9, capacity: 8, isReserved: 'Yes' },
  { tableNumber: 10, capacity: 2, isReserved: 'No' },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {

  if (!tables[tableNumber - 1]) {
    callback('Select valid table number (1-10)');
    return;
  }

  if(tables[tableNumber - 1].isReserved === 'No') {
    tables[tableNumber - 1].isReserved = 'Yes';
    document.getElementById("message").textContent = "Checking available tables please wait";
    setTimeout(() => {
      callback(null, `Table ${tableNumber} has been successfully reserved`);
    }, time)
  } else {
    callback('This table is already reserved. Please try a different table number');
  }
}



function handleReservation(errorMessage, successMessage) {
  if (errorMessage) {
    document.getElementById("message").textContent = errorMessage;
  } else {
    document.getElementById("message").textContent = successMessage;
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedTable = document.getElementById("tableNumber").value;
    const waitTime = 5000;

    reserveTable(selectedTable, handleReservation, waitTime);
  });
