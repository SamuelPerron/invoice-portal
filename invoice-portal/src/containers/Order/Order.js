import React, { useState, useEffect } from 'react';
import ProductsSelection from '../../components/ProductsSelection/ProductsSelection';
import ProductsValidation from '../../components/ProductsValidation/ProductsValidation';
import BackOrderOptions from '../../components/BackOrderOptions/BackOrderOptions';
import Modal from '../../components/Modal/Modal';

const Order = props => {
    const [step, setStep] = useState(1);
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);
    const [backOrderProducts, setBackOrderProducts] = useState([]);
    const [title, setTitle] = useState('Place an order');
    const [total, setTotal] = useState(0);
    const [backOrderOptions, setBackOrderOptions] = useState([
        {id: 1, name: 'Don\'t order this product', description: 'Remove {CODE} from your order'},
        {id: 2, name: 'Only order the available inventory', description: 'Only order {AVAILQTY} {FORMAT} ( {AVAILUNITS} )'},
    ]);
    const [search, setSearch] = useState({'productName': '', 'productCode': ''});

    useEffect(() => { // Set default for products
        const newProducts = [...props.products];
        newProducts.map(product => {
            product.format = product.formats[0];
            product.quantity = 0;
            product.subtotal = 0;
            product.hide = false;
            return product;
        });
        setProducts(newProducts);
    }, [props.products]);

    useEffect(() => { // Calculate global order details
        let newTotal = 0;
        for (var i = 0; i < products.length; i++) {
            newTotal += products[i].subtotal;
        }
        setTotal(newTotal)
    }, [products]);

    useEffect(() => { // Search
        let filteredProducts = [...products];
        filteredProducts.map(p => {
            if (!(p.code.includes(search.productCode) && p.name.includes(search.productName))) {
                p.hide = true;
            } else {
                p.hide = false;
            }
            return p;
        });
        setProducts(filteredProducts);
    }, [search]);

    useEffect(() => { // Look for back orders in order
        setBackOrderProducts([...order].filter(p => (p.quantity * p.format.qty) > p.inventory));
    }, [order]);

    const recalculateProducts = oldProducts => {
        let newProducts = [...oldProducts];
        newProducts.map(product => {
            product.subtotal = (product.format.qty * product.quantity) * product.unitPrice;
            return product;
        });
        return newProducts;
    }

    const submitOrderHandler = () => {
        constructOrder();
        setTitle('Validate order');
        setStep(2);
    }

    const validateOrderHandler = () => {
        console.log(order);
    }

    const goBackHandler = () => {
        setSearch({'productName': '', 'productCode': ''});
        setTitle('Modify order');
        setStep(1);
    }

    const moneyFormat = nb => nb.toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 4
    });

    const changeFormat = (productId, formatId) => {
        let updatedProducts = [...products];
        const product = updatedProducts.find(p => p.id === productId);
        product.format = product.formats.find(f => f.id === formatId);
        updatedProducts = recalculateProducts(updatedProducts);
        setProducts(updatedProducts);
    }

    const changeQuantity = (productId, qty) => {
        let updatedProducts = [...products];
        const product = updatedProducts.find(p => p.id === productId);
        product.quantity = qty;
        updatedProducts = recalculateProducts(updatedProducts);
        setProducts(updatedProducts);
    }

    const constructOrder = () => {
        setOrder([...props.products].filter(p => p.quantity > 0));
    }

    const searchHandler = value => {
        setSearch({...search, ...value});
    }

    const selectOption = (optionId, productId) => {
        let newOrder = [...order].map(p => {
            if (p.id === productId) {

                if (optionId === 1) {
                    p.quantity = 0;
                    return p;
                } else if (optionId === 2) {
                    p.quantity =  Math.floor(p.inventory / p.format.qty);
                    return p;
                }

            } else {
                return p;
            }
        });
        newOrder = newOrder.filter(p => p.quantity > 0);
        const recalculatedOrder = recalculateProducts(newOrder);
        setOrder(recalculatedOrder);
    }

    const stepOneJsx = <ProductsSelection
                            changeQuantity={(productId, qty) => changeQuantity(productId, qty)}
                            changeFormat={(productId, formatId) => changeFormat(productId, formatId)}
                            openProductModal={id => props.openProductModal(id)}
                            products={products}
                            total={total}
                            search={search}
                            searchHandler={v => searchHandler(v)}
                            submit={submitOrderHandler}
                            moneyFormat={nb => moneyFormat(nb)} />;

    const stepTwoJsx = <ProductsValidation
                            order={order}
                            openProductModal={id => props.openProductModal(id)}
                            total={total}
                            submit={validateOrderHandler}
                            back={goBackHandler}
                            moneyFormat={nb => moneyFormat(nb)} />;

    return (
        <div className="Order">
            <h1>{title}</h1>
            { step === 1 ? stepOneJsx : null }
            { step === 2 ? stepTwoJsx : null }

            { backOrderProducts.length > 0 ?
                <Modal>
                    <h1>This product is in back order</h1>
                    <h2>[{backOrderProducts[0].code}] {backOrderProducts[0].name}</h2>
                    <span>Please select one of these options</span>
                    <BackOrderOptions
                        options={backOrderOptions}
                        product={backOrderProducts[0]}
                        selectOption={id => selectOption(id, backOrderProducts[0].id)} />
                </Modal>
            : null }
        </div>
    );
}

export default Order;
