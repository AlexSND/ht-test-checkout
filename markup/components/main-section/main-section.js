/**
 * @description Switching between steps
 * @class Mainview
 */
class Mainview {
    constructor() {
        this.checkoutSteps = document.querySelectorAll('.js-checkout-step');
        this.stepLinks = document.querySelectorAll('.js-checkout-step-link');
        this.showActive = this.showActive.bind(this);

        this.setEventListeners();
    }

    /**
     * @description Set event listeners on step links
     * @memberof Mainview
     */
    setEventListeners() {
        this.stepLinks.forEach(link => {
            link.addEventListener('click', this.showActive);
        });
    }

    /**
     * @description Show active step
     * @param {object} event Event object
     * @memberof Mainview
     */
    showActive(event) {
        const target = event.target.getAttribute('href');
        this.activeTarget = target;
        this.checkoutSteps.forEach(step => {
            const id = `#${step.getAttribute('id')}`;
            step.classList.add('hidden');

            if (id === this.activeTarget) {
                step.classList.remove('hidden');
            }
        });
        this.setActiveLink();
        event.preventDefault();
    }

    /**
     * @description Set active class for active step link
     * @memberof Mainview
     */
    setActiveLink() {
        this.stepLinks.forEach(link => {
            const linkTarget = link.getAttribute('href');
            if (linkTarget === this.activeTarget) {
                if (link.parentElement.tagName === 'LI') {
                    link.parentElement.classList.add('active');
                } else {
                    link.classList.add('active');
                }
            } else {
                if (link.parentElement.tagName === 'LI') {
                    link.parentElement.classList.remove('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }
}

export default Mainview;
