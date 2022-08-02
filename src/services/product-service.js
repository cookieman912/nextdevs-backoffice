import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC95YW5pdi1uZXh0ZGV2cy5sb2NhbCIsImlhdCI6MTY1OTQ0NzgyMSwibmJmIjoxNjU5NDQ3ODIxLCJleHAiOjE2NjAwNTI2MjEsImRhdGEiOnsidXNlciI6eyJpZCI6MSwiZGV2aWNlIjoiIiwicGFzcyI6IjNkMmZjN2E5NDUzMmRlM2VkNWRmZTc1OTM4MTI3ODRjIn19fQ.ghNxb_x6N3dEMtWyS17sDdCYAq0bymU3eKlKwMp0aTY'

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