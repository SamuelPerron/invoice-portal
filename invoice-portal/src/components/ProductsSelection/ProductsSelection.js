import React, { useState, useEffect } from 'react';
import Line from '../Line/Line';
import Modal from '../Modal/Modal';
import Product from '../Product/Product';


const ProductsSelection = props => {
    // Remove duplicates
    const moneyFormat = nb => nb.toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 4
    });

    const [total, setTotal] = useState(moneyFormat(0));
    const [quantities, setQuantities] = useState([]);
    const [toggleModal, setToggleModal] = useState({ open: false, product: null });

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
        setTotal(moneyFormat(quantities.reduce((a, b) => a + b.subtotal, 0)));
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
                            product={product}
                            context={1}
                            changeQuantity={(subtotal, format) => quantitiesChangedHandler(product.id, subtotal, format)}
                            openModal={() => setToggleModal({ open: true, product: index })}
                            key={index} />
                    })}
                </tbody>
            </table>
            <p>Total: <strong>{total}</strong></p>
            <button onClick={() => props.submit(constructOrder())}>Next step</button>

            { toggleModal.open ?
                <Modal close={() => setToggleModal({ open: false, product: null })}>
                    <Product infos={props.products[toggleModal.product]} />
                </Modal>
            : null }
        </div>
    );
}

export default ProductsSelection;
