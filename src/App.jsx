import './App.css';
import UserContext from './Contexts/UserContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import FeedBack from './components/FeedBack';
import Home from './components/Home';

// import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, auth } from './firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from 'react';

function App() {
  let navigate = useNavigate();
  let [username, setUsername] = useState(null);
  let [userID, setUserID] = useState(null);
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);

  function logInEmail() {
    console.log([email, password])
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigate('/profile');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  function signUpEmail() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigate('/profile');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  function logOut() {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      const errorMessage = error.message;
      alert(errorMessage);
    });
    navigate('/');
  }

  return (
    <UserContext.Provider value={{ email, setEmail, password, setPassword, username, setUsername, userID, setUserID, logInEmail, signUpEmail, logOut }}>
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
