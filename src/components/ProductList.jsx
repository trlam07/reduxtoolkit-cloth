import React, {useEffect} from 'react'
import fakeApi from '../api'
import {useDispatch, useSelector} from 'react-redux'
import { setProducts } from '../redux/products/productSlice'
import {useNavigate} from 'react-router-dom'

function ProductList() {
  const dispatch = useDispatch();
  const navigator = useNavigate()
  const {products} = useSelector(state => state.product);

  const fetchProducts = async () => {
    try {
      const response = await fakeApi().get('');

      dispatch(setProducts(response.data))
    } catch (error) {
      console.log('error:', error)
    }
  }

  useEffect(()=>{fetchProducts()}, [])
  return products?.length === 0 ? (<>Loading...</>):(
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto',
      gap: 20,
      padding: 20,
      cursor: 'pointer',
    }}>
      {
        products.map((item, index)=>{
          const {id, category, description, image, price} = item
          return (
            <div onClick={()=>{
              navigator(`/${id}`)
            }} key={index} style={{
              border: '1px solid black',
              borderRadius: 10,
              padding: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10
              }}>
              <img style={{
                width: 200,
                height: 200,
              }} src={image} alt="image" />
              <div>
                <h3>{category}</h3>
                <p>{price}</p>
                <p>{description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductList