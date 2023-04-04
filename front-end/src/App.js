import './App.css';
import Nav from './component/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './component/signUp';

import Footer from './component/Footer';
import PrivateComponant from './component/PrivateComponant';
import Login from './component/Login';
import AddProduct from './component/AddProduct'; // use the add product   file
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route element = {<PrivateComponant />}>
      <Route path="/" element={<ProductList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/update/:id" element={<UpdateProduct />} />
      <Route path="/logout" element={<h1>Logout Component</h1>} />
      <Route path="/profile" element={<h1>Profile Component</h1>} />
      </Route>

      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
