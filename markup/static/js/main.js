import Mainview from '../../components/main-section/main-section';
import ProductList from '../../components/product-list/product-list';
import Summary from '../../components/summary/summary';

document.addEventListener('DOMContentLoaded', () => {
    // new Mainview instance
    new Mainview();

    // variables
    const products = document.querySelectorAll('.js-product');
    const summaryNode = document.querySelector('.js-summary');

    // new product list instance
    const productList = new ProductList(products);

    // new summary instance
    const summary = new Summary(summaryNode);

    // add new promocode
    summary.setPromocode({
        code: 'promo_ok',
        discount: 10
    });

    /**
     * @description Update summary values
     * @param {Object} data { sum: number, count: number }
     */
    function updateSummary(data) {
        summary.updateFields(data);
    }

    // subscribe summary for product list updates
    productList.subscribe(updateSummary);

    // update product list total sum
    productList.updateProductsSum();
});
