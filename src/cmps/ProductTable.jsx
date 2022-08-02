import React from "react";
import Table from "react-bootstrap/Table";
import Spinner  from "react-bootstrap/Spinner";
import ProductTableRow from "./ProductTableRow";

export default function ProductTable(props) {

  if (!props.products) {
    return (
        <div className="spinner-container">
            <Spinner className="center" animation="border" role="info">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div> 
    );
  } else {
    return (
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
          </tr>
          {props.products.map((product) => {
            return <ProductTableRow key={product.id} product={product} />;
          })}
        </tbody>
      </Table>
    );
  }
}
