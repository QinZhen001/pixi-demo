import * as PIXI from 'pixi.js';
import { useEffect, useRef } from 'react';

let app = null

const DEMO4 = () => {
  const demoRef = useRef(null)

  useEffect(() => {
    init()
    drawText()
  }, [])

  useEffect(()=>{

    const resize = () => {
      location.reload()
    }

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  },[])

  const init = () => {
    app = new PIXI.Application({ background: '#1099bb', resizeTo: window, antialias: true });
    demoRef.current.appendChild(app.view);
  }

  const drawText = () => {
    const text = new PIXI.Text('Hello World', { fontFamily: 'Arial', fontSize: 84, fill: 0xff1010, align: 'center' });
    text.x = app.screen.width / 2;
    text.y = app.screen.height / 2;
    text.anchor.set(0.5, 0.5);
    // 使用文字作为精灵的遮罩
    const bunny = PIXI.Sprite.from('/textures/map.jpeg');
    bunny.mask = text;
    app.stage.addChild(bunny);
  }


  return <div className='page' ref={demoRef}></div>
}



export default DEMO4
