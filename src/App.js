import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Main } from './components'


function App() {
  return (
    <div>
        <BrowserRouter>
          <Header />
          <Routes> 
            <Route path='/' element={<Main />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
