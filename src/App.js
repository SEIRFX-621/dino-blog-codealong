import logo from './logo.svg';
import './App.css';
import AppContext from './AppContext';
import Dino from './Dino';

function App() {
  const dinoBlog = {
    title: 'Dinosaurs are awesome',
    author: 'Stealthy Stegosaurus',
    body: 'Check out this body property!',
    comments: ['First', 'ScriptProcessorNode', 'third']
  }
  return (
    <div className="App">
      <Dino 
        blog={dinoBlog}
      />
    </div>
  );
}

export default App;
