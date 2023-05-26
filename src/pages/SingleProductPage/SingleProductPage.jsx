import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../service/product";

const SingleProductPage = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        productService.getProduct(id)
            .then(res => setProduct(res.data))
    }, [])

    return (
        <div>
            <SingleProductCard 
            id={id}
             product={product}
             img={product.img}
             title={product.title}
             descr={product.descr}
             price={product.price}
            />
        </div>
    );
};

export default SingleProductPage;
