import * as PIXI from 'pixi.js';
import { useEffect, useRef } from 'react';


PIXI.Assets.add("down", "/textures/avatar_down.png")
PIXI.Assets.add("up", "/textures/avatar_up.png")
PIXI.Assets.add("left", "/textures/avatar_left.png")
PIXI.Assets.add("right", "/textures/avatar_right.png")



let app = null

const DEMO3 = () => {
  const demoRef = useRef(null)

  useEffect(() => {
    init()
    load()
    loadScene1()
  }, [])

  const init = () => {
    app = new PIXI.Application({ background: '#1099bb', resizeTo: window, antialias: true });
    demoRef.current.appendChild(app.view);
  }

  const load = async () => {
    const textures = await PIXI.Assets.load(["down", "up", "left", "right"])
    console.log("textures", textures)


    const sprite = new PIXI.Sprite(textures.down);
    const sprite2 = new PIXI.Sprite(textures.up);

    sprite.scale.set(0.5, 0.5);

    const container = new PIXI.Container();
    container.addChild(sprite);
    container.addChild(sprite2);

    app.stage.addChild(container);
  }

  // 方便不同场景的切换
  const loadScene1 = async () => {
    // 添加场景1的资源
    PIXI.Assets.addBundle("secene1", {
      down: "/textures/avatar_down.png",
      up: "/textures/avatar_up.png",
      left: "/textures/avatar_left.png",
      right: "/textures/avatar_right.png",
    })
    const assets = await PIXI.Assets.loadBundle("secene1",progress => {
      console.log("progress: ==> ", progress)
    })
    console.log("scene1 assets", assets)
  }

  return <div className='page' ref={demoRef}></div>
}



export default DEMO3
