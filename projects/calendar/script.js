// week days
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();

// month days Exercise 1
function createDaysOfTheMonth () {
  const decDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const days = document.getElementById('days');

  for (let index = 0; index < decDaysList.length; index += 1) {
      const day = document.createElement('li');
      const dayMonth = decDaysList[index];

      day.innerText = decDaysList[index];
      days.appendChild(day);

      if (dayMonth === 24 || dayMonth === 31) {
          day.className = "day holiday";
      } else if (dayMonth === 4 || dayMonth === 11 || dayMonth === 18) {
          day.className = "day friday";
      } else if (dayMonth === 25) {
          day.className = "day holiday friday";
      } else {
          day.className = "day";
      }

      days.appendChild(day);
  }
}
createDaysOfTheMonth();

// Exercise 2
function createButtonHoliday(name) {
    const buttonContainer = document.querySelector('.button-container');
    const button = document.createElement('button');
    
    
    button.innerText = name;
    button.id = "btn-holiday";

    buttonContainer.appendChild(button);
}
createButtonHoliday("Holiday");

// Exercise 3
function changeColorOfHolidays() {
    const backgroundColor = "rgb(238, 238, 238)";
    const button = document.querySelector('#')
}
