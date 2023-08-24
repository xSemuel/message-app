import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Main, About, Footer } from './components'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.main}>
        <BrowserRouter>
          <Header />
          <div className={styles.pageContent}>
            <Routes> 
              <Route exact path='/' element={<Main />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
