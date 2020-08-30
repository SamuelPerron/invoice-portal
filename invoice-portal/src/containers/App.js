import React, { useState, useEffect } from 'react';
import Order from './Order/Order';
import Modal from '../components/Modal/Modal';
import Product from '../components/Product/Product';

import './App.scss';

const App = props => {
    const [products, setProducts] = useState([]);
    const [toggleModal, setToggleModal] = useState({ open: false, product: null });
    const [user, setUser] = useState({});

    const productFactory = nb => [...Array(nb).keys()].map(i => ( {
        id: i + 1,
        code: 'AA-000' + i,
        name: 'Contenant mince pour mets à emporter à rebord doublé',
        dimensions: (i * 3 + 2) + 'PO',
        inventory: 1000,
        formats: [
            { id: 1, name: 'Boite', qty: 100  },
            { id: 2, name: 'Caisse', qty: 1000  },
        ],
        unitPrice: 0.0852 * i + 0.7,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae enim quis ligula facilisis viverra. Sed tortor sem, facilisis in nibh in, aliquet elementum felis. Sed sit amet gravida orci, eu rutrum urna. Pellentesque auctor orci at nunc accumsan cursus. Maecenas tempus mauris eget tempus eleifend. Sed mollis, leo in cursus convallis, risus metus sodales risus, ut vestibulum felis dolor non enim. Aliquam lobortis massa eget sodales sollicitudin.',
    } ));

    const fetchProducts = () => {
        const distantProducts = productFactory(5);
        setProducts(distantProducts);
    }

    const fetchUserInfos = () => {
        const distantUser = {
            'name': 'Chez Sam',
            'addresses': [
                {
                    id: 1,
                    name: 'Main office',
                    street: '8754 rue du Chevalet',
                    number: '',
                    city: 'Québec',
                    state: 'QC',
                    country: 'Canada',
                    zip: 'G2C 0L4',
                },
                {
                    id: 2,
                    name: 'Main office',
                    street: '8754 rue du Chevalet',
                    number: '',
                    city: 'Québec',
                    state: 'QC',
                    country: 'Canada',
                    zip: 'G2C 0L4',
                },
            ]
        }
        // then
        fetchProducts();
        setUser(distantUser);
    }

    // "mounted"
    useEffect(() => {
        fetchUserInfos();
    }, []);

    return (
        <div className="App">
            <div id="app-content">
                <Order
                    openProductModal={id => setToggleModal({ open: true, product: id })}
                    products={products} user={user} />
            </div>

            { toggleModal.open ?
                <Modal close={() => setToggleModal({ open: false, product: null })}>
                    <Product infos={{...products.find(p => p.id === toggleModal.product)}} />
                </Modal>
            : null }
        </div>
    );
}

export default App;
