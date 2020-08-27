import React from 'react';

const OrderComment = props => {
    return (
        <>
            <h3>Add a comment to your order</h3>
            <textarea onChange={e => props.saveComment(e.target.value)}>{props.order.comment}</textarea>
        </>
    );
}

export default OrderComment;
