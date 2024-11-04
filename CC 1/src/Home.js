import React, { useState } from 'react';

const Home = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: 'Teddy Bear', price: 20.00, imgSrc: 'https://4.imimg.com/data4/PG/UH/MY-10106023/teddy-bear-1000x1000.jpg' },
        { id: 2, name: 'Gift Baskets', price: 35.00, imgSrc: 'https://www.daisylife.in/cdn/shop/files/RoundWickerGiftBasket.jpg?v=1696927088' },
        { id: 3, name: 'Customized Mugs', price: 15.00, imgSrc: 'https://market99.com/cdn/shop/files/hello-coffee-mug-with-lid-pink-cat-420-ml-mugs-1-29122068381866.jpg?v=1697015765' },
        { id: 4, name: 'Jewelry', price: 50.00, imgSrc: 'https://m.media-amazon.com/images/I/61FMqE9QC4L._AC_UY1100_.jpg' },
        { id: 5, name: 'Plush Toys', price: 25.00, imgSrc: 'https://m.media-amazon.com/images/I/517tM2o269L._AC_UF1000,1000_QL80_.jpg' },
        { id: 6, name: 'Candles', price: 18.00, imgSrc: 'https://m.media-amazon.com/images/I/61NLY6jP6mL._AC_UF1000,1000_QL80_.jpg' },
        { id: 7, name: 'Books', price: 12.00, imgSrc: 'https://e7.pngegg.com/pngimages/137/524/png-clipart-textbook-books-presentation-book.png' },
        { id: 8, name: 'Photo Frames', price: 22.00, imgSrc: 'https://assets.ajio.com/medias/sys_master/root/20220726/fZhy/62deed0df997dd03e2f5f8cd/-473Wx593H-462998309-brown-MODEL.jpg' },
    ];

    const handleAddToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const handleDeleteFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, quantity) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, Math.min(10, quantity)) } : item
        ));
    };

    const handleCheckout = () => {
        const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        alert(`Total price is $${totalPrice.toFixed(2)}`);
    };

    return (
        <div style={styles.content}>
            <section style={styles.productsSection}>
                <h2 style={styles.heading}>Available Gifts</h2>
                <div style={styles.grid}>
                    {products.map(product => (
                        <div key={product.id} style={styles.product}>
                            <img src={product.imgSrc} alt={product.name} style={styles.productImage} />
                            <h3 style={styles.productName}>{product.name}</h3>
                            <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
                            <button style={styles.addButton} onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>

            <aside style={styles.cartSection}>
                <h2 style={styles.heading}>Shopping Cart</h2>
                <ul style={styles.cartList}>
                    {cart.map(item => (
                        <li key={item.id} style={styles.cartItem}>
                            <span>{item.name} (${item.price.toFixed(2)})</span>
                            <div style={styles.quantityControl}>
                                <button style={styles.quantityButton} onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    max="10"
                                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                    style={styles.quantityInput}
                                />
                                <button style={styles.quantityButton} onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button style={styles.removeButton} onClick={() => handleDeleteFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <button style={styles.checkoutButton} onClick={handleCheckout}>Checkout</button>
            </aside>
        </div>
    );
};

const styles = {
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: '#001f3f', // Dark blue background
        color: '#fff',
    },
    productsSection: {
        flex: '2',
        marginRight: '20px',
    },
    heading: {
        color: '#fff', // White color for heading
        textAlign: 'center',
        marginBottom: '20px',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
    },
    product: {
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '100%',
    },
    productImage: {
        width: '100%',
        height: '250px', // Make images square
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '10px',
    },
    productName: {
        margin: '10px 0',
        color: '#001f3f', // Dark blue color
    },
    productPrice: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    addButton: {
        backgroundColor: '#003366', // Darker blue for button
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    cartSection: {
        flex: '1',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    cartList: {
        listStyleType: 'none',
        padding: '0',
        marginBottom: '20px',
    },
    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #ccc',
    },
    quantityControl: {
        display: 'flex',
        alignItems: 'center',
    },
    quantityButton: {
        backgroundColor: '#003366', // Darker blue for button
        color: '#fff',
        border: 'none',
        padding: '5px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    quantityInput: {
        width: '40px',
        textAlign: 'center',
        margin: '0 5px',
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    removeButton: {
        backgroundColor: '#DC143C',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    checkoutButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#003366', // Darker blue for button
        color: '#fff',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
};

export default Home;
