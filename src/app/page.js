import Main from '../components/Main/Main';

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

export default async function HomePage() {
    const products = await fetchProducts();

    return (
        <Main products={products} />
    );
}
