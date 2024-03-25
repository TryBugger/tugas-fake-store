import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "../components/NavBar";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Cart = () => {

    const { user } = useAuth();
    // const [productCart, setProductCart] = useState(null);

    // useEffect(() => {

    //     const fetchCart = async () => {
    //         try {
    //             let id  = jwtDecode(user.token).sub
    
    //             const response = await axios.get(`https://fakestoreapi.com/carts/user/${id}`)
    //             setProductCart(response.data.forEach((order) => {
    //                 order.products.forEach((product) => {
                        
    //                 })
    //             }))
    //         } catch (error) {
                
    //         }
    //     }
    // })

    return (
        <>
            <NavBar />

            <h1>tes {user ? jwtDecode(user.token).sub : 'kosong'}</h1>

        </>
    )
}

export default Cart;