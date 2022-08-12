import './App.css';
import UserContext from './Contexts/UserContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import FeedBack from './components/FeedBack';
function App() {
  return (
    <UserContext.Provider value={{}}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/:feedBackID' element={<FeedBack />} />
          {/* <Route path='*' element={<NoMatch />} /> */}
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
