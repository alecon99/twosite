import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route
            exact path='/'
            element={<HomePage />}
          />
          <Route
            path='*'
            element={<ErrorPage />}
          />
          <Route
            path='/about'
            element={<AboutPage />}
          />
          <Route
            path='/shop'
            element={<ShopPage />}
          />
          <Route
            path='/blog'
            element={<BlogPage />}
          />
          <Route
            path='/contacts'
            element={<ContactsPage />}
          />
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;
