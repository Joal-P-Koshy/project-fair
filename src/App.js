import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Project from './pages/Project';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/login' element={ <Auth/> }/>
      <Route path='/register' element={ <Auth register = {'register'}/> }/>
      <Route path='/project' element={ <Project/> }/>
      <Route path='/Dashboard' element={ <Dashboard /> }/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
