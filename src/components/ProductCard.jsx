import React from 'react'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
  }
  return (
    <Link to={`/product/${product.id}`} >
    <div className='bg-white p-4 shadow rounded-2xl relative border border-gray-200 transform transition-transform duration-300 hover:scale-105'>
     <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
     <h3 className="text-lg font-semibold">{product.name}</h3>
     <p className="text-sm text-gray-600">${product.price}</p>
    
     <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300'
     onClick={(e) => handleAddToCart(e, product)}>
        <span className='group-hover:block'>+</span>
        <span className='hidden group-hover:block'>Add to Cart</span>
    </div>
    </div>
    </Link>
    
  )
}

export default ProductCard
