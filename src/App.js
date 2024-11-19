import {items} from "./Items"
import "./App.css"
import { usePDF } from "react-to-pdf";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page4 from "./Page4";
import Page3 from "./Page3";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Page1/>} />
      <Route exact path='/page1' element={<Page1/>} />
      <Route exact path='/page2' element={<Page2/>} />
      <Route exact path='/page3' element={<Page3/>} />
      <Route exact path='/page4' element={<Page4/>} />

      </Routes>

      </BrowserRouter>
    </>
    
  );
}

export default App;
