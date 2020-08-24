import React, { useState } from 'react';
import ProductsSelection from '../../components/ProductsSelection/ProductsSelection';
import ProductsValidation from '../../components/ProductsValidation/ProductsValidation';

const Order = props => {
    const [step, setStep] = useState(1);
    const [order, setOrder] = useState({});
    const [title, setTitle] = useState('Place an order');

    const submitOrderHandler = (order) => {
        setOrder(order);
        setStep(2);
    }

    const stepOneJsx = <ProductsSelection
                            products={props.products}
                            submit={order => submitOrderHandler(order)} />;

    const stepTwoJsx = <ProductsValidation
                            order={order}
                            submit={order => submitOrderHandler(order)} />;

    return (
        <div className="Order">
            <h1>{title}</h1>
            { step === 1 ? stepOneJsx : null }
            { step === 2 ? stepTwoJsx : null }
        </div>
    );
}

export default Order;
