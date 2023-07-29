import * as PIXI from 'pixi.js';
import { useEffect, useRef } from 'react';
import { ShockwaveFilter } from "pixi-filters"

let app = null


const DEMO6 = () => {
  const demoRef = useRef(null)

  useEffect(() => {
    init()
    draw()
  }, [])




  const init = () => {
    app = new PIXI.Application({
      background: '#1099bb',
      resizeTo: demoRef.current,
      // antialias: true
    });
    demoRef.current.appendChild(app.view);
  }


  const draw = () => {
    const texture = PIXI.Texture.from('/textures/map.jpeg');
    const sprite = new PIXI.Sprite(texture);
    sprite.width = app.screen.width;
    sprite.height = app.screen.height;

    const container = new PIXI.Container();
    container.addChild(sprite);
    app.stage.addChild(container);

    const text = new PIXI.Text('PIXI.js', {
      fontSize: 30 + Math.floor(app.screen.width / 10),
      fill: 0xffffff,
      align: 'center',
      dropShadow: true,
      dropShadowAngle: Math.PI / 6,
      dropShadowBlur: 4,
      dropShadowColor: '#000000',
      dropShadowDistance: 6,
    });
    text.x = app.screen.width / 2;
    text.y = app.screen.height / 2;
    text.anchor.set(0.5);
    container.addChild(text);


    // 置换滤镜
    const displacementSprite = PIXI.Sprite.from('/textures/displacement.webp');
    displacementSprite.scale.set(2);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    const displacementFilter = new PIXI.DisplacementFilter(displacementSprite);
    container.addChild(displacementSprite);

    // 震波滤镜
    const shockwaveFilter1 = new ShockwaveFilter(
      [app.screen.width * Math.random(), app.screen.height * Math.random()],
      {
        amplitude: 20,
        radius: 250,
        wavelength: 30,
        speed: 200,
      },
      0
    )

    const shockwaveFilter2 = new ShockwaveFilter(
      [app.screen.width * Math.random(), app.screen.height * Math.random()],
      {
        amplitude: 105,
        wavelength: 65,
        speed: 200,
        radius: 160,
      },
      0
    )

    const shockwaveFilter3 = new ShockwaveFilter(
      [app.screen.width * Math.random(), app.screen.height * Math.random()],
      {
        amplitude: 20,
        wavelength: 30,
        speed: 200,
        radius: 100,
      },
      0
    )


    container.filters = [displacementFilter, shockwaveFilter1, shockwaveFilter2, shockwaveFilter3]



    const createWave = (waveFilter, resetTime) => {
      waveFilter.time += 0.01
      if (waveFilter.time > resetTime) {
        waveFilter.time = 0
        waveFilter.center = [app.screen.width * Math.random(), app.screen.height * Math.random()]
      }
    }

    app.ticker.add(() => {
      displacementSprite.x += 1;
      displacementSprite.y += 1;
      createWave(shockwaveFilter1, 1)
      createWave(shockwaveFilter1, 1.2)
      createWave(shockwaveFilter1, 0.7)
    })

    // 点击事件
    app.view.addEventListener('click', (e) => {
      shockwaveFilter1.center = [e.clientX, e.clientY]
      shockwaveFilter1.time = 0
    })

  }


  return <div className='page' ref={demoRef}></div>
}



export default DEMO6
