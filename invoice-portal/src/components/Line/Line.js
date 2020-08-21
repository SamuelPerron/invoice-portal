import React, { useState, useEffect } from 'react';
import './Line.css';

const Line = props => {
    const [product, setProduct] = useState(props.product);
    const [subtotal, setSubtotal] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const moneyFormat = nb => nb.toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 4
    });

    const productFormat = () => {
        let formattedProduct = {...props.product};
        formattedProduct.formattedUnitPrice = moneyFormat(formattedProduct.unitPrice);
        return formattedProduct;
    }

    const calculateSubtotal = () => {
        if (product) {
            let result = 0;
            result = product.unitPrice * quantity;
            props.changeQuantity(result);
            return moneyFormat(result);
        }
    }

    useEffect(() => {
        if (props.product) {
            setProduct(productFormat());
            setSubtotal(calculateSubtotal());
        }
    }, [props.product]);

    useEffect(() => {
        setSubtotal(calculateSubtotal());
    }, [quantity])

    return (
        <tr className="Line">
            { props.context === -1 ?
                <>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Dimensions</th>
                    <th>Unit price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </>
            : null }

            { props.context === 1 ?
                <>
                    <td>[{product.code}]</td>
                    <td>{product.name}</td>
                    <td>({product.dimensions})</td>
                    <td>{product.formattedUnitPrice}</td>
                    <td><input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity} /></td>
                    <td>{subtotal}</td>
                </>
            : null }
        </tr>
    );
}

export default Line;
