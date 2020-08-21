import React, { useState, useEffect } from 'react';
import Order from './containers/Order/Order';

import './App.css';

const App = props => {
    const [products, setProducts] = useState([]);

    const productFactory = nb => [...Array(nb).keys()].map(i => ( {
        id: i + 1,
        code: 'AA-0007',
        name: 'Contenant mince pour mets à emporter à rebord doublé',
        dimensions: '9PO',
        inventory: 1000,
        formats: [
            { name: 'Boite', qty: 100  },
            { name: 'Caisse', qty: 10000  },
        ],
        unitPrice: 0.0852,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae enim quis ligula facilisis viverra. Sed tortor sem, facilisis in nibh in, aliquet elementum felis. Sed sit amet gravida orci, eu rutrum urna. Pellentesque auctor orci at nunc accumsan cursus. Maecenas tempus mauris eget tempus eleifend. Sed mollis, leo in cursus convallis, risus metus sodales risus, ut vestibulum felis dolor non enim. Aliquam lobortis massa eget sodales sollicitudin.',
    } ));

    const fetchProducts = () => {
        const distantProducts = productFactory(5);
        setProducts(distantProducts);
    }

    // "mounted"
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="App">
            <Order
                products={products} />
        </div>
    );
}

export default App;
