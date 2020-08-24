import React, { useState, useEffect } from 'react';
import ProductsSelection from '../../components/ProductsSelection/ProductsSelection';
import ProductsValidation from '../../components/ProductsValidation/ProductsValidation';

const Order = props => {
    const [step, setStep] = useState(1);
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState({});
    const [title, setTitle] = useState('Place an order');

    useEffect(() => {
        setProducts(props.products);
    }, [props.products]);

    const submitOrderHandler = order => {
        setOrder(order);
        setTitle('Validate order');
        setStep(2);
    }

    const validateOrderHandler = order => {
        console.log(order);
    }

    const goBackHandler = oldOrder => {
        setTitle('Modify order');
        setProducts([...products].map(p => {
            const orderProduct = oldOrder.products.find(oP => oP.id === p.id);
            if (orderProduct) {
                // If the product was in the old order
                p.quantity = orderProduct.quantity;
                p.formatId = orderProduct.formatId;
            }
            return p;
        }));
        setStep(1);
    }

    const stepOneJsx = <ProductsSelection
                            products={products}
                            submit={order => submitOrderHandler(order)} />;

    const stepTwoJsx = <ProductsValidation
                            order={order}
                            submit={order => validateOrderHandler(order)}
                            back={oldOrder => goBackHandler(oldOrder)} />;

    return (
        <div className="Order">
            <h1>{title}</h1>
            { step === 1 ? stepOneJsx : null }
            { step === 2 ? stepTwoJsx : null }
        </div>
    );
}

export default Order;
