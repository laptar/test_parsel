import createMarc from './js/saleForm';
import formSubmit from './js/formSubmit';

const show = document.querySelector('.btn-show');
const sale = document.querySelector('.btn-sale');

const StorageKey = 'cars';
const cars = localStorage.getItem(StorageKey);
console.log(cars);
cars ? cars : localStorage.setItem(StorageKey, JSON.stringify([]));

sale.addEventListener('click', handlerSaleBtn);
function handlerSaleBtn() {
  createMarc();
  formSubmit();
}
