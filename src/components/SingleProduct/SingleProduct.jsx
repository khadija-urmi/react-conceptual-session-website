import './SingleProduct.css'

const SingleProduct = ({ product, handleSelectedProduct }) => {
    const { id, name, image, price, description, isFeatured } = product;

    return (
        <div className="card">
            <img className='img' src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className='device-price'>
                <p>${price}</p>
                <p>{isFeatured ? 'Feature Category' : 'not category'}</p>
            </div>
            <button onClick={() => { handleSelectedProduct(product) }}>Add to cart</button>
        </div>
    );
};

export default SingleProduct;