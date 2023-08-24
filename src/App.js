import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Main, Create, About, Footer, NoteNotFound } from './components'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.main}>
        <BrowserRouter>
          <Header />
          <div className={styles.pageContent}>
            <Routes> 
              <Route exact path='/' element={<Main />} />
              <Route path='/create' element={<Create />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NoteNotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
