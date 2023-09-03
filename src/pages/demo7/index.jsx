import { useEffect, useRef, useState } from "react"
import * as PIXI from 'pixi.js';
import gsap from "gsap"
import "./index.css"



let app = null
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let peopleContainer = null
let people = null
const DISTANCE = 10
let room = null

const checkPeopleHitRoom = (people, room) => {
  const pCenterX = people.x + people.width / 2
  const pCenterY = people.y + people.height / 2

  const roomStartX = room.x
  const roomEndX = room.x + room.width
  const roomStartY = room.y
  const roomEndY = room.y + room.height

  console.log("people", pCenterX, pCenterY)
  console.log("room", roomStartX, roomEndX, roomStartY, roomEndY)

  if (pCenterX >= roomStartX && pCenterX <= roomEndX && pCenterY >= roomStartY && pCenterY <= roomEndY) {
    return true
  }


  return false

}

const DEMO7 = () => {
  const demoRef = useRef(null)
  const [scaleX, setScaleX] = useState(1)
  const [scaleY, setScaleY] = useState(1)
  const [position, setPosition] = useState([200, 160])

  useEffect(() => {
    const resize = () => {
      // 获取当前窗口的宽度和高度
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      // 计算缩放比例
      const scaleX = currentWidth / windowWidth;
      const scaleY = currentHeight / windowHeight;
      // 设置舞台对象的缩放属性
      app.stage.scale.set(scaleX, scaleY);
      setScaleX(scaleX)
      setScaleY(scaleY)
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
    drawRoom()
    drawPeople()
  }, [])


  useEffect(() => {
    drawPeople()
  }, [position])


  const init = () => {
    app = new PIXI.Application({
      background: '#1099bb',
      resizeTo: window,
      antialias: true,
    });
    demoRef.current.appendChild(app.view);
    console.log("app", app)

    // app.ticker.add(()=>{
    //   console.log(1111)
    // })
  }

  const drawBG = () => {
    const texture = PIXI.Texture.from('/textures/map.jpeg');
    const sprite = new PIXI.Sprite(texture);
    sprite.width = app.screen.width;
    sprite.height = app.screen.height;
    app.stage.addChild(sprite);
  }

  const drawPeople = () => {
    if (!peopleContainer) {
      const texture = PIXI.Texture.from('/textures/avatar_down.png');
      people = new PIXI.Sprite(texture);
      const text = new PIXI.Text('Hello World', {
        fontFamily: 'Arial',
        fontSize: 12,
        fill: 0xffffff, // 颜色
        align: 'center', // 对齐方式
        height: 12, // 文本高度
      });
      text.position.x = 0;
      text.position.y = 0;
      people.position.x = 0;
      people.y = text.height;
      people.width = 60;
      people.height = 60;
      peopleContainer = new PIXI.Container();
      // peopleContainer.width = 60;
      // peopleContainer.height = 100;
      peopleContainer.addChild(text);
      peopleContainer.addChild(people);
      peopleContainer.x = position[0];
      peopleContainer.y = position[1];
      peopleContainer.zIndex = 2
      app.stage.addChild(peopleContainer);
    } else {
      gsap.to(peopleContainer, { x: position[0], y: position[1], duration: 0.5, ease: "power3" });
      console.log(checkPeopleHitRoom(peopleContainer, room))
    }
  }

  const drawRoom = () => {
    console.log(app.screen.width, app.screen.height)
    const centerX = app.screen.width / 2
    const centerY = app.screen.height / 2
    const x = centerX - 260
    const y = centerY - 400
    const width = 530
    const height = 300
    room = new PIXI.Graphics();
    room.beginFill(0x66ccff);
    room.drawRect(0, 0, width, height);
    room.zIndex = 1
    // room.visible = false
    room.endFill();
    room.position.set(x, y);

    app.stage.addChild(room);
  }

  return (
    <div className="page wrapper">
      <div className="demo" ref={demoRef}>
      </div>
    </div>
  )
}


export default DEMO7
