import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const { 
        query: { id },
    } = useRouter()

    return (
        <div>
            Esta es la pagina de prueba del producto: {id}
        </div>
    )
}

export default ProductItem
