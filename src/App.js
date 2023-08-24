import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Main, About, Footer } from './components'


function App() {
  return (
    <div>
        <BrowserRouter>
          <Header />
          <Routes> 
            <Route exact path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
