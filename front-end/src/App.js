
import './App.css';
import './index.css';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        
        <Route element = {<PrivateComponent/>}>
        <Route path='/' element={<h1>Product Listing Componet</h1>} />
        <Route path='/add' element={<h1>Product Add form</h1>} />
        <Route path='/update' element={<h1>Product update</h1>} />
        <Route path='/logout' element={<h1>User Logout</h1>} />
        <Route path='/profile' element={<h1>User Profile</h1>} />
        </Route>

        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
