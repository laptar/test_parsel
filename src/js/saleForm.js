export default function saleForm() {
  const marc = `<form class="form-marc" action="submit">
      <label for="marc">Марка</label>
      <input name="marc" type="text" id="marc" />
      <label for="model">Модель</label>
      <input name="model" type="text" id="model" />
      <label for="yer">Рік виготовлення</label>
      <input name="yer" type="text" id="yer" />
      <label for="price">Вартість</label>
      <input name="price" type="text" id="price" />
      <label for="tel">Телефон</label>
      <input name="tel" type="text" id="tel" />
      <label for="img">Фото</label>
      <input name="img" type="text" id="img" />
      <button type="submit">Відправити форму</button>
    </form>`;
  const container = document.querySelector('.container');
  container.insertAdjacentHTML('beforeend', marc);
}
