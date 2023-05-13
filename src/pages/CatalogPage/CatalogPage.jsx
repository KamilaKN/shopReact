import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Filter from "../../components/Filter/Filter";
import Info from "../../components/Info/Info";
import Product from "../../components/Product/Product";
import styles from "./catalogpage.module.css";
import serviceApi from "../../service/product";
import ReactPaginate from "react-paginate";

const CatalogPage = () => {
    const [products, setProducts] = useState([]);
    const [sorted, setSorted] = useState("priceASC");
    const [gridView, setGridView] = useState(true);

    const [productOffset, setProductOffset] = useState(0); //с какого продукта начинать
    const productsPerPage = 4;
    const [forcePage, setForcePage] = useState(0)

    const endOffset = productOffset + productsPerPage; //число до котоорого нам нужно показывать product
    console.log(`Loading items from ${productOffset} to ${endOffset}`);
    const currentProducts = products.slice(productOffset, endOffset);
    const pageCount = Math.ceil(products.length / productsPerPage);

    const handlePageClick = (event) => {
        const newOffset = event.selected * productsPerPage;
        setProductOffset(newOffset);
        setForcePage(event.selected)
    };

    useEffect(() => {
        serviceApi
            .getProducts()
            .then((res) => {
                const sortedProducts = res.data.sort(
                    (a, b) => a.price - b.price
                );
                setProducts(sortedProducts);
            })
            .catch((err) => console.log(err.response.data));
    }, []);

    useEffect(() => {
        if (sorted == "priceASC") {
            const sortedProducts = [...products].sort(
                (a, b) => a.price - b.price
            ); //[...products] - копия массива products
            setProducts(sortedProducts);
        }
        if (sorted == "newestASC") {
            const sortedProduct = [...products].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            setProducts(sortedProduct);
        }
        if (sorted == "priceDESC") {
            const sortedProducts = [...products].sort(
                (a, b) => b.price - a.price
            ); //[...products] - копия массива products
            setProducts(sortedProducts);
        }
        if (sorted == "newestDESC") {
            const sortedProduct = [...products].sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            );
            setProducts(sortedProduct);
        }
        setForcePage(0)
        setProductOffset(0)
    }, [sorted]);

    const handleChangeGridView = (value) => {
        setGridView(value);
    };
    return (
        <div>
            <Breadcrumbs />
            <Filter setSorted={setSorted} sorted={sorted}
                handleChangeGridView={handleChangeGridView}
            />
            <div className={styles["products-wrapper"]}>
                {currentProducts.map((product) => {
                    return (
                        <Product
                            key={product._id}
                            title={product.title}
                            img={product.img}
                            price={product.price}
                            date={product.createdAt}
                            id={product._id}
                            gridView={gridView}
                        />
                    );
                })}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                containerClassName={styles["pagination-wrapper"]}
                pageLinkClassName={styles["pagination-page"]}
                nextClassName={styles["pagination-next"]}
                activeLinkClassName={styles["pagination-active"]}
                forcePage={forcePage }
            />
            <Info />
        </div>
    );
};

export default CatalogPage;
