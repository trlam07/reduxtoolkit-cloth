import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import fakeApi from '../api';
import {useDispatch, useSelector} from 'react-redux'
import { setProduct } from '../redux/products/productSlice';

function ProductDetail() {
  const {id} = useParams();
  console.log({id})

  const dispatch = useDispatch()
  const {product} = useSelector(state => state.product)
  console.log('product from redux:', product)

  const fetchProductDetail = async(productId)=>{
    const response = await fakeApi().get(`/${productId}`)
    console.log('response:', response)
    dispatch(setProduct(response.data))
  }

  useEffect(()=>{
    if (id){fetchProductDetail(id)}
  }, [id])


  return Object.keys(product).length === 0 ? (<>Loading...</>) : (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      height: '100vh'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'calc(100vw/2'
        }}>
        <img src={product?.image} alt="product-image" style={{
          width: 300,
          height: 300
        }} />
      </div>
      
      <div style={{
        borderLeft: '1px solid black',
        paddingLeft: 10
        }}>
        <h1>{product?.title}</h1>
        <p>{product?.price}</p>
        <p>{product?.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail