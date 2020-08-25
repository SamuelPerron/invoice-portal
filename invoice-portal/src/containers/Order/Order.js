import React, { useState, useEffect } from 'react';
import ProductsSelection from '../../components/ProductsSelection/ProductsSelection';
import ProductsValidation from '../../components/ProductsValidation/ProductsValidation';

const Order = props => {
    const [step, setStep] = useState(1);
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState({});
    const [title, setTitle] = useState('Place an order');
    const [total, setTotal] = useState(0);
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

    useEffect(() => {
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
        </div>
    );
}

export default Order;
