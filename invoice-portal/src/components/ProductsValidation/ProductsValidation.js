import React, { useState, useEffect } from 'react';
import Line from '../Line/Line';
import Modal from '../Modal/Modal';
import Product from '../Product/Product';


const ProductsValidation = props => {
    // Remove duplicates
    const moneyFormat = nb => nb.toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 4
    });
    const [toggleModal, setToggleModal] = useState({ open: false, product: null });

    return (
        <div className="ProductsValidation">
            <table>
                <thead>
                    <Line context={-1} />
                </thead>
                <tbody>
                    {props.order.products.map((product, index) => {
                        return <Line
                            product={product}
                            context={2}
                            openModal={() => setToggleModal({ open: true, product: index })}
                            key={index} />
                    })}
                </tbody>
            </table>
            <p>Total: <strong>{props.order.total}</strong></p>
            <button onClick={() => props.submit()}>Next step</button>

            { toggleModal.open ?
                <Modal close={() => setToggleModal({ open: false, product: null })}>
                    <Product infos={props.order.products[toggleModal.product]} />
                </Modal>
            : null }
        </div>
    );
}

export default ProductsValidation;
