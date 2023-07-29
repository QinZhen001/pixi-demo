import * as PIXI from 'pixi.js';
import { OutlineFilter,GlowFilter } from "pixi-filters"
import { useEffect, useRef } from 'react';

let app = null

const DEMO5 = () => {
  const demoRef = useRef(null)

  useEffect(() => {
    init()
    draw()
  }, [])

  const init = () => {
    app = new PIXI.Application({ background: '#1099bb', resizeTo: window, antialias: true });
    demoRef.current.appendChild(app.view);
  }



  const draw = () => {
    const texture = PIXI.Texture.from('/textures/avatar_down.png');
    const sprite = new PIXI.Sprite(texture);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;
    sprite.anchor.set(0.5, 0.5);
    app.stage.addChild(sprite);
    // 模糊滤镜
    const blurFilter = new PIXI.BlurFilter();
    blurFilter.blur = 20;
    sprite.filters = [blurFilter];
    // event
    sprite.eventMode = "static"
    sprite.on("pointerover", () => {
      blurFilter.blur = 0
    })
    sprite.on("pointerout", () => {
      blurFilter.blur = 20
    })
    // 轮廓滤镜
    const outlineFilter = new OutlineFilter(1, 0xff99cc);
    sprite.filters.push(outlineFilter) 
    // 发光滤镜
    const glowFilter = new GlowFilter(15, 5, 1, 0xff9999, 0.5); // distance, outerStrength, innerStrength, color, quality
    sprite.filters.push(glowFilter)
  }


  return <div className='page' ref={demoRef}></div>
}



export default DEMO5
