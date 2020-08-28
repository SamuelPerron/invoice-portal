import React from 'react';
import Line from '../Line/Line';
import Search from '../Search/Search';
import './ProductsSelection.scss';

const ProductsSelection = props => {
    const fillerTr = [...Array(5 - props.products.length).keys()].map(i => {
        return (
            <tr key={i}>
                <td colSpan="7"/>
            </tr>
        )
    });
    const emptyProducts = <tr><td colSpan="7">No products matching these filters</td></tr>;

    return (
        <div className="ProductsSelection">
            <Search products={props.products} search={props.search} searchHandler={v => props.searchHandler(v)} />

            <div className="table-wrapper">
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
                        {fillerTr}
                        { [...props.products].filter(p => !p.hide).length === 0 ?
                            emptyProducts
                        : null }
                    </tbody>
                    <caption>
                        <div className="psa">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis lobortis malesuada. Sed maximus imperdiet tempus. Quisque a gravida ligula.</div>
                        <p>Subtotal: <strong>{props.moneyFormat(props.total)}</strong></p>
                        <button onClick={props.submit} disabled={props.total <= 0}>Next step</button>
                    </caption>
                </table>
            </div>
        </div>
    );
}

export default ProductsSelection;
