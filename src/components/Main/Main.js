'use client';
import React, { useState } from 'react';
import styles from '../../styles/Main/Main.module.css';
import Filter from './Filter';
import ProductList from './ProductList';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Recommend from './recommend';

const Main = ({ products }) => {
    const [selectedFilters, setSelectedFilters] = useState({});
    const [showFilters, setShowFilters] = useState(false);

    const filters = [
        {
            name: 'category',
            label: 'Category',
            options: [
                { value: 'electronics', label: 'Electronics' },
                { value: 'jewelery', label: 'Jewelry' },
                { value: 'men-clothing', label: 'Men\'s Clothing' },
                { value: 'women-clothing', label: 'Women\'s Clothing' },
            ],
        },
        {
            name: 'price',
            label: 'Price Range',
            options: [
                { value: '0-50', label: '$0 - $50' },
                { value: '51-100', label: '$51 - $100' },
                { value: '101-200', label: '$101 - $200' },
                { value: '201+', label: '$201+' },
            ],
        },
        {
            name: 'price',
            label: 'Price Range',
            options: [
                { value: '0-50', label: '$0 - $50' },
                { value: '51-100', label: '$51 - $100' },
                { value: '101-200', label: '$101 - $200' },
                { value: '201+', label: '$201+' },
            ],
        },
        {
            name: 'price',
            label: 'Price Range',
            options: [
                { value: '0-50', label: '$0 - $50' },
                { value: '51-100', label: '$51 - $100' },
                { value: '101-200', label: '$101 - $200' },
                { value: '201+', label: '$201+' },
            ],
        },
        {
            name: 'price',
            label: 'Price Range',
            options: [
                { value: '0-50', label: '$0 - $50' },
                { value: '51-100', label: '$51 - $100' },
                { value: '101-200', label: '$101 - $200' },
                { value: '201+', label: '$201+' },
            ],
        },
    ];

    const handleFilterChange = (filterName, filterValue) => {
        setSelectedFilters((prev) => ({ ...prev, [filterName]: filterValue }));
    };

    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    };

    return (
        <main className={styles.main}>
            <div className={styles.intro}>
                <h1>Discover our products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <p>
                    Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </div>

            <hr className={styles.divider1} />

            <div className={styles.itemContainer}>
                <div className={styles.itemContainer2}>
                    <button onClick={toggleFilters} className={styles.toggleButton}>
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </button>
                    <span onClick={toggleFilters}>
                        {showFilters ? <ChevronLeft /> : <ChevronRight />}
                    </span>
                </div>
                <div className={styles.verticalLine}></div>
                <div>
                    <Recommend />
                </div>
            </div>

            <hr className={styles.divider1} />

            <div className={styles.contentWrapper}>
                {showFilters && (
                    <div className={`${styles.content} ${styles.filterWrapperMobile}`} >
                        <aside>
                            <h2>Filters</h2>
                            <Filter filters={filters} onChange={handleFilterChange} />
                        </aside>
                    </div>
                )}
                


                <ProductList products={products} />
            </div>
        </main>
    );
};

export default Main;
