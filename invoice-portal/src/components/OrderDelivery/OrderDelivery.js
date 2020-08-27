import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderComment from '../OrderComment/OrderComment';
import DeliveryChoice from '../DeliveryChoice/DeliveryChoice';

const OrderDelivery = props => {
    return (
        <>
            <OrderSummary
                order={props.order}
                total={props.total}
                moneyFormat={nb => props.moneyFormat(nb)} />

            <OrderComment saveComment={comment => props.saveComment(comment)} order={props.order} />
            <DeliveryChoice
                saveChoice={choice => props.saveDeliveryChoice(choice)}
                saveAddress={address => props.saveDeliveryAddress(address)}
                order={props.order}
                user={props.user} />

            <button
                disabled={!props.order.deliveryChoice || (props.order.deliveryChoice === 'delivery' && !props.order.deliveryAddressId)}
                onClick={props.submit}>Order</button>
        </>
    );
}

export default OrderDelivery;
