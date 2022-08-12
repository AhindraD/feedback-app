import './App.css';
import UserContext from './Contexts/UserContext'

function App() {
  return (
    <UserContext.Provider value={{}}>
      <div className="App">

      </div>
    </UserContext.Provider>
  );
}

export default App;
