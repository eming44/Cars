import { useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { CarsPage } from './Pages/Cars/CarsPage'
import { NavBar } from './Components/NavBar/NavBar';
import { CarPage } from './Pages/Car/CarPage';
import { useAppDispatch, useAppSelector } from './Store/hooks';
import { setDarkMode, setLightMode } from './Features/DarkMode/DarkModeSlice';
import './App.css';

function App() {
  let mode = useAppSelector((state) => state.darkmode.isDark);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    let isDark = sessionStorage.getItem("isDark");
    if (isDark === null) {
      sessionStorage.setItem("isDark", mode.toString());
    }
    else {
      isDark?.toLowerCase() === 'true' ? dispatch(setDarkMode()) : dispatch(setLightMode());
    }
  }, []);

  useLayoutEffect(() => {
    sessionStorage.setItem("isDark", mode.toString());
  }, [mode]);

  return (
    <div id={mode ? 'modeDark' : 'modeLight'}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars'>
          <Route index element={<CarsPage />} />
          <Route path=":id" element={<CarPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
