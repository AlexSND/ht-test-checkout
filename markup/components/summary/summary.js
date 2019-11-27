class Summary {
    constructor(element) {
        this.summary = element;
        this.summaryList = this.summary.querySelector('.js-summary-list');
        this.countNode = this.summary.querySelector('.js-summary-count');
        this.sumNode = this.summary.querySelector('.js-summary-price');
        this.deliveryNode = this.summary.querySelector('.js-summary-deivery-price');
        this.totalPriceNode = this.summary.querySelector('.js-total-price');
        this.sum = 0;
        this.count = 0;
        this.discount = 0;
        this.promocodeInput = this.summary.querySelector('.js-promo-code');
        this.promocodeDescriptionNode = this.summary.querySelector('.js-promo-code-description');
        this.promocodes = [];
        this.applyPromocode = this.applyPromocode.bind(this);
        this.checkPromoCode = this.checkPromoCode.bind(this);
        this.init();
    }

    updateFields(data) {
        if (data) {
            this.sum = +data.sum;
            this.count = +data.count;
        }
        this.countNode.innerHTML = this.count;
        this.sumNode.innerHTML = this.sum;
        if (this.discount > 0) {
            const discountAmount = (+this.deliveryNode.innerHTML + +this.sum ) / 100 * this.discount;
            this.totalPriceNode.innerHTML = +this.deliveryNode.innerHTML + +this.sum - discountAmount;
        } else {
            this.totalPriceNode.innerHTML = +this.deliveryNode.innerHTML + +this.sum;
        }
    }

    checkPromoCode(event) {
        const value = event.target.value;
        this.promocodes.forEach(promocode => {
            if (promocode.code === value) {
                this.promocodeSuccess(promocode.discount);
            } else {
                this.promocodeWrong();
            }
        });
    }

    setPromocode(data) {
        this.promocodes.push(data);
    }

    promocodeSuccess(discount) {
        const text = document.createElement('p');
        text.innerText = `Промокод на скидку ${discount}%`;

        const applyButton = document.createElement('button');
        applyButton.classList.add('btn', 'invert');
        applyButton.innerText = 'Применить';

        applyButton.addEventListener('click', this.applyPromocode.bind(null, discount));

        this.promocodeDescriptionNode.appendChild(text);
        this.promocodeDescriptionNode.appendChild(applyButton);
    }

    promocodeWrong() {
        this.promocodeDescriptionNode.innerHTML = '';
    }

    applyPromocode(discount, event) {
        this.promocodeDescriptionNode.innerHTML = '';
        this.promocodeInput.value = '';
        this.promocodeInput.setAttribute('disabled', true);
        this.discount = discount;
        this.addSummaryItem();
        this.updateFields();
        event.preventDefault();
    }

    addSummaryItem() {
        const item = document.createElement('div');
        item.classList.add('summary-list__item');

        const title = document.createElement('div');
        title.classList.add('summary-list__title');
        title.innerText = 'Скидка';

        const value = document.createElement('div');
        value.classList.add('summary-list__value');
        value.innerText = `${this.discount}%`;

        item.appendChild(title);
        item.appendChild(value);

        this.summaryList.appendChild(item);
    }

    init() {
        this.updateFields();
        if (this.promocodeInput) {
            this.promocodeInput.addEventListener('input', this.checkPromoCode);
        }
    }
}

export default Summary;
