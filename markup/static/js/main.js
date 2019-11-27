import ProductList from '../../components/product-list/product-list';
import Summary from '../../components/summary/summary';

document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.js-product');
    const summaryNode = document.querySelector('.js-summary');

    const productList = new ProductList(products);
    const summary = new Summary(summaryNode);

    summary.setPromocode({
        code: 'promo_ok',
        discount: 10
    });

    function updateSummary(data) {
        summary.updateFields(data);
    }

    productList.subscribe(updateSummary);
    productList.updateProductsSum();
});
