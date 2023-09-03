import { useEffect, useRef, useState } from "react"
import * as PIXI from 'pixi.js';
import "./index.css"

let app = null
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let people = null
let position = [200, 160]
const DISTANCE = 10

const DEMO8 = () => {
  const demoRef = useRef(null)
  const [scaleX, setScaleX] = useState(1)
  const [scaleY, setScaleY] = useState(1)
  const [position, setPosition] = useState([200, 160])

  useEffect(() => {
    const resize = () => {
      // // 获取当前窗口的宽度和高度
      // const currentWidth = window.innerWidth;
      // const currentHeight = window.innerHeight;
      // // 计算缩放比例
      // const scaleX = currentWidth / windowWidth;
      // const scaleY = currentHeight / windowHeight;
      // // 设置舞台对象的缩放属性
      // app.stage.scale.set(scaleX, scaleY);
      // setScaleX(scaleX)
      // setScaleY(scaleY)
    }

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }

  }, [])

  useEffect(() => {
    const onKeydown = (event) => {
      const newPosition = [position[0], position[1]]
      if (event.key === "ArrowUp" || event.key === "w") {
        // 上键
        newPosition[1] = newPosition[1] - DISTANCE
        setPosition(newPosition)
      } else if (event.key === "ArrowDown" || event.key === "s") {
        // 下键
        newPosition[1] = newPosition[1] + DISTANCE
        setPosition(newPosition)
      } else if (event.key === "ArrowLeft" || event.key === "a") {
        // 左键
        newPosition[0] = newPosition[0] - DISTANCE
        setPosition(newPosition)
      } else if (event.key === "ArrowRight" || event.key === "d") {
        // 右键
        newPosition[0] = newPosition[0] + DISTANCE
        setPosition(newPosition)
      } else {
        return
      }
    }

    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    }
  }, [position])


  useEffect(() => {
    init()
    drawBG()
    drawPeople()
  }, [])


  useEffect(() => {
    drawPeople()
  }, [position])


  const init = () => {
    app = new PIXI.Application({
      background: '#1099bb',
      // resizeTo: demoRef.current,
      antialias: true,
      width: 1479,
      height: 1880,
    });
    demoRef.current.appendChild(app.view);
    console.log("app", app)
  }

  const drawBG = () => {
    const texture = PIXI.Texture.from('/textures/map.jpeg');
    const sprite = new PIXI.Sprite(texture);
    sprite.width = 1200;
    sprite.height = 800;
    app.stage.addChild(sprite);
    sprite.position.set(app.renderer.width/2, app.renderer.height/2); // 设置文字位置
  }

  const drawPeople = () => {
    if (!people) {
      const texture = PIXI.Texture.from('/textures/avatar_down.png');
      const sprite = new PIXI.Sprite(texture);

      const text = new PIXI.Text('Hello World', {
        fontFamily: 'Arial',
        fontSize: 12,
        fill: 0xffffff, // 颜色
        align: 'center', // 对齐方式
        height: 12, // 文本高度
      });
      text.position.x = 0;
      text.position.y = 0;
      sprite.position.x = 0;
      sprite.y = text.height;
      sprite.width = 60;
      sprite.height = 60;
      people = new PIXI.Container();
      // people.width = 60;
      // people.height = 100;
      people.addChild(text);
      people.addChild(sprite);
      app.stage.addChild(people);

      console.log("text.height", text.height)
    }
    people.x = position[0];
    people.y = position[1];

  }


  return (
    <div className="page wrapper">
      <div className="demo" ref={demoRef}>
      </div>
    </div>
  )
}


export default DEMO8
