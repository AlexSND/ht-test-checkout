import Product from '../product/product';

class ProductList {
    constructor(products) {
        this.productList = document.querySelector('.js-products-list');
        this.products = products;
        this.productsSumNode = this.productList.querySelector('.js-products-sum');
        this.productsCount = 0;
        this.productsSum = 0;
        this.subscribers = [];
        this.init();
    }

    init() {
        this.products.forEach(product => {
            const productInstance = new Product(product);
            productInstance.subscribe(this.updateProductsSum.bind(this));
        });
        this.updateProductsSum();
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    fire() {
        this.subscribers.forEach(subscriber => {
            subscriber({
                sum: this.productsSum,
                count: this.productsCount
            });
        });
    }

    updateProductsSum() {
        this.products = this.productList.querySelectorAll('.js-product');
        let sum = 0;
        let count = 0;
        this.products.forEach(product => {
            const productCount = product.querySelector('.js-product-count').innerHTML;
            const productSum = product.querySelector('.js-product-sum').innerHTML;
            count += +productCount;
            sum += +productSum;
        });
        this.productsCount = count;
        this.productsSum = sum;
        this.productsSumNode.innerHTML = sum;
        this.fire();
    }
}

export default ProductList;
