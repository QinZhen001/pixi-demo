import DEMO1 from "../pages/demo1/index.jsx";
import DEMO2 from "../pages/demo2/index.jsx";
import Main from "../pages/main/index.jsx";
import { HashRouter, Route, Routes } from 'react-router-dom';

const RouteContainer = () => {
  return <HashRouter>
    <Routes>
      <Route exact path='/' element={<Main />} />
      <Route exact path='/demo1' element={<DEMO1 />} />
      <Route exact path='/demo2' element={<DEMO2 />} />
    </Routes>
  </HashRouter>
}


export default RouteContainer;
