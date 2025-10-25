import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import path from './constants'

import { ProductProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";
import { WishListProvider } from "./context/wishListContext";
import { UserProvider } from "./context/userContext";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Cart from './components/Cart/CartComponent'
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <WishListProvider>
              <div className="app">
                <Navbar />
                <main className="content">
                  <Routes>
               <Route path={path.homePage} element={<HomePage/>}></Route>
               <Route path={path.shopPage} element={<ShopPage/>}/>
               <Route path={path.cart} element={<Cart/>}/>
               <Route path={path.favourites}  element={<FavouritesPage/>}/> 
                  </Routes>
                </main>
                <Footer />
              </div>
            </WishListProvider>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  );
}


export default App;
