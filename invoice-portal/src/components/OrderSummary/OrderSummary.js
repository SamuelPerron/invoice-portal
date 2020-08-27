import React from 'react';
import OrderSummaryLine from './OrderSummaryLine/OrderSummaryLine';

const OrderSummary = props => {
    return (
        <div>
            <ul>
                { props.order.products.map(p => {
                    return <OrderSummaryLine product={p} moneyFormat={nb => props.moneyFormat(nb)} key={p.id} />
                }) }
            </ul>
            <strong>Total: {props.moneyFormat(props.total)}</strong>
        </div>
    );
}

export default OrderSummary;
