import Product from '../product/product';

class ProductList {
    constructor(products) {
        this.productList = document.querySelector('.js-products-list');
        this.products = products;
        this.productsSum = this.productList.querySelector('.js-products-sum');

        this.init();
    }

    init() {
        this.products.forEach(product => {
            const productInstance = new Product(product);
            productInstance.subscribe(this.updateProductsSum.bind(this));
        });
    }

    updateProductsSum() {
        this.products = this.productList.querySelectorAll('.js-product');
        let sum = 0;
        this.products.forEach(product => {
            const productSum = product.querySelector('.js-product-sum').innerHTML;
            sum += +productSum;
        });
        this.productsSum.innerHTML = sum;
    }
}

export default ProductList;
