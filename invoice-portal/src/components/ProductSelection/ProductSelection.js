import React, { useState, useEffect } from 'react';
import Line from '../Line/Line';

const ProductSelection = props => {
    // Remove duplicates
    const moneyFormat = nb => nb.toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 4
    });

    const [total, setTotal] = useState(moneyFormat(0));
    const [quantities, setQuantities] = useState([]);

    const quantitiesChangedHandler = (id, subtotal) => {
        if (quantities.length > 0) {
            let newQuantities = [...quantities];
            let index = newQuantities.findIndex(q => q.id === id);
            newQuantities[index].subtotal = subtotal;
            setQuantities(newQuantities);
        }
    }

    useEffect(() => {
        setQuantities([...props.products].map(p => ({
            id: p.id,
            subtotal: 0
        })));
    }, [props.products]);

    useEffect(() => {
        setTotal(moneyFormat(quantities.reduce((a, b) => a + b.subtotal, 0)));
    }, [quantities]);

    return (
        <div className="ProductSelection">
            <table>
                <thead>
                    <Line context={-1} />
                </thead>
                <tbody>
                    {props.products.map((product, index) => {
                        return <Line
                            product={product}
                            context={1}
                            changeQuantity={subtotal => quantitiesChangedHandler(product.id, subtotal)}
                            key={index} />
                    })}
                </tbody>
            </table>
            <p>Total: <strong>{total}</strong></p>
            <button>Next step</button>
        </div>
    );
}

export default ProductSelection;
