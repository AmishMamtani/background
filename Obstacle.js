class Obstacle{
    constructor(x,y,width,height){
        
        
    }
    spawn(){
        if(frameCount%200===0){
            this.body=createSprite(random(300,1200),700,50,50);
            this.image = loadImage("Images/Corona_opt.png")
            this.body.addImage("corona",this.image);
            this.body.scale=random(0.1,0.5);
            this.body.velocityX=Math.round(random(-4,-10));
            console.log(this.body.velocityX)
            coronaGroup.add(this.body);   
        }
    }
}