'use client';
import React, { useState } from 'react';
import styles from '../../styles/Main/Main.module.css';
import Filter from './Filter';
import ProductList from './ProductList';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Recommend from './recommend';
import filters from '../../Filter.json'

const Main = ({ products }) => {
    const [selectedFilters, setSelectedFilters] = useState({});
    const [showFilters, setShowFilters] = useState(false);

   

    const handleFilterChange = (filterName, filterValue) => {
        setSelectedFilters((prev) => ({ ...prev, [filterName]: filterValue }));
    };

    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    };

    return (
        <main className={styles.main} >
            <div className={styles.intro}>
                <h1 className=''>Discover our products</h1>
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
