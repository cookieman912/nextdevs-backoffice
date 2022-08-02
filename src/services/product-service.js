import axios from "axios";

const token = localStorage.getItem("nextDevsToken");

export const productService = {
    getProducts
}

function getProducts() {
    return axios.get('http://yaniv-nextdevs.local/wp-json/wc/v3/products', {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
       }).then((response) => {
        return response.data;
       })
}