import React from 'react';
import styles from '../../styles/Main/Main.module.css';
import { Heart } from 'lucide-react';

const ProductList = ({ products }) => {
    return (
        <section className={styles.products}>
            {products.map(product => (
                <div key={product.id} className={styles.productCard}>
                    <img src={product.image} alt={product.title} className={styles.productImage} />
                    <h4>{product.title}</h4>
                    <div className={styles.productCardBottom}>
                        <p>Sign in or Create an account to see pricing</p>
                        <div><Heart /></div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProductList;
