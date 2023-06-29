import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import Login from './screens/login';
import Register from './screens/register';
import Auth from './utils/auth';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth Comp={Home} />} />
        <Route path="/login" exact element={<Auth Comp={Login} />} />
        <Route path="/register" exact element={<Auth Comp={Register} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
