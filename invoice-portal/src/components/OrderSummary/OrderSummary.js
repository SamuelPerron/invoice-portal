import React from 'react';
import OrderSummaryLine from './OrderSummaryLine';

const OrderSummary = props => {
    return (
        <div>
            <ul>
                { props.order.map(p => {
                    return <OrderSummaryLine product={p} moneyFormat={nb => props.moneyFormat(nb)} />
                }) }
            </ul>
            <strong>Total: {props.moneyFormat(props.total)}</strong>
        </div>
    );
}

export default OrderSummary;
