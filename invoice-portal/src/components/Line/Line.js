import React from 'react';
import './Line.css';

const Line = props => {
    return (
        <tr className="Line">
            { props.context === -1 ?
                <>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Dimensions</th>
                    <th>Unit price</th>
                    <th>Format</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </>
            : null }

            { props.context === 1 && !props.product.hide ?
                <>
                    <td>[{props.product.code}]</td>
                    <td onClick={props.openProductModal}><span className="name">{props.product.name}</span></td>
                    <td>({props.product.dimensions})</td>
                    <td>{props.moneyFormat(props.product.unitPrice)}</td>
                    <td><div className="select"><select
                            onChange={(e) => props.changeFormat(parseInt(e.target.value))}
                            defaultValue={props.product.format.id}>
                        {props.product.formats.map((f, index) => {
                            return <option value={f.id} key={index}>{f.name} ({f.qty} units)</option>
                        })}
                    </select></div></td>
                    <td><input type="number" onChange={(e) => props.changeQuantity(e.target.value !== '' ? parseInt(e.target.value) : 0)} value={props.product.quantity} /></td>
                    <td>{props.moneyFormat(props.product.subtotal)}</td>
                </>
            : null }

            { props.context === 2 ?
                <>
                    <td>[{props.product.code}]</td>
                    <td onClick={props.openProductModal}><span className="name">{props.product.name}</span></td>
                    <td>({props.product.dimensions})</td>
                    <td>{props.moneyFormat(props.product.unitPrice)}</td>
                    <td><span>{props.product.format.name} ({props.product.format.qty} units)</span></td>
                    <td>
                        <span>{props.product.quantity} ({props.product.quantity * props.product.format.qty} units)
                        { props.product.boQuantity > 0 ?
                            <span> (+ {props.product.boQuantity} {props.product.format.name}(s) / bo)</span>
                        : null }</span>
                    </td>
                    <td>{props.moneyFormat(props.product.subtotal)}</td>
                </>
            : null }
        </tr>
    );
}

export default Line;
