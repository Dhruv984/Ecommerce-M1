import React from 'react';
import {useParams} from 'react-router-dom';

import dummy from '../dummy_data/dummy';

function ProductDetails() {
    const productId= useParams().pid;
    console.log(productId);
    const product= dummy.find(p=> productId === p.id);
    console.log(product);
    return (
        <div>
            {product.name}
            {product.description}
        </div>
    )
}

export default ProductDetails
