import * as PIXI from 'pixi.js';

PIXI.Assets.add("down", "/textures/avatar_down.png")
PIXI.Assets.add("up", "/textures/avatar_up.png")
PIXI.Assets.add("left", "/textures/avatar_left.png")
PIXI.Assets.add("right", "/textures/avatar_right.png")


// options
// r1 r2 x y 


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

class Person {
  constructor(options) {
    this.options = options;

  }

  async init() {
    const textures = await PIXI.Assets.load(["down", "up", "left", "right"])

    const sprite = new PIXI.Sprite(textures.down);
    const sprite2 = new PIXI.Sprite(textures.up);
  }
}
