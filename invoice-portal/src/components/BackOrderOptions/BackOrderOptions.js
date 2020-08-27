import React from 'react';
import BackOrderOption from './BackOrderOption/BackOrderOption';

const BackOrderOptions = props => {
    return (
        <ul className="BackOrderOptions">
            { props.options.map((o, index) => <BackOrderOption
                                        option={o}
                                        product={props.product}
                                        click={() => props.selectOption(o.id)}
                                        key={index} /> ) }
        </ul>
    );
}

export default BackOrderOptions;
