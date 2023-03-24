import './App.css';
import Nav from './component/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './component/signUp';

import Footer from './component/Footer';
import PrivateComponant from './component/PrivateComponant';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route element = {<PrivateComponant />}>
      <Route path="/" element={<h1>Product Listing Component</h1>} />
      <Route path="/add" element={<h1>Add Product Component</h1>} />
      <Route path="/update" element={<h1>Update Product Component</h1>} />
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
