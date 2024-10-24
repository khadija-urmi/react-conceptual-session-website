import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar'
import AllProducts from './components/AllProduct/AllProducts'
import CartContainer from './components/CartContainer/CartContainer'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active",
  })
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [price, setPrice] = useState(0);
  const handleActiveStatus = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "about",
      })
    }
    console.log(isActive);
  }

  const handleAddIncreasePrice = (newPrice) => {
    setPrice(price + newPrice);
  }

  const handleDecreasePrice = (id) => {
    const DeleteProductPrice = selectedProduct.find((p) => p.id == id);
    setPrice(price - DeleteProductPrice.price);
  }

  const handleSelectedProduct = (product) => {
    const isExist = selectedProduct.find((p) => p.id == product.id);
    if (isExist) {
      alert("r add kora jabe na")
    }
    else {
      handleAddIncreasePrice(product.price);
      const newSelectProduct = [...selectedProduct, product];
      setSelectedProduct(newSelectProduct);
    }
  }
  const handleDelete = (id) => {
    handleDecreasePrice(id);
    const newProduct = selectedProduct.filter((p) => p.id != id);
    setSelectedProduct(newProduct);
  }


  return (
    <>
      <Navbar price={price} selectedProduct={selectedProduct}></Navbar>
      <div className='flex'>
        <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
        <CartContainer isActive={isActive} handleActiveStatus={handleActiveStatus} selectedProduct={selectedProduct} handleDelete={handleDelete}
        ></CartContainer>
      </div>
    </>
  )
}

export default App
