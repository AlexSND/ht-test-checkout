class Summary {
    constructor(element) {
        this.summary = element;
        this.count = this.summary.querySelector('.js-summary-count');
        this.price = this.summary.querySelector('.js-summary-price');
        this.delivery = this.summary.querySelector('.js-summary-deivery-price');
        this.totalPrice = this.summary.querySelector('.js-total-price');
    }

    updateFields(data) {
        if (data) {
            this.count.innerHTML = data.count;
            this.price.innerHTML = data.sum;
            this.totalPrice.innerHTML = +this.delivery.innerHTML + +data.sum;
        }
    }
}

export default Summary;
