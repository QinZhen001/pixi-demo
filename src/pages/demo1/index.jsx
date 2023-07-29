import * as PIXI from 'pixi.js';
import "./index.css"
import { useEffect, useRef } from 'react';



let app = null

const DEMO1 = () => {
  const demoRef = useRef(null)

  useEffect(() => {
    init()
    drawRect()
    drawRoundedRect()
    drawPolygon()
    drawArc()
    drawLine()
  }, [])


  const init = () => {
    app = new PIXI.Application({ background: '#1099bb', resizeTo: window, antialias: true });
    demoRef.current.appendChild(app.view);
  }

  // 矩形
  const drawRect = () => {
    const rect = new PIXI.Graphics();
    rect.beginFill(0x66ccff);
    rect.drawRect(50, 50, 100, 100);
    rect.endFill();
    app.stage.addChild(rect);
  }

  // 圆角矩形
  const drawRoundedRect = () => {
    const roundedRect = new PIXI.Graphics();
    roundedRect.beginFill(0xff6699);
    roundedRect.drawRoundedRect(150, 150, 100, 100, 10); // x, y, width, height, radius
    roundedRect.endFill();
    roundedRect.position.set(100, 100) // x, y
    app.stage.addChild(roundedRect);

    console.log("roundedRect", roundedRect)
  }

  // 多边形
  const drawPolygon = () => {
    const polygon = new PIXI.Graphics();
    polygon.beginFill(0x66ff33);
    polygon.drawPolygon([0, 0, 100, 0, 100, 100, 0, 100]);
    polygon.endFill();
    polygon.position.set(300, 300) // x, y
    app.stage.addChild(polygon);
  }

  // 圆弧
  const drawArc = () => {
    const arc = new PIXI.Graphics();
    arc.beginFill(0xffcc33);
    arc.arc(0, 0, 50, 0, Math.PI); // x, y, radius, startAngle, endAngle
    arc.endFill();
    arc.position.set(400, 400) // x, y
    app.stage.addChild(arc);
  }

  // 直线
  const drawLine = () => { 
    const line = new PIXI.Graphics();
    line.lineStyle(2, 0xff0000);
    line.moveTo(0, 0);
    line.lineTo(100, 100);
    line.lineTo(200, 100);
    line.position.set(500, 500) // x, y
    app.stage.addChild(line);
  }

  return <div className='page' ref={demoRef}></div>
}



export default DEMO1
