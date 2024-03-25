import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardGroup, CardImg, CardText, CardTitle, Col, Form, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";

const AddCartProduct = () => {

    const [products, setProducts] = useState([])
    const [cartData, setCartData] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data)
            } catch (error) {
                console.log("Gagal mengambil data user: ", error.response.data);
            }
        }
        fetchProducts();
    }, [])

    return (
        <>
            <NavBar />

            <Form>
                <Row xs={2} md={4} >
                    {products.map((data) => (
                        <Col key={data.id}>
                            <Card border="primary" bg="light" className="mb-4" >
                                <CardImg variant="top" src={data.image} className="d-block mx-auto img-fluid w-50" />
                                <CardBody>
                                    <CardTitle>{data.title}</CardTitle>
                                    <CardText>{data.description}</CardText>
                                </CardBody>
                                <CardFooter>
                                    Price: {data.price}
                                    <Button variant="primary" name={data.id} >Tambah</Button>
                                    <Button variant="warning" name={data.id} >Kurang</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Button type="submit"> Add Cart </Button>
            </Form>
        </>
    )
}

export default AddCartProduct;