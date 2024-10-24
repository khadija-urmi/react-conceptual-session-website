import { useEffect, useState } from 'react';
import './AllProducts.css'
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = ({ handleSelectedProduct }) => {

    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, [])

    return (
        <div>
            <h1>All Products :{allProduct.length}</h1>
            {
                allProduct.map((p) =>
                    <SingleProduct key={p.id} product={p}
                        handleSelectedProduct={handleSelectedProduct}></SingleProduct>)}
        </div>
    );
};

export default AllProducts;