import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Api1 from './components/Api1';
import Api2 from './components/Api2';
import Api3 from './components/Api3';
import Api4 from './components/Api4';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api1' element={<Api1 />} />
        <Route path='/api2' element={<Api2 />} />
        <Route path='/api3' element={<Api3 />} />
        <Route path='/api4' element={<Api4 />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>API Learning Task</h1>
      <p>Please click below links for appropriate API's</p>
      <br />
      <Link to={'/api1'} target='_blank'>API 1 - Movie Data API</Link>
      <br />
      <Link to={'/api2'} target='_blank'>API 2 - Fake Store API</Link>
      <br />
      <Link to={'/api3'} target='_blank'>API 3 - Users Data API</Link>
      <br />
      <Link to={'/api4'} target='_blank'>API 4 - Drinks Data API</Link>
    </div>
  )
}

export default App;
