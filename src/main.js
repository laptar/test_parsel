// Сервіс достаки
// Розрахунок вартості піддняття на поверх
// 1п фрі
// 2-4п +20
// 5-7п +30
// 8+   +40
// вага??
// вага > 40, кожні наступні 10кг +5 до поверху

const formEl = document.querySelector('form');
const subFormEl = document.querySelector('button');
const resultEl = document.querySelector('span');

class Dellivery {
  #Price;
  #OwerPrice;
  #countWeigth() {
    if (this.weigth <= 40) {
      return this.#Price;
    }
    const addedValue = Math.ceil((this.weigth - 40) / 10) * this.#OwerPrice;
    // console.log(addedValue);
    Object.keys(this.#Price).forEach(
      elm => (this.#Price[elm] = this.#Price[elm] += addedValue)
    );
  }

  constructor(floor, weigth) {
    this.floor = floor;
    this.weigth = weigth;
    this.#Price = { low: 20, mid: 30, hi: 40 };
    this.#OwerPrice = 5;
  }

  countEndPrice() {
    let totallPrise = 0;
    if (this.floor === 1) {
      return totallPrise;
    }
    this.#countWeigth();
    for (let i = 1; i <= this.floor; i += 1) {
      if (i >= 2 && i <= 4) {
        totallPrise += this.#Price.low;
      } else if (i >= 5 && i <= 7) {
        totallPrise += this.#Price.mid;
      } else if (i >= 8) {
        totallPrise += this.#Price.hi;
      }
    }
    // console.log(totallPrise);
    return totallPrise;
  }
}

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const weigth = Number(evt.target.weigth.value);
  const floor = Number(evt.target.floor.value);
  const newDel = new Dellivery(floor, weigth);

  resultEl.textContent = newDel.countEndPrice();
}

// const newDel = new Dellivery(5, 150);
// console.log(newDel);
// console.log(newDel);
// newDel.countEndPrice();
