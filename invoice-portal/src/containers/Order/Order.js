import React, { useState } from 'react';
import ProductSelection from '../../components/ProductSelection/ProductSelection';

const Order = props => {
    const [step, setStep] = useState(1);

    const submitOrderHandler = () => {
        console.log('Oh !');
    }

    const stepOneJsx = <ProductSelection
                            products={props.products}
                            submit={submitOrderHandler} />;

    return (
        <div className="Order">
            { step === 1 ? stepOneJsx : null }
        </div>
    );
}

export default Order;
