import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "./Context/CartContext";


function App() {
  return (
    <CartProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </CartProvider>
  );
}

export default App;
