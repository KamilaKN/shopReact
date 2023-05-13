import axios from "axios";

const URL = ("http://whispering-river-87788.herokuapp.com/api/products");

const getProducts = () => {
    return axios.get(URL);
};

const URLproduct =("https://whispering-river-87788.herokuapp.com/api/product")
const getProduct = (id) => {
    return axios.get(`${URLproduct}/${id}`)
}

export default { 
    getProducts: getProducts,
    getProduct: getProduct
};
