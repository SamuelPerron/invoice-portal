import React from 'react';
import Line from '../Line/Line';


const ProductsValidation = props => {
    const fillerTr = [...Array(5 - props.order.products.length).keys()].map(i => {
        return (
            <tr key={i}>
                {[...Array(7).keys()].map(k => <td key={k} /> )}
            </tr>
        )
    });

    return (
        <div className="ProductsValidation">
            <div className="table-wrapper">
                <table>
                    <thead>
                        <Line context={-1} />
                    </thead>
                    <tbody>
                        {props.order.products.map((product, index) => {
                            return <Line
                                moneyFormat={nb => props.moneyFormat(nb)}
                                product={product}
                                context={2}
                                openProductModal={() => props.openProductModal(product.id)}
                                key={index} />
                        })}
                        {fillerTr}
                    </tbody>

                    <caption>
                        <div className="psa">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis lobortis malesuada. Sed maximus imperdiet tempus. Quisque a gravida ligula.</div>
                        <p>Total: <strong>{props.moneyFormat(props.total)}</strong></p>
                        <button onClick={props.back}>Edit order</button>
                        <button onClick={props.submit}>Next step</button>
                    </caption>
                </table>
            </div>
        </div>
    );
}

export default ProductsValidation;
