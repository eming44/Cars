import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { CarsPage } from './Pages/Cars/CarsPage'
import { NavBar } from './Components/NavBar/NavBar';
import { CarPage } from './Pages/Car/CarPage';
import { CarItemProps } from './Components/CarItem/CarItemProps';
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cars'>
        <Route index element={<CarsPage />} />
        <Route path=":id" element={<CarPage />} />
      </Route>

      {/* </Route> element={<CarList />} /> */}
      {/* <Route path='/detailed' element={<DetailedPage />} /> */}
    </Routes>
    </>
  );
}

export default App;
