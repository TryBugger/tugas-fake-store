import React from "react";
import ListProduct from "../components/ListProduct";
import NavBar from "../components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            
            <h2>List of All Product</h2>
            <ListProduct />
        </>
    )
}

export default Dashboard;