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
import Body from "./components/Body/Body";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGCOiSM9zpb3k_nmv8OnHUbDu-a2jasqE",
  authDomain: "web-chanh-pharma.firebaseapp.com",
  projectId: "web-chanh-pharma",
  storageBucket: "web-chanh-pharma.appspot.com",
  messagingSenderId: "245445954539",
  appId: "1:245445954539:web:b39b61032f65624ec6e7ae",
  measurementId: "G-9KV9WCS9S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route exact path="/" element={<Home />}></Route> */}
          <Route path="/" element={<Body />} ></Route>
          <Route exact path="/collection" element={<Collection />}></Route>
          <Route path="/collection/:productId" element={<Product />}></Route>
          <Route path="/account/login" element={<LogIn />}></Route>
          <Route path="/account/register" element={<Register />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
