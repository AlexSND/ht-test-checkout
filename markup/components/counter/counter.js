/**
 * @description Create counter instance
 * @class Counter
 */
class Counter {
    constructor(element) {
        this.counter = (element);
        this.counterInput = this.counter.querySelector('.js-counter-input');
        this.counterIncr = this.counter.querySelector('.js-counter-incr');
        this.counterDecr = this.counter.querySelector('.js-counter-decr');
        this.value = 1;
        this.subscribers = [];

        this.onChange = this.onChange.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        this.setEventListeners();
    }

    /**
     * @description Increase counter value by 1
     * @memberof Counter
     */
    increment() {
        this.value += 1;
        this.counterInput.value = this.value;
        this.fire();
    }

    /**
     * @description Decrease counter value by 1
     * @memberof Counter
     */
    decrement() {
        if (this.value > 1) {
            this.value -= 1;
            this.counterInput.value = this.value;
            this.fire();
        }
    }

    /**
     * @description Change value on input event
     * @memberof Counter
     */
    onChange() {
        this.value = this.counterInput.value;
        this.fire();
    }

    /**
     * @description Add new subscriber
     * @param {function} subscriber callback function
     * @memberof Counter
     */
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    /**
     * @description Run subscribers
     * @memberof Counter
     */
    fire() {
        this.subscribers.forEach(subscriber => {
            subscriber(this.value);
        });
    }

    /**
     * @description Set event listeners for increase & decrease counter value
     * @memberof Counter
     */
    setEventListeners() {
        this.counterInput.addEventListener('input', this.onChange);
        this.counterIncr.addEventListener('click', this.increment);
        this.counterDecr.addEventListener('click', this.decrement);
    }
}

export default Counter;
