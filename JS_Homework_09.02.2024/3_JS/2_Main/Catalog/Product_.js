class Products {
	async getAllProducts() {
		console.log('Start fetching data')

		// 1 Method

		// await fetch('https://fakestoreapi.com/products?limit=5')
		// 	.then(res=>res.json())
		// 	.then(json=>console.log(json))


		// 2 Method

		// let products = await fetch('https://fakestoreapi.com/products?limit=5')
		// products = await products.json()
		// console.log(products)


		// 3 Method

		let products = await fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => {
				return json
			})
		console.log('Finish fetching data')

		return products
	}

	displayProducts(products) {
		console.log('PRODUCTS FOR DISPLAY', products)
	}
}


// start point
document.addEventListener('DOMContentLoaded', async () => {
	// init
	const p = new Products() // p - products

	// use
	const products = await p.getAllProducts()
	p.displayProducts(products)
})