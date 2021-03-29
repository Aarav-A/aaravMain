const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// const intersection = array1.filter(element => array2.includes(element));
var engine, world;
var Apple, AppleCut, Banana, BananaCut, Kiwi, KiwiCut,
  Pineapple, PineappleCut, Strawberry, StrawberryCut,
  Watermelon, WatermelonCut
var fruit = []
var rand
var knife
var fruitImage

function preload() {
  fruit1 = loadImage("Fruit Ninja/fruit1.png")
  fruit1cut = loadImage("Fruit Ninja/fruit1cut.png")
  fruit2 = loadImage("Fruit Ninja/fruit2.png")
  fruit2cut = loadImage("Fruit Ninja/fruit2cut.png")
  fruit3 = loadImage("Fruit Ninja/fruit3.png")
  fruit3cut = loadImage("Fruit Ninja/fruit3cut.png")
  fruit4 = loadImage("Fruit Ninja/fruit4.png")
  fruit4cut = loadImage("Fruit Ninja/fruit4cut.png")
  fruit5 = loadImage("Fruit Ninja/fruit5.png")
  fruit5cut = loadImage("Fruit Ninja/fruit5cut.png")
  fruit6 = loadImage("Fruit Ninja/fruit6.png")
  fruit6cut = loadImage("Fruit Ninja/fruit6cut.png")
  Knife = loadImage("Fruit Ninja/knife.png")
}

function setup() {
  createCanvas(1200, 1000);
  engine = Engine.create();
  world = engine.world;

  knife = Bodies.circle(0, 0, 5)
  World.add(world, knife)


}

function draw() {
  background("black");
  Engine.update(engine);
  fruitImage = "fruit" + Math.round(random(1, 6))
  if (frameCount % 30 === 0) {
    fruit.push(new Fruit(0, fruitImage + ".png"))
  }
  for (var i = 0; i < fruit.length; i++) {
    fruit[i].display()
  }

  for (var i = 0; i < fruit.length; i++) {
    // console.log(fruit[i])
    if (knife.x-fruit[i].x <= fruit[i].width/2+knife.width/2 && fruitImage == "fruit" + 1) {
      fruit[i].addImage("fruit1cut.png");
    }
  }
  for (var i = 0; i < fruit.length; i++) {
    if (knife.x-fruit[i].x <= fruit[i].width/2+knife.width/2 && fruitImage == "fruit" + 2) {
      fruit[i].addImage("fruit2cut.png");
    }
  }
  for (var i = 0; i < fruit.length; i++) {
    if (knife.x-fruit[i].x <= fruit[i].width/2+knife.width/2 && fruitImage == "fruit" + 3) {
      fruit[i].addImage("fruit3cut.png");
    }
  }
  for (var i = 0; i < fruit.length; i++) {
    if (knife.x-fruit[i].x <= fruit[i].width/2+knife.width/2 && fruitImage == "fruit" + 4) {
      fruit[i].addImage("fruit4cut.png");
    }
  }
  for (var i = 0; i < fruit.length; i++) {
    if (knife.x-fruit[i].x <= fruit[i].width/2+knife.width/2 && fruitImage == "fruit" + 5) {
      fruit[i].addImage("fruit5cut.png");
    }
  }
  for (var i = 0; i < fruit.length; i++) {
    if (knife.x-fruit[i].x <= fruit[i].width/2+knife.width/2 && fruitImage == "fruit" + 6) {
      fruit[i].addImage("fruit6cut.png");
    }
  }


  image(Knife, mouseX-5, mouseY-5, 50, 50);
}

// function collided(fruit[i]){
//   if(car.x-car.x <= car.width/2+wall.width/2){
  
//   }
// }

