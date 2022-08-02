export default function ProductTableRow(props) {
    return (
        <tr>
            <td>{props.product.id}</td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}