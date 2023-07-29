import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('../pages/main/index.jsx'));
const DEMO1 = lazy(() => import('../pages/demo1/index.jsx'));
const DEMO2 = lazy(() => import('../pages/demo2/index.jsx'));
const DEMO3 = lazy(() => import('../pages/demo3/index.jsx'));
const DEMO4 = lazy(() => import('../pages/demo4/index.jsx'));
const DEMO5 = lazy(() => import('../pages/demo5/index.jsx'));
const DEMO6 = lazy(() => import('../pages/demo6/index.jsx'));

const RouteContainer = () => {
  return <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/demo1' element={<DEMO1 />} />
        <Route exact path='/demo2' element={<DEMO2 />} />
        <Route exact path='/demo3' element={<DEMO3 />} />
        <Route exact path='/demo4' element={<DEMO4 />} />
        <Route exact path='/demo5' element={<DEMO5 />} />
        <Route exact path='/demo6' element={<DEMO6 />} />
      </Routes>
    </Suspense>
  </HashRouter>
}


export default RouteContainer;
