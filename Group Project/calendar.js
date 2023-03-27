// Get the current date
let today = new Date();

// Get the number of days in the current month
let daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

// Create a table to display the calendar
let table = document.createElement('table');
let row = table.insertRow();
let dayOfWeek = 0;

// Create the header row with the days of the week
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
for (let i = 0; i < 7; i++) {
  let cell = row.insertCell();
  cell.innerHTML = daysOfWeek[i];
}

// Create the calendar rows with the days of the month
for (let i = 1; i <= daysInMonth; i++) {
  if (dayOfWeek == 0) {
    row = table.insertRow();
  }
  let cell = row.insertCell();
  cell.innerHTML = i;
  dayOfWeek = (dayOfWeek + 1) % 7;
}

// Add the table to the calendar div
document.getElementById('calendar').appendChild(table);
