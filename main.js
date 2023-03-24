kaboom({
  background: [ 0, 0, 0]
})

 loadSprite("wall" , "assets/OIP.jpg")


scene("start-game", () => {

add([
  text("click here \n to start game", {
    size: 40 
  }
  ),
  pos(420,300),
]);

onMouseDown(() => {
  go("game");
})

})


scene("game", () => {

gravity(200);
addLevel([
"                                                 ========================================================================                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 =                                                                      =                                                     ",
"                                                 ========================================================================                                                     " 
], {
  width: 7,
  height: 7, 
  "=": () => [
    sprite("wall", {width:7, height:7}),
    area(),
    solid(), 
  ],
}


)


// Blocks
const player = add ([
  rect(50,100),
  pos(600,10),
  area(),
  color(255, 0, 0),
  body(),
 
]);

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
  if (isKeyDown ("left")){
    player.move(-100, 0)
  }
})

onUpdate(()=> {
  if (isKeyDown ("right")){
    player.move(100, 0)
  }
})

onUpdate(()=> {
  if (isKeyDown ("down")){
    player.move(0, 500)
  }
})

})

go("start-game")
// maybe rotate, not idea if it works
// onUpdate(()=> {
//   if (onKeyPress("a")){
//     player.rotate(a=90)
//   }
// })


