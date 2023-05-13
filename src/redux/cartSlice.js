import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantityCart: 0,
        productsCart: [],
        isOpen: false,
        sum: 0
    },
    reducers: {
        addTocart: (state, action) => {
            state.isOpen = true //открываем модальное окно 
            const indexProduct = state.productsCart.findIndex(
                (product) => product._id === action.payload._id
            );// есть-ли такой товар в корзине

            state.sum += action.payload.price * action.payload.quantity //считает всю сумму 
            if (indexProduct === -1) { // действие, когда товара нет в корзине 
                state.quantityCart++;
                state.productsCart.push(action.payload);

            } else {
                // если такой товар в корзине есть 
                state.productsCart[indexProduct].quantity += action.payload.quantity // добавляем к количеству товаров 
            }
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    },
});

export const { addTocart, closeModal } = cartSlice.actions;
export default cartSlice.reducer;
