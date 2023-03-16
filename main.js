kaboom()

// Blocks
const player = add ([
  rect(50,50),
  pos(10,10),
  area(),
  color(30,0,0),
  body(),
 
]);

  const player1 = add ([
    rect(50,50),
    pos(200,10),
    area(),
    color(50,100,0),
    body(),
  ])



player.onUpdate(() => {
  player.angle+=120*dt()
})

for (let i=0; i<3; i++){

  const x = rand(0, width())
  const y = rand (0, height())
// Ground
  add ([
  rect(width(),48),
  pos (0,height()-48),
  area(),
  color(30,100,0),
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

  





