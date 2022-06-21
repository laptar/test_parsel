export default function renderCars(data) {
  const render = document.querySelector('.view-list');
  const markup = data.map(car => _crateMarkup(car)).join('');
}

function _crateMarkup({ marc, model, yer, price, tel, img }) {
  const car = ` <li>
    <img src="${img}" alt="" />
    <p>${marc}</p>
    <p>${model}</p>
    <p>${yer}</p>
    <p>${price}</p>
    <p>${tel}</p>
  </li>`;
  return car;
  render.insertAdjacentHTML('beforeend', car);
}
