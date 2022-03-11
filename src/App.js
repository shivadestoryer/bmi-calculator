import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Input_Component from './Input_Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      
        <Input_Component/>
        


      </header>
    </div>
  );
}

export default App;
