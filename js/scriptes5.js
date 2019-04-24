"use strict"

var products = [
	{title:'Notebook', price: 2000},
	{title:'Mouse', price: 7},
	{title:'Keyboard', price: 12},
	{title:'Monitor', price: 280},
	{title:'Gamepad', price: 379},
];

var renderProduct =  function (title, price) {
	return `<div class="product-item">
				<h3>${title}</h3>
				<h3>${price}</h3>
			</div>`
};

var renderPage = function (list) { 
	var productList = list.map (item => renderProduct (item.title, item.price));
	document.querySelector(`.products`).innerHTML = productList.join('');
};

renderPage (products);
