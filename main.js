kaboom({
	background: [ 0, 0, 0]
  })



// load assets
loadSprite("yellow", "assets/yellow.png");
loadSprite("blue", "assets/blue.png");
loadSprite("green", "assets/green.png");
loadSprite("pink", "assets/pink.png");
loadSprite("purple", "assets/purple.png");
loadSprite("red", "assets/red.png");

loadSprite("ground", "assets/ground.jpg");
loadSprite("ceiling", "assets/ceiling.jpg");
loadSprite("wall", "assets/wall.jpg");

loadSprite("logo", "assets/tetris-logo.png");


let MOVE_SPEED = 200
let block = 0
const STAY_SPEED = 0
const TIME_LEFT = 100
const BLOCK_SIZE = 20
const TIME_END = 5
const sprites = ["red", "blue", "yellow", "green", "pink", "purple"];
const spriteName = choose(sprites)
const spriteColor = color (rand(0,255), rand(0,255), rand(0,255));
// const blocks = choose(["L", "square"])


//adds starting scene
add([
  sprite("logo"),
  pos(width()/2-25, height()/2),
  origin("center"),
  scale(0.75)
])

  add([
    text("click \n to start game"),
    origin("center"),
    pos(width()/2, 90),
    scale(0.5),
    ])

onMouseDown(() => {
  go("game")
}),



  

// //adds game-scene
  scene("game", () => {

const player = add ([
  sprite(spriteName),
  pos(width()/2-25,30),
  body(),
  area(),
  scale(2),
  spriteColor,
  "block",
  {isMoving:true}
]);


// //adds movement
// keyDown("right", () => {
//   player.move(MOVE_SPEED, 0)
// }),

//   keyDown("left", () => {
//     player.move(-MOVE_SPEED, 0)
//   }),

//   keyDown("down", () => {
//     player.move(0, MOVE_SPEED)
//   });

// //if player hits ground it stops
// player.collides("ground", () => {
//   MOVE_SPEED = STAY_SPEED
//   score.value++
//   score.text = score.value
// })

// //if the player connects with the ceiling it will go to the lose scene
// player.collides("ceiling", () => 
//   go("lose"),
//  )

//  //rotates block
//  onKeyPress("space", () => {
//   if (player.active) {
//     player.angle += 90;
//   }
// })

//when player hits ground another block appears
player.collides("ground", () => {
  createRandomBlock(player.pos.x, player.pos.y);
});


//creates random blocks
function createRandomBlock (x,y) {
  add ([
    sprite(spriteName),
    pos(width()/2-25,30),
    body(),
    area(),
    scale(2),
    spriteColor,
    "block",
    {
      isMoving: true
    }
  ]);
}

keyDown("right", () => {
  every("block", (b) => {
    if(b.isMoving) b.move(MOVE_SPEED,0)
  })
})

keyDown("left", () => {
  every("block", (b) => {
    if(b.isMoving) b.move(-MOVE_SPEED,0)
  })
})

keyDown("down", () => {
  every("block", (b) => {
    if(b.isMoving) b.move(0, MOVE_SPEED)
  })
})







//adds layers (obj and ui --> for the score) and adds the default layer object so if it's not sure it goes to the object layer
  layer(["obj", "ui"], "obj")

//adds Level
gravity(200);
  addLevel([
    " ".repeat(width()/14-36) + "y".repeat(72),
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
    " ".repeat(width()/14-36) + "x".repeat(72)
    ], {
      width: 7,
      height: 7, 
      "=": () => [
        sprite("wall", {width:7, height:7}),
        area(), 
        solid(),
        "wall",
      ],
      "y": () => [
        sprite("ceiling", {width:7, height:7}),
        area(),
        solid(),
        "ceiling",
      ],
      "x": () => [
        sprite("ground", {width:7, height:7}),
        area(),
        solid(),
        "ground",
      ]
    }
  
    )





//adds score
const score = add([
  text("0"),
  pos(160,10),
  scale(0.5),
  layer("ui"),
  {
    value: 0,
  },
])

//adds score-text
const scoretext = add([
  text("score:"),
  pos(20, 10),
  scale(0.5),
  layer("ui")
])

//adds timer
const timer = add([
  text("0"),
  pos(90, 40),
  scale(0.25),
  layer("ui"),
  {
    time: TIME_LEFT
  },
])

//makes timer work --> it takes the timer time and adds the delta time (time since last frame), the text then shows that  (toFixed = 2 decimal), if timer is smaller or equal to zero you go to the loose scene and the score vlaue stops
timer.action(() => {
  timer.time -= dt()
  timer.text = timer.time.toFixed(2)
  if (timer.time <= 0) {
    go("lose", score.value)
  }
})

//adds timer-text
const timertext = add([
  text ("timer:"),
  pos(20,40),
  scale(0.25),
  layer("ui"),
])

    

//adds lose scene
scene("lose", () => {
  add([
    text(score.value),
    origin("center"),
    scale(1),
    pos(width() / 2, height() / 2),
  ])

  const timer = add([
    text("0"),
    pos(-100, -100),
    scale(0.25),
    layer("ui"),
    {
      time: TIME_END
    },
  ])
  
  //makes timer work so that credit-scene appears after TIME_END
  timer.action(() => {
    timer.time -= dt()
    timer.text = timer.time.toFixed(2)
    if (timer.time <= 0) {
      go("credits")
    }
  })

})

//adds credit scene that moves upwards due to negativ gravity
scene ("credits", () => {
  add([
    text("this game was made by: \n\n\n\n\n Anina de Gennaro \n\n\n Janina Alleman \n\n\n Rahel Hasler \n\n\n Rahel Ackeret \n\n\n\n\n\n\n\n thankyou for playing"),
    origin ("center"),
    scale(0.5),
    pos (width()/2, 1300),
    body(),
    area(),
  ])

gravity(-50);

})


    })
