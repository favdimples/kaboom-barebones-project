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
loadSprite("long", "assets/green-long.png");
loadSprite("wide", "assets/blue-wide.png");

loadSprite("ground", "assets/ground.jpg");
loadSprite("ceiling", "assets/ceiling.jpg");
loadSprite("wall", "assets/wall.jpg");

loadSprite("logo", "assets/tetris-logo.png");


let MOVE_SPEED = 200
let block = 0
const STAY_SPEED = 0
const TIME_LEFT = 100
const BLOCK_SIZE = 20
const TIME_END = 8
const TIME_INTERVAL = 1
const sprites = ["wide", "long"];
// const sprites = ["red", "blue", "yellow", "green", "pink", "purple"];
const spriteName = choose(sprites)
const spriteColor = color (rand(0,255), rand(0,255), rand(0,255));



//adds logo
add([
  sprite("logo"),
  pos(width()/2-25, height()/2),
  origin("center"),
  scale(0.75)
])

//adds button to start the game
function addGameButton(txt, p, f) {
  const btn = add([
    text(txt),
    pos(width()/2,90),
    origin("center"),
    area({ cursor: "pointer", }),
    scale(0.4),
    ])
          
       btn.onClick(f)
          
    }
         
    addGameButton("click here\nto start the game", vec2(20, 10), () => go ("game"))

//adds game-description
add([
  text("GAME DESCRIPTION:\nIn Tetris, players complete lines\nby moving tetrominoes,\nwhich descend onto the playing field.\nThe completed lines disappear and grant the player points,\nand the player can proceed to fill the spaces.\nThe game ends when the uncleared lines\nreach the top of the playing field"),
  pos(10, 650),
  scale(0.25),
])

//adds button for credit scene
function addButton(txt, p, f) {
const btn = add([
  text(txt),
   pos(1090,750),
   area({ cursor: "pointer", }),
   scale(0.4),
  ])
    
      btn.onClick(f)
    
    }
   
    addButton("click HERE", vec2(20, 10), () => go ("credits"))

add([
  text("to see the credit scene"),
  pos(1050,780),
  scale(0.25),
])

// to access the credit scene
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

//adds button to go back to the game
function addButton(txt, p, f) {
  const btn = add([
    text(txt),
     pos(1200,780),
     area({ cursor: "pointer", }),
     scale(0.3),
    ])
      
        btn.onClick(f)
      
      }
     
      addButton("new game", vec2(20, 10), () => go ("game"))


})




// //adds game-scene
  scene("game", () => {

//creates random blocks
function createBlock  (x,y) {
  add ([
    sprite(spriteName),
    pos(width()/2-25,50),
    body(),
    area(),
    scale(2),
    rotate(),
    origin("center"),
    spriteColor,
    "block",
    {
      isMoving: true
    },
    {
      active : true
    },
  ])
  collides("block", "ground", (b) => {
    b.isMoving = false;
    score.text = score.value
    score.value++
  }) 
  collides("block", "block", (b) => {
    b.isMoving = false;
  })
  collides("block", "ground", (b) => {
    b.active = false;
  })
  collides("block", "block", (b) => {
    b.active = false;
  })
  collides("block", "ceiling", (b) => 
    go("lose"),
  )
}

//spawns a new block every 5 seconds (TIME_INTERVAL is set to 5)
loop(TIME_INTERVAL, () => {
  createBlock();
})

//moves blocks
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

//rotates blocks
keyDown("space", () => {
  every("block", (b) => {
    if(b.active) {
      b.angle = 90;
    } 
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



    })
