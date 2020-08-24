import React from 'react';
import Line from '../Line/Line';


const ProductsSelection = props => {
    return (
        <div className="ProductsSelection">
            <table>
                <thead>
                    <Line context={-1} />
                </thead>
                <tbody>
                    {props.products.map((product, index) => {
                        return <Line
                            changeQuantity={qty => props.changeQuantity(product.id, qty)}
                            changeFormat={formatId => props.changeFormat(product.id, formatId)}
                            openProductModal={id => props.openProductModal(id)}
                            moneyFormat={props.moneyFormat}
                            product={product}
                            context={1}
                            key={index} />
                    })}
                </tbody>
            </table>
            <p>Total: <strong>{props.moneyFormat(props.total)}</strong></p>
            <button onClick={props.submit}>Next step</button>
        </div>
    );
}

export default ProductsSelection;
