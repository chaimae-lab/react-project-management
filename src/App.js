
import './App.css';
import SignUp from './SignUp';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      
  
        <Router>
        <Header/>
        <Routes>
      
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
     
        

        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
