import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Router from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <div>
            <Nav />
            <div className="container">
              <div className="App">
                <Router />
              </div>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
