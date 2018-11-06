$(document).ready(() => {
    //Создавать товары
    let product1 = new Product(123, 'Ноутбук', 45600);
    let product2 = new Product(124, 'Клавиатура', 1200);
    let product3 = new Product(125, 'Мышь', 600);

    //Корзина
    let mycart = new Cart('getCart.json');

    //Обработчик
    $('#products').on('click', '.buyBtn', e => {
        mycart.addProduct(e.target);
        console.log(e.target);
    });
    console.log(mycart);
});