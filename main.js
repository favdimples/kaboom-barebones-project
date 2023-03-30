kaboom({
  background: [ 0, 0, 0]
})

 loadSprite("wall" , "assets/OIP.jpg")


scene("start-game", () => {

add([
  text("click here \n to start game", {
    size: 30
   
  }
  ),
  pos(450,400),
]);

onMouseDown(() => {
  go("game");
})

})


scene("game", () => {

gravity(200);
addLevel([
" ".repeat(width()/14-36) + "=".repeat(72),
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=" + " ".repeat(70) + "=",
" ".repeat(width()/14-36) + "=".repeat(72)
], {
  width: 7,
  height: 7, 
  "=": () => [
    sprite("wall", {width:7, height:7}),
    area(),
    solid(), 
  ],
})


// Blocks
const player = add ([
  "player",
  rect(50,100),
  pos(width()/2-25,10),
  area(),
  color(255, 0, 0),
  body(),
  rotate(0),
  origin("center"), 
{
  active: true
}

]);

loop (5, () => {
  wait(3, () => {
    const player = add ([
      rect(50,50),
      pos(600,10),
      area(),
      solid(),
      color(30,100,0),
      body(),
      ]);
  })
})

  // const player1 = add ([
  //   rect(50,50),
  //   pos(200,10),
  //   area(),
  //   color(50,100,0),
  //   body(),
  // ])


for (let i=0; i<3; i++){

  const x = rand(0, width())
  const y = rand (0, height())
// Ground
  add ([
  rect(width(),48),
  pos (0,height()-48),
  area(),
  solid(),
  color( 0, 0, 0),
]);

}

// move block right, left and down

onUpdate(()=> {
  if (player.pos.y > 600) {
    player.active = false 
  }
  if (isKeyDown ("left") && player.active) {
    player.move(-100, 0)
  }
  
  if (isKeyDown ("right") && player.active) {
    player.move(100, 0)
  }
  
  if (isKeyDown ("down") && player.active) {
    player.move (0, 500)
  }
})

// onUpdate(()=> {
//   if (isKeyDown ("left")){
//     player.move(-100, 0)
//   }
// })

// onUpdate(()=> {
//   if (isKeyDown ("right")){
//     player.move(100, 0)
//   }
// })

// onUpdate(()=> {
//   if (isKeyDown ("down")){
//     player.move(0, 500)
//   }
// })

})

go("start-game")

onKeyPress("space", () => {
  if (player.active) {
    player.angle += 90;
  }
})