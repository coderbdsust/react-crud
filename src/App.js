import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact index path="/" element={<Create />}></Route>
        <Route exact path="/read" element={<Read />}></Route>
        <Route exact path="/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
