import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderComment from '../OrderComment/OrderComment';

const OrderDelivery = props => {
    return (
        <>
            <OrderSummary
                order={props.order}
                total={props.total}
                moneyFormat={nb => props.moneyFormat(nb)} />

            <OrderComment saveComment={comment => props.saveComment(comment)} order={props.order} />
        </>
    );
}

export default OrderDelivery;
