import React from 'react';

const Product = props => {
    return (
        <div className="Product">
            <h1>{props.infos.name}</h1>
            <h2>{props.infos.code}</h2>
            <p>{props.infos.description}</p>
        </div>
    );
}

export default Product;
