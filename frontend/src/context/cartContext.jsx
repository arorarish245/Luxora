import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem("userId"));

    useEffect(() => {
        const handleStorageChange = () => setUserId(localStorage.getItem("userId"));
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    useEffect(() => {
        if (userId) {
            axios
                .get(`http://localhost:8000/cart/${userId}`)
                .then((res) => setCart(res.data))
                .catch((err) => console.error(err));
        } else {
            setCart([]); // clear cart if user logs out
        }
    }, [userId]);

    const addToCart = (product) => {
        if (!userId) {
            Swal.fire({
                icon: "warning",
                title: "Login Required",
                text: "Please login to add items to your cart.",
                confirmButtonColor: "#FCA311",
            });
            return;
        }

        const productId = product.id || product._id;

        if (!productId) {
            console.error(" No product id found:", product);
            return;
        }

        axios
            .post(`http://localhost:8000/cart/add/${userId}`, { product_id: productId, quantity: 1 })
            .then(() => {
                setCart((prev) => {
                    const existing = prev.find((p) => p.id === productId);
                    if (existing) {
                        return prev.map((p) =>
                            p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
                        );
                    }
                    return [...prev, { ...product, id: productId, quantity: 1 }];
                });

                // ✅ SweetAlert2 success notification
                Swal.fire({
                    icon: "success",
                    title: "Added to Cart 🛒",
                    text: `${product.name || "Product"} has been added to your cart.`,
                    showConfirmButton: false,
                    timer: 1500,
                    background: "#14213D",
                    color: "#fff",
                });
            })
            .catch((err) =>
                console.error("Error adding to cart:", err.response?.data || err.message)
            );
    };

    const removeFromCart = (productId) => {
        if (!userId) return;

        axios
            .delete(`http://localhost:8000/cart/remove/${userId}/${productId}`)
            .then(() => {
                setCart((prev) => prev.filter((p) => p.id !== productId));

                // ✅ SweetAlert2 info notification
                Swal.fire({
                    icon: "info",
                    title: "Removed from Cart",
                    text: "Item has been removed from your cart.",
                    showConfirmButton: false,
                    timer: 1500,
                    background: "#14213D",
                    color: "#fff",
                });
            })
            .catch((err) => console.error(err));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
