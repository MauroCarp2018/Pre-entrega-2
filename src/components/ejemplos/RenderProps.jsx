import React from 'react'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'


const RenderProps = ({categoria, changeCategory}) => {
    const[ productos, setProductos ] = useState([]) 

    useEffect(() => {
        !categoria ?
        getProducts().then(res =>setProductos(res))
        : getProductsByCategory(categoria).then((res)=>setProductos(res))
    }, [categoria])


  return (

    <div>
        <button onClick={()=>changeCategory('remera')} className='mx-4'>ver remeras</button>
        <button onClick={()=>changeCategory('pantalon')}>ver pantalón</button>
        {
            productos &&
            <ItemList products={productos}/>
        }
    </div>
  )
}

export default RenderProps