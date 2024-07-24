import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import Cart from "./pages/Cart";
function App() {
  return (
    <Router>
      <AuthProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user-login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
          {/* <Route path="*" element={<Home />}/> */}
        </Routes>
        <Footer />
        </AuthProvider>
    </Router>
  );
}

export default App;
