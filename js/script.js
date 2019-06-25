"use strict"

const products = [
	{title:'Notebook', price: 2000},
	{title:'Mouse', price: 7},
	{title:'Keyboard', price: 12},
	{title:'Monitor', price: 280},
	{title:'Gamepad', price: 379},
];

const renderProduct = (title, price) => {
	return `<div class="product-item">
				<h3>${title}</h3>
				<p>${price}</p>
				<button class="add-goods-button">Добавить</button>
			</div>`
};

const renderPage = list => { 
	let productList = list.map (item => renderProduct (item.title, item.price));
	document.querySelector(`.products`).innerHTML = productList.join('');
};

renderPage (products);


