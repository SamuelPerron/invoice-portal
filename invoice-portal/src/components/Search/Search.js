import React, { useState, useEffect } from 'react';

const Search = props => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (props.products) {
            props.results([...props.products].map(p => {
                let match = false;
                if (p.code.includes(code) && p.name.includes(name)) {
                    match = true;
                }
                p.match = match;
                return p;
            }));
        }
    }, [code, name]);

    return (
        <div className="Search">
            <strong>Search</strong>
            <ul>
                <li>
                    <span>Code</span>
                    <input onChange={e => setCode(e.target.value)} value={code} />
                </li>
                <li>
                    <span>Name</span>
                    <input onChange={e => setName(e.target.value)} value={name} />
                </li>
            </ul>
        </div>
    );
}

export default Search;
