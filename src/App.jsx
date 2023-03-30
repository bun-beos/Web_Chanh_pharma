import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Collection from "./pages/Collection/Collection";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import Body from "./components/Body/Body"
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route exact path="/" element={<Home />}></Route> */}
          <Route path="/Web_Chanh_pharma" element={<Body />} ></Route>
          <Route exact path="/Web_Chanh_pharma/collection" element={<Collection />}></Route>
          <Route path="/Web_Chanh_pharma/collection/:productId" element={<Product />}></Route>
          <Route path="/Web_Chanh_pharma/account/login" element={<LogIn />}></Route>
          <Route path="/Web_Chanh_pharma/account/register" element={<Register />}></Route>
          <Route path="/Web_Chanh_pharma/account" element={<Account />}></Route>
          <Route path="/Web_Chanh_pharma/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
