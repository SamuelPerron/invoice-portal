import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderDelivery = props => {
    return (
        <OrderSummary order={props.order} total={props.total} moneyFormat={nb => props.moneyFormat(nb)} />
    );
}

export default OrderDelivery;
