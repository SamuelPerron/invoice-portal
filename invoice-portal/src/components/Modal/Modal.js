import React from 'react';
import './Modal.scss';

const Modal = props => {
    return (
        <div className="Modal">
            <div className="darken" onClick={props.close}></div>
            <div className="content">
                { props.close ?
                    <span className="close" onClick={props.close}>Close</span>
                : null }
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
