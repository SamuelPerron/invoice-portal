import React, { useState, useEffect } from 'react';
import Line from '../Line/Line';
import Modal from '../Modal/Modal';
import Product from '../Product/Product';


const ProductsSelection = props => {
    const [total, setTotal] = useState(props.moneyFormat(0));
    const [quantities, setQuantities] = useState([]);

    const quantitiesChangedHandler = (id, subtotal, format) => {
        if (quantities.length > 0) {
            let newQuantities = [...quantities];
            let index = newQuantities.findIndex(q => q.id === id);
            newQuantities[index].subtotal = subtotal;
            newQuantities[index].formatId = format.id;
            setQuantities(newQuantities);
        }
    }

    const constructOrder = () => {
        // Merging products with their respective quantities
        // Then removing products that don't have any quantity
        let order = {};
        order.products = [...props.products].map(p => {
            let quantityIndex = quantities.findIndex(q => q.id === p.id);
            p.quantity = quantities[quantityIndex].subtotal / p.unitPrice;
            p.formatId = quantities[quantityIndex].formatId;
            p.subtotal = quantities[quantityIndex].subtotal;
            return p;
        }).filter(p => p.quantity > 0);
        order.total = total;
        return order;
    }

    useEffect(() => {
        setQuantities([...props.products].map(p => ({
            id: p.id,
            subtotal: 0
        })));
    }, [props.products]);

    useEffect(() => {
        setTotal(props.moneyFormat(quantities.reduce((a, b) => a + b.subtotal, 0)));
    }, [quantities]);

    return (
        <div className="ProductsSelection">
            <table>
                <thead>
                    <Line context={-1} />
                </thead>
                <tbody>
                    {props.products.map((product, index) => {
                        return <Line
                            openProductModal={id => props.openProductModal(id)}
                            moneyFormat={props.moneyFormat}
                            product={product}
                            context={1}
                            changeQuantity={(subtotal, format) => quantitiesChangedHandler(product.id, subtotal, format)}
                            key={index} />
                    })}
                </tbody>
            </table>
            <p>Total: <strong>{total}</strong></p>
            <button onClick={() => props.submit(constructOrder())}>Next step</button>
        </div>
    );
}

export default ProductsSelection;
