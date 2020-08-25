import React from 'react';

const Search = props => {
    return (
        <div className="Search">
            <strong>Search</strong>
            <ul>
                <li>
                    <span>Code</span>
                    <input onChange={e => props.searchHandler({'productCode': e.target.value})} value={props.search.productCode} />
                </li>
                <li>
                    <span>Name</span>
                    <input onChange={e => props.searchHandler({'productName': e.target.value})} value={props.search.productName} />
                </li>
            </ul>
        </div>
    );
}

export default Search;
