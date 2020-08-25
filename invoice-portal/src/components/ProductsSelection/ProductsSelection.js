import React from 'react';
import Line from '../Line/Line';
import Search from '../Search/Search';

const ProductsSelection = props => {
    return (
        <div className="ProductsSelection">
            <Search products={props.products} search={props.search} searchHandler={v => props.searchHandler(v)} />

            <table>
                <thead>
                    <Line context={-1} />
                </thead>
                <tbody>
                    {props.products.map((product, index) => {
                        return <Line
                            changeQuantity={qty => props.changeQuantity(product.id, qty)}
                            changeFormat={formatId => props.changeFormat(product.id, formatId)}
                            openProductModal={() => props.openProductModal(product.id)}
                            moneyFormat={props.moneyFormat}
                            product={product}
                            context={1}
                            key={index} />
                    })}
                </tbody>
            </table>
            <p>Total: <strong>{props.moneyFormat(props.total)}</strong></p>
            <button onClick={props.submit} disabled={props.total <= 0}>Next step</button>
        </div>
    );
}

export default ProductsSelection;
