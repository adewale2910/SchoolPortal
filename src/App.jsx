
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './assets/Conponent/Navbar';
import Product from './assets/Conponent/Product';
import HomePage from './assets/Conponent/HomePage';









function App()  {
  return (
    <>

      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product' element={<Product/>}/>
      {/* <Route path='/pricing' element={<Pricing/>}/> */}
    </Routes>


</>
  );
}

export default App




