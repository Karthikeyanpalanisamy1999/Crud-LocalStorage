import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './Components/Read';
import Create from './Components/Create';
import Update from './Components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Read/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:index' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
