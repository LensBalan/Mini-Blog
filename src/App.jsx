import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication.jsx';

//pages
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import CreatePost from './pages/CreatePost/CreatePost.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Search from './pages/Search/Search.jsx';
import Post from './pages/Post/Post.jsx';

//context
import { AuthProvider } from './context/AuthContext.jsx';


function App() {

  const [user,setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined; //se user é igual a undefined, fica carregando...

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if(loadingUser) {
    return <p>Carregando...</p>;
  }


  return (
    <div className='App'>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<About />} />
                <Route path='/pesquisa' element={<Search />} />
                <Route path='/posts/:id' element={<Post />} />
                <Route path='/login' element={!user ? <Login /> : <Navigate to='/'/>} />
                <Route path='/registro' element={!user ? <Register /> : <Navigate to='/'/>} />
                <Route path='/posts/criar' element={!user ? <Navigate to='/login'/> : <CreatePost /> } />
                <Route path='/dashboard' element={!user ? <Navigate to='/login'/> : <Dashboard />} /> 
              </Routes>
            </div>
        <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
