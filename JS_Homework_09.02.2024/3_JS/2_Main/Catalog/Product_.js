class Products {

	#BASE_URL = 'https://fakestoreapi.com'

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


		// Method to get all products

		let products = await fetch('https://fakestoreapi.com/products?limit=9')
			.then(res => res.json())
			.then(json => {
				return json
			})
		console.log('Finish fetching data')

		return products
	}

	async addNewProduct() {
		await fetch(`${this.#BASE_URL}/products`, {
			method: 'POST',
			body: JSON.stringify(
				{
					title: 'test product',
					price: 13.5,
					description: 'lorem ipsum set',
					image: 'https://i.pravatar.cc',
					category: 'electronic'
				}
			)
		})
			.then(res => res.json())
			.then(json => console.log('Add new Product', json))
	}

	async updateProduct(id = 7) {
		await fetch(`${this.#BASE_URL}/products/${id}`, {
			method: 'PUT',
			body: JSON.stringify(
				{
					title: 'test product',
					price: 13.5,
					description: 'lorem ipsum set',
					image: 'https://i.pravatar.cc',
					category: 'electronic'
				}
			)
		})
			.then(res => res.json())
			.then(json => console.log('Updated information', json))
	}

	async deleteProduct(id = 6) {
		fetch('https://fakestoreapi.com/products/6', {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(json => console.log(json))
	}

	displayProducts(products) {
		console.log('PRODUCTS FOR DISPLAY', products)
		let singleProductItem = `<div class="grid-item">
\t\t\t\t\t\t<div class="product">
\t\t\t\t\t\t\t<div class="product_heading">
\t\t\t\t\t\t\t\t<div class="product_new">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="span_prod_new">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tНОВЕ
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<div class="product_heart">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="span_prod_heart">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="/IMAGES/2_Main/Catalog_images/Prod_Heart.png" alt="Product heart">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t<div class="product_box">
\t\t\t\t\t\t\t\t<!--img-->
\t\t\t\t\t\t\t\t<div class="product_img">
\t\t\t\t\t\t\t\t\t<img src="/IMAGES/2_Main/Catalog_images/SingleWash.png" alt="">
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<!--content-->
\t\t\t\t\t\t\t\t<div class="product-cont">
\t\t\t\t\t\t\t\t\t<!--name producer model-->
\t\t\t\t\t\t\t\t\t<div class="product_label_main_info">
\t\t\t\t\t\t\t\t\t\t<!--wash name-->
\t\t\t\t\t\t\t\t\t\t<span class="product_wash_name">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tГранітна мийка з однією чашею
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t<!--product producer-->
\t\t\t\t\t\t\t\t\t\t<span class="product_producer_name">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t_MAESTRO
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t<!--product model-->
\t\t\t\t\t\t\t\t\t\t<span class="product_model_name">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRadea R10 40.40 M-TG
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t<!--price-->
\t\t\t\t\t\t\t\t\t<div class="product_buy_info">
\t\t\t\t\t\t\t\t\t\t<div class="product_label_buy_info">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="price">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 999 грн
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t<span class="inStock">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tВ наявності
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t<div class="add_to_cart">
\t\t\t\t\t\t\t\t\t\t\t<button class="add_product_to_cart">
\t\t\t\t\t\t\t\t\t\t\t\t<img src="/IMAGES/2_Main/Catalog_images/CartBtn.png"
\t\t\t\t\t\t\t\t\t\t\t\t\t\t alt="add to cart button with image inside">
\t\t\t\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>`

		let html = ''
		products.forEach((e) => {
			html += `<div class="grid-item">

<div class="product">
<div class="product_heading">
<div class="product_new">
<span class="span_prod_new">
НОВЕ
</span>
</div>
<div class="product_heart">
<span class="span_prod_heart">
<img src="/IMAGES/2_Main/Catalog_images/Prod_Heart.png" alt="Product heart">
</span>
</div>
</div>

\t\t\t\t\t\t\t<div class="product_box">
\t\t\t\t\t\t\t\t<!--img-->
\t\t\t\t\t\t\t\t<div class="product_img">
\t\t\t\t\t\t\t\t\t<img src="${e.image}" alt="">
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<!--content-->
\t\t\t\t\t\t\t\t<div class="product-cont">
\t\t\t\t\t\t\t\t\t<!--name producer model-->
\t\t\t\t\t\t\t\t\t<div class="product_label_main_info">
\t\t\t\t\t\t\t\t\t\t<!--wash name-->
\t\t\t\t\t\t\t\t\t\t<span class="product_wash_name">
\t\t\t\t\t\t\t\t\t\t\tГранітна мийка з однією чашею
\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t<!--product producer-->
\t\t\t\t\t\t\t\t\t\t<span class="product_producer_name">
\t\t\t\t\t\t\t\t\t\t ${e.title}
\t\t\t\t\t\t\t\t\t\t</span>

\t\t\t\t\t\t\t\t\t\t<!--product model-->
\t\t\t\t\t\t\t\t\t\t<span class="product_model_name">
\t\t\t\t\t\t\t\t\t\t\t ${e.id}
\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t<!--price-->
\t\t\t\t\t\t\t\t\t<div class="product_buy_info">
\t\t\t\t\t\t\t\t\t\t<div class="product_label_buy_info">
\t\t\t\t\t\t\t\t\t\t\t<span class="price">
\t\t\t\t\t\t\t\t\t\t\t\t5 999 грн
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t<span class="inStock">
\t\t\t\t\t\t\t\t\t\t\t\tВ наявності
\t\t\t\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t<div class="add_to_cart">
\t\t\t\t\t\t\t\t\t\t\t<button class="add_product_to_cart">
\t\t\t\t\t\t\t\t\t\t\t\t<img src="/IMAGES/2_Main/Catalog_images/CartBtn.png"
\t\t\t\t\t\t\t\t\t\t\t\t\t\t alt="add to cart button with image inside">
\t\t\t\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>`


			// get area for products
			let productArea = document.querySelector('#products_area')

			// set HTML in area
			productArea.innerHTML = html
		})
	}
}


// start point
document.addEventListener('DOMContentLoaded', async () => {
	// init
	const p = new Products() // p - products

	// use
	const products = await p.getAllProducts()
	p.displayProducts(products)
	await p.addNewProduct()
	await p.updateProduct()
	await p.deleteProduct()
})