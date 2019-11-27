import Counter from '../counter/counter';

class Product {
    constructor(element) {
        this.product = element;
        this.price = this.product.querySelector('.js-product-price').innerHTML;
        this.counterNode = this.product.querySelector('.js-counter');
        this.count = this.product.querySelector('.js-product-amount');
        this.sum = this.product.querySelector('.js-product-sum');
        this.remove = this.product.querySelector('.js-product-remove');
        this.subscribers = [];

        this.init();
    }

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

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    fire() {
        this.subscribers.forEach(subscriber => {
            subscriber();
        });
    }

    updateCount(count) {
        this.count.textContent = count;
    }

    updateSum() {
        this.sum.innerHTML = this.price * this.count.innerHTML;
        this.fire();
    }

    removeInstance() {
        this.product.remove();
        this.fire();
    }
}

export default Product;
