import React, { useState } from 'react';
import ProductsSelection from '../../components/ProductsSelection/ProductsSelection';

const Order = props => {
    const [step, setStep] = useState(1);

    const submitOrderHandler = (order) => {
        console.log(order);
    }

    const stepOneJsx = <ProductsSelection
                            products={props.products}
                            submit={order => submitOrderHandler(order)} />;

    return (
        <div className="Order">
            { step === 1 ? stepOneJsx : null }
        </div>
    );
}

export default Order;
