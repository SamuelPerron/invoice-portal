import React, { useState, useEffect } from 'react';
import './Line.css';

const Line = props => {
    const [product, setProduct] = useState(props.product);
    const [subtotal, setSubtotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [format, setFormat] = useState({});
    const [quantityAfterFormat, setQuantityAfterFormat] = useState(0);

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
            result = (product.unitPrice * format.qty) * quantity;
            props.changeQuantity(result, format);
            return moneyFormat(result);
        }
    }

    useEffect(() => {
        if (props.product) {
            setProduct(productFormat());
            if (props.context === 1) {
                if (props.product.quantity) {
                    setQuantity(props.product.quantity)
                    setFormat(props.product.formats.find(f => f.id === props.product.formatId));
                } else {
                    setSubtotal(calculateSubtotal());
                    setFormat(props.product.formats[0]);
                }
            } else if (props.context === 2) {
                setFormat(props.product.formats.find(f => f.id === props.product.formatId));
            }
        }
    }, [props.product]);

    useEffect(() => {
        if (props.context === 1) {
            setSubtotal(calculateSubtotal());
        } else if (props.context === 2) {
            setQuantityAfterFormat(props.product.quantity / format.qty);
        }
    }, [quantity, format])

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
                    <td onClick={props.openModal}><span className="name">{product.name}</span></td>
                    <td>({product.dimensions})</td>
                    <td>{product.formattedUnitPrice}</td>
                    <td><select
                            onChange={(e) => setFormat(props.product.formats.find(f => f.id === parseInt(e.target.value)))}
                            defaultValue={props.product.formatId}>
                        {props.product.formats.map((f, index) => {
                            return <option value={f.id} key={index}>{f.name} ({f.qty} units)</option>
                        })}
                    </select></td>
                    <td><input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity} /></td>
                    <td>{subtotal}</td>
                </>
            : null }

            { props.context === 2 ?
                <>
                    <td>[{product.code}]</td>
                    <td onClick={props.openModal}><span className="name">{product.name}</span></td>
                    <td>({product.dimensions})</td>
                    <td>{product.formattedUnitPrice}</td>
                    <td>{format.name} ({format.qty} units)</td>
                    <td>{quantityAfterFormat} ({product.quantity} units)</td>
                    <td>{moneyFormat(product.subtotal)}</td>
                </>
            : null }
        </tr>
    );
}

export default Line;
