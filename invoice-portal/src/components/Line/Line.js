import React, { useState, useEffect } from 'react';
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

            { props.context === 1 ?
                <>
                    <td>[{props.product.code}]</td>
                    <td onClick={() => props.openProductModal(props.product.id)}><span className="name">{props.product.name}</span></td>
                    <td>({props.product.dimensions})</td>
                    <td>{props.moneyFormat(props.product.unitPrice)}</td>
                    <td><select
                            onChange={(e) => props.changeFormat(parseInt(e.target.value))}
                            defaultValue={props.product.format.id}>
                        {props.product.formats.map((f, index) => {
                            return <option value={f.id} key={index}>{f.name} ({f.qty} units)</option>
                        })}
                    </select></td>
                    <td><input type="number" onChange={(e) => props.changeQuantity(e.target.value != '' ? parseInt(e.target.value) : 0)} value={props.product.quantity} /></td>
                    <td>{props.moneyFormat(props.product.subtotal)}</td>
                </>
            : null }

            { props.context === 2 ?
                <>
                    <td>[{props.product.code}]</td>
                    <td onClick={props.openModal}><span className="name">{props.product.name}</span></td>
                    <td>({props.product.dimensions})</td>
                    <td>{props.moneyFormat(props.product.unitPrice)}</td>
                    <td>{props.product.format.name} ({props.product.format.qty} units)</td>
                    <td>{props.product.quantity} ({props.product.quantity * props.product.format.qty} units)</td>
                    <td>{props.moneyFormat(props.product.subtotal)}</td>
                </>
            : null }
        </tr>
    );
}

export default Line;
