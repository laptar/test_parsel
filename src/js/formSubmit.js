export default function formSabmit() {
  const formMarc = document.querySelector('.form-marc');
  formMarc.addEventListener('submit', handleFormSabmit);
}

function handleFormSabmit(event) {
  event.preventDefault();
  const { marc, model, yer, price, tel, img } = event.target.elements;
  const carObj = {
    marc: marc.value,
    model: model.value,
    yer: yer.value,
    price: price.value,
    tel: tel.value,
    img: img.value,
  };
  const StorageKey = 'cars';
  const cars = JSON.parse(localStorage.getItem(StorageKey));
  cars.push(carObj);
  localStorage.setItem(StorageKey, JSON.stringify(cars));
  event.target.reset();
}
