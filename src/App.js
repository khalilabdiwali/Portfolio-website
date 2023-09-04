import './App.css';
import {useState} from 'react'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Head from './components/Head'
import Login from './components/Login';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Blog from './components/Blog';
import NotFound from './components/Notfound';
import CategoryLayout from './components/layout/categoryLayout';
import Webdevel from './components/help/webdevel';
import Webdesign from './components/help/webdesign';
import {BrowserRouter as Router,Routes,Route,Link,Outlet} from 'react-router-dom'
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className="App">
    
   <Router>
   <Head/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About isAuth={isAuth}/>}/>
    <Route path="/Contact" element={<Contact isAuth={isAuth}/>}/>
    <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>}/>  
     <Route path="/SignIn" element={<SignIn/>}/>
     <Route path="/Blog" element={<Blog/>}/>
     <Route path="*" element={<NotFound/>}/>

    

     <Route path="Category" element={<CategoryLayout />} >
     <Route path="Webdevel" element={<Webdevel/>}/>
     <Route path="Webdesign" element={<Webdesign/>}/>
      </Route>
     
    
     

     
    </Routes>
    <Footer/>
   </Router>
    </div>
  );
}

export default App;
