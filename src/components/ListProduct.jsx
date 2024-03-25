import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardGroup, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";

const ListProduct = (props) => {

    const [products, setProducts] = useState([])

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
            {/* <CardGroup> */}
            <Row xs={2} md={4} >
                {products.map((data) => (
                    <Col key={data.id}>
                        <Card border="primary" bg="light" className="mb-4" >
                            <CardImg variant="top" src={data.image} className="d-block mx-auto img-fluid w-50" />
                            <CardBody>
                                <CardTitle>{data.title}</CardTitle>
                                <CardText>{data.description}</CardText>
                            </CardBody>
                            <CardFooter>Price: {data.price}</CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* </CardGroup> */}
        </>
    )
}

export default ListProduct