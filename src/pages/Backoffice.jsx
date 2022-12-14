import react, {useState} from 'react';
import ProductTable from '../cmps/ProductTable';
import { productService } from '../services/product-service';

export default function BackOffice() {
    const [productsState, setProductState] = useState('');
    if (productsState === '') {
        productService.getProducts()
        .then((res) => {
            setProductState(res);
        });
    }

    return (
        <main>
            <ProductTable products = {productsState}></ProductTable>
        </main>
    )
}