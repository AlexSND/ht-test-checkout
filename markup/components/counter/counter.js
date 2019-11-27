class Counter {
    constructor(element) {
        this.counter = (element);
        this.counterInput = this.counter.querySelector('.js-counter-input');
        this.counterIncr = this.counter.querySelector('.js-counter-incr');
        this.counterDecr = this.counter.querySelector('.js-counter-decr');
        this.value = 1;
        this.subscribers = [];
        this.setEventListeners();
    }

    increment() {
        this.value += 1;
        this.counterInput.value = this.value;
        this.onChange();
    }

    decrement() {
        if (this.value > 1) {
            this.value -= 1;
            this.counterInput.value = this.value;
            this.onChange();
        }
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    onChange() {
        this.subscribers.forEach(subscriber => {
            subscriber(this.value);
        });
    }

    setEventListeners() {
        this.counterIncr.addEventListener('click', this.increment.bind(this));
        this.counterDecr.addEventListener('click', this.decrement.bind(this));
    }
}

export default Counter;

// document.addEventListener('DOMContentLoaded', () => {
//     if (document.querySelectorAll('.js-counter').length > 0) {
//         document.querySelectorAll('.js-counter').forEach(counter => {
//             new Counter(counter);
//         });
//     }
// });
