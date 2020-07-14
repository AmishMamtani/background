var ground;
var doctor;
var bg,backGround;
var obstacle1,mask1,sani1;
var coronaGroup,maskGroup,sanitizerGroup;
function preload(){
bg = loadImage("Images/BG.png")
}
function setup(){
    createCanvas(1200,800);
    backGround = createSprite(6000,400,12000,800);
    ground = new Ground(600,780,1200,20);
    doctor = new Doctor(100,700,40,100);
    obstacle1 = new Obstacle(600,400,100,100);
    mask1 = new Collect();
    
    sani1 = new Collect();
    coronaGroup = new Group();
    maskGroup = new Group();
    sanitizerGroup = new Group();
}
function draw(){
    background(0);
    backGround.addImage("background",bg);
    backGround.scale = 1.6;
    backGround.velocityX=-2;
    console.log(backGround.x);
    if(backGround.x===-4800){
        backGround.x=6000;
    }
    
    //doctor.depth = backGround.depth+1;
    //ground.depth = backGround.depth+1;
    doctor.body.collide(ground.body);
    //doctor.body.bounceOff(ground.body);
    ground.body.debug = true;
    ground.reset();
    doctor.check();
    doctor.jump();
    mask1.spawnMask();
    sani1.spawnSanitizer();
    obstacle1.spawn();
    drawSprites();
}