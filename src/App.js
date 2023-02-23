import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/signin" element={<SigninAndSignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
