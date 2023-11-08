import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

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
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;
