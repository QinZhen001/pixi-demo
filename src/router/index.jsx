import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('../pages/main/index.jsx'));
const DEMO1 = lazy(() => import('../pages/demo1/index.jsx'));
const DEMO2 = lazy(() => import('../pages/demo2/index.jsx'));
const DEMO3 = lazy(() => import('../pages/demo3/index.jsx'));
const DEMO4 = lazy(() => import('../pages/demo4/index.jsx'));
const DEMO5 = lazy(() => import('../pages/demo5/index.jsx'));
const DEMO6 = lazy(() => import('../pages/demo6/index.jsx'));
const DEMO7 = lazy(() => import('../pages/demo7/index.jsx'));
const DEMO8 = lazy(() => import('../pages/demo8/index.jsx'));

const Demos = [
  DEMO1,
  DEMO2,
  DEMO3,
  DEMO4,
  DEMO5,
  DEMO6,
  DEMO7,
  DEMO8
]

const RouteContainer = () => {
  return <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path='/' element={<Main />} />
        {Demos.map((Demo, index) => {
          return <Route exact key={index} path={`/demo${index + 1}`} element={<Demo />} />
        })}
      </Routes>
    </Suspense>
  </HashRouter>
}


export default RouteContainer;
