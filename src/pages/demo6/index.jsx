import * as PIXI from 'pixi.js';
import { useEffect, useRef } from 'react';

let app = null

const DEMO6 = () => {
  const demoRef = useRef(null)

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    app = new PIXI.Application({ background: '#1099bb', resizeTo: window, antialias: true });
    demoRef.current.appendChild(app.view);
  }





  return <div className='page' ref={demoRef}></div>
}



export default DEMO6
