import * as PIXI from 'pixi.js';
import "./index.css"
import { useEffect, useRef } from 'react';



let app = null

const DEMO1 = () => {
  const demoRef = useRef(null)

  useEffect(() => {
    init()
    drawRect()
  }, [])


  const init = () => {
    app = new PIXI.Application({ background: '#1099bb', resizeTo: window });
    demoRef.current.appendChild(app.view);
  }

  const drawRect = () => {
    const rect = new PIXI.Graphics();
    rect.beginFill(0x66ccff);
    rect.drawRect(50, 50, 100, 100);
    rect.endFill();


    app.stage.addChild(rect);
  }

  return <div className='demo1' ref={demoRef}></div>
}



export default DEMO1
