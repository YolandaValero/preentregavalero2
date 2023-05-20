import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DetailItems from './components/components item/DetailItems';
import ProviderContextListCart from './components/components item/ProviderContextListCart';

function App() {
  return (
    <ProviderContextListCart>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ContainerCardItems/>} />
          <Route path='/item/:idItem' element={ <DetailItems />} />
          <Route path='/item/:id' element={<ContainerCardItems/>} />
        <Route path='/category/:idCategory' element={<ContainerCardItems/>} />
        </Routes>
      </BrowserRouter>
    </ProviderContextListCart>
  );
}

export default App;
