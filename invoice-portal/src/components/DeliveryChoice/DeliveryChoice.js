import React from 'react';

const DeliveryChoice = props => {
    return (
        <>
            <ul>
                <li>
                    <strong>Pick-up at our location</strong>
                    <input type="radio" name="choice" value="pickup" onChange={e => props.saveChoice(e.target.value)} />
                </li>
                <li>
                    <strong>Delivery</strong>
                    <input type="radio" name="choice" value="delivery" onChange={e => props.saveChoice(e.target.value)} />
                </li>
            </ul>

            { props.order.deliveryChoice === 'delivery' ? <div>
                <h3>Choose delivery address</h3>
                <ul>
                    { props.user.addresses.map(a => (
                        <li key={a.id}>
                            <strong>{a.name}</strong><br />
                            <span>{a.street}</span><br />
                            <span>{a.city}, {a.state}, {a.country}</span><br />
                            <span>{a.zip}</span><br />
                            <input type="radio" name="address" value={a.id} onChange={e => props.saveAddress(e.target.value)} />
                        </li>
                    )) }
                </ul>
            </div> : null }
        </>
    );
}

export default DeliveryChoice;
