import Product from '../../components/product/product';

const products = document.querySelectorAll('.js-product');

products.forEach(product => {
    new Product(product);
});

