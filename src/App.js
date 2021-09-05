import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route  path="/" exact render={ () => 
          <Main />
        }/>

        <Route  path="/login"  render={ () => 
          <Login />
        }/>

        <Route  path="/signup"  render={ () => 
          <Signup />
        }/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
