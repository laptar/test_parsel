// const namesOfMonth = [
//   'Січень',
//   'Лютий',
//   'Березень',
//   'Квітень',
//   'Травень',
//   'Червень',
//   'Липень',
//   'Серпень',
//   'Вересень',
//   'Жовтень',
//   'Листопад',
//   'Грудень',
// ];
// const namesOfDay = [
//   'Неділя',
//   'Понеділок',
//   'Вівторок',
//   'Середа',
//   'Четвер',
//   'Пятниця',
//   'Субота',
// ];

import searchByName from './js/api/swapi';

// const month = document.querySelector('.date-month');
// const date = document.querySelector('.date');
// const day = document.querySelector('.date-day');
// const year = document.querySelector('.date-year');
// const hour = document.querySelector('.digitel-clock');

// function getActiveTime() {
//   const time = new Date();
//   // console.log(time);
//   getYear(time);
//   getMonth(time);
//   getDay(time);
// }

// setInterval(getActiveTime, 1000);

// // function hour(time) {}
// function getYear(time) {
//   year.textContent = time.getFullYear();
// }
// function getMonth(time) {
//   month.textContent = namesOfMonth[time.getMonth()];
// }
// function getDay(time) {
//   day.textContent = namesOfDay[time.getDay()];
// }

import searchByName from './js/api/swapi';

const input = document.querySelector('.api-search');
input.addEventListener('input', onInput);
function onInput(evt) {
  console.log(evt.target.value);
  const impValue = evt.target.value;
  searchByName(impValue).then(response => console.log(response));
}
