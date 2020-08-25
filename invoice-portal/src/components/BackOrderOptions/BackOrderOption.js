import React from 'react';
import './BackOrderOptions.css';

const BackOrderOption = props => {
    return (
        <li className="BackOrderOption" onClick={props.click}>
            <strong>{props.option.name}</strong>
            <p>{
                    props.option.description
                    .replace(/{CODE}/, props.product.code)
                    .replace(/{AVAILQTY}/, Math.floor(props.product.inventory / props.product.format.qty))
                    .replace(/{FORMAT}/, props.product.format.name + '(s)')
                    .replace(/{AVAILUNITS}/, props.product.inventory + ' unit(s)')
                }</p>
        </li>
    );
}

export default BackOrderOption;
