import React from 'react';

const OrderSummaryLine = props => {
    return (
        <li>
            <strong>[{props.product.code}] {props.product.name}</strong><br />
            <span>
                {props.product.quantity} {props.product.format.name}(s) ({props.product.quantity * props.product.format.qty} units)
                { props.product.boQuantity > 0 ?
                    <span> (+ {props.product.boQuantity} {props.product.format.name}(s) / bo)</span>
                : null }
            </span><br />
        <span>{props.moneyFormat(props.product.subtotal)}</span>
        </li>
    );
}

export default OrderSummaryLine;
