import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/store" element={<CatalogPage />} />
                <Route path="/contacts" element={<ContactPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/product/:id" element={<SingleProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/add" element={<AddProductPage/>}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
