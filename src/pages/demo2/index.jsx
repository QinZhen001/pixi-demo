import * as PIXI from 'pixi.js';
import "./index.css"
import { useEffect, useRef } from 'react';


let app = null

const DEMO2 = () => {
  const demoRef = useRef(null)

  useEffect(() => {
    init()
    drawTexture()
    drawReact()
  }, [])


  const init = () => {
    app = new PIXI.Application({ background: '#1099bb', resizeTo: window, antialias: true });
    demoRef.current.appendChild(app.view);
  }


  const drawTexture = () => {
    const texture = PIXI.Texture.from('/textures/avatar_down.png');
    const sprite = new PIXI.Sprite(texture);
    // 设置锚点 0.5 表示图片的中心点
    sprite.anchor.set(0.5, 0.5);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;
    sprite.rotation = Math.PI / 4; // 旋转 45 度
    sprite.scale.set(0.5, 0.5); // 缩放 0.5 倍
    app.stage.addChild(sprite);

    // ticker 实现动画
    app.ticker.add((delta) => {
      // console.log("delta", delta)
      sprite.rotation += 0.1 * delta;
    })

    // 事件
    sprite.eventMode = "static"
    sprite.on("click", () => {
      console.log("click texture")
    })
  }


  const drawReact = () => {
    const react = new PIXI.Graphics();
    react.beginFill(0x66ccff);
    react.drawRect(0, 0, 100, 100);
    react.endFill();
    react.position.set(100, 100) // x, y
    app.stage.addChild(react);
    react.eventMode = "static"
    react.on("click", () => {
      console.log("click react")
    })
  }

  return <div className='page' ref={demoRef}></div>
}



export default DEMO2
