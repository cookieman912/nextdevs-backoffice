import React from "react";
import Table from 'react-bootstrap/Table';
import ProductTableRow from "./ProductTableRow";
export default function ProductTable(props) { 
    if (!props.products) {
        return (
            <div>loading</div>);
    } else {
        return (
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                    {
                        props.products.map(product => {
                            return <ProductTableRow key = {product.id} product = {product}/>
                        })
                    }
                </tbody>
            </Table>
        )
    }
}