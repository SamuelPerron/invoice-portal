import React from 'react';
import Line from '../Line/Line';


const ProductsValidation = props => {
    return (
        <div className="ProductsValidation">
            <table>
                <thead>
                    <Line context={-1} />
                </thead>
                <tbody>
                    {props.order.map((product, index) => {
                        return <Line
                            moneyFormat={nb => props.moneyFormat(nb)}
                            product={product}
                            context={2}
                            openProductModal={() => props.openProductModal(product.id)}
                            key={index} />
                    })}
                </tbody>
            </table>
            <p>Total: <strong>{props.moneyFormat(props.total)}</strong></p>
            <button onClick={props.back}>Edit order</button>
            <button onClick={props.submit}>Next step</button>
        </div>
    );
}

export default ProductsValidation;
