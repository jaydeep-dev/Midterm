import './App.css';
import Component from './components/Component'
import Component2 from './components/Component2';

function App() {
  return (
    <div className="App">
      <div className='Component1'>
        <Component />
      </div>

      <div className='Component2'>
        <Component2 />
      </div>
    </div>
  );
}

export default App;
