import axios from "axios";

const URL = ("http://whispering-river-87788.herokuapp.com/api/products");

const getProducts = () => {
    return axios.get(URL);
};

const URLproduct =("https://whispering-river-87788.herokuapp.com/api/product")
const getProduct = (id) => {
    return axios.get(`${URLproduct}/${id}`)
}

const deleteProduct = (id) => {
    return axios.delete(`https://whispering-river-87788.herokuapp.com/api/product/${id}`)
}

export default { 
    getProducts: getProducts,
    getProduct: getProduct,
    deleteProduct: deleteProduct
};
