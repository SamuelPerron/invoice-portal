import React, { useState, useEffect } from 'react';
import './Line.css';

const Line = props => {
    const [product, setProduct] = useState(props.product);
    const [subtotal, setSubtotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [formatUnits, setFormatUnits] = useState(0);

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
            result = (product.unitPrice * formatUnits) * quantity;
            props.changeQuantity(result);
            return moneyFormat(result);
        }
    }

    useEffect(() => {
        if (props.product) {
            setProduct(productFormat());
            setSubtotal(calculateSubtotal());
            setFormatUnits(props.product.formats[0].qty);
        }
    }, [props.product]);

    useEffect(() => {
        setSubtotal(calculateSubtotal());
    }, [quantity, formatUnits])

    return (
        <tr className="Line">
            { props.context === -1 ?
                <>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Dimensions</th>
                    <th>Unit price</th>
                    <th>Format</th>
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
                    <td><select onChange={(e) => setFormatUnits(parseFloat(e.target.value))}>
                        {props.product.formats.map((format, index) => {
                            return <option value={format.qty} key={index}>{format.name} ({format.qty} units)</option>
                        })}
                    </select></td>
                    <td><input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity} /></td>
                    <td>{subtotal}</td>
                </>
            : null }
        </tr>
    );
}

export default Line;
