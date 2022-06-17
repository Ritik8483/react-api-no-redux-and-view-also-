import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import About from './components/About';
import ContactUs from './components/ContactUs';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import View from './components/View';
import EditUser from './components/EditUser';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/adduser' element={<AddUser/>} />
          <Route path='/view/:id' element={<View/>} />
          <Route path='*' element={<Navigate to='/'/>} />
          <Route path='/edituser/:id' element={<EditUser/>} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
