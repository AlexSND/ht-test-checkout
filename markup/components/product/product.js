import Counter from '../counter/counter';

/**
 * @description Create product
 * @class Product
 */
class Product {
    constructor(element) {
        this.product = element;
        this.price = this.product.querySelector('.js-product-price').innerHTML;
        this.counterNode = this.product.querySelector('.js-counter');
        this.count = this.product.querySelector('.js-product-count');
        this.sum = this.product.querySelector('.js-product-sum');
        this.remove = this.product.querySelector('.js-product-remove');
        this.subscribers = [];

        this.init();
    }

    /**
     * @description Instance init
     * @memberof Product
     */
    init() {
        if (this.counterNode) {
            this.counter = new Counter(this.counterNode);
            this.counter.subscribe((value) => {
                this.updateCount(value);
                this.updateSum();
            });
        }
        this.updateSum();
        this.remove.addEventListener('click', this.removeInstance.bind(this));
    }

    /**
     * @description Add new subscriber
     * @param {function} subscriber callback function
     * @memberof Product
     */
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    /**
     * @description Run subscribers
     * @memberof Product
     */
    fire() {
        this.subscribers.forEach(subscriber => {
            subscriber();
        });
    }

    /**
     * @description Update product count
     * @param {number} count
     * @memberof Product
     */
    updateCount(count) {
        this.count.textContent = count;
    }

    /**
     * @description Update sum (count + price)
     * @memberof Product
     */
    updateSum() {
        this.sum.innerHTML = this.price * this.count.innerHTML;
        this.fire();
    }

    /**
     * @description Remove product from DOM
     * @memberof Product
     */
    removeInstance() {
        this.product.remove();
        this.fire();
    }
}

export default Product;
