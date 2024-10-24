

const Cart = ({ selectedProduct, handleDelete }) => {
    console.log(selectedProduct);
    return (
        <div>
            {selectedProduct.map((product) => (
                <div className="flex" key={product.id}>
                    <h4>{product.name}</h4>
                    <button onClick={() => { handleDelete(product.id) }}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;