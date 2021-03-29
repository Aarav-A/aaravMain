class Fruit {
    constructor(y,name) {
        var options = {
            restitution: 0.8
        }
       
        this.r = 5;
        this.body = Bodies.circle(random(0,1200), y, this.r, options);
        var x = Math.round(random(0,1200));
        var x2 = 600
        this.image = loadImage("Fruit Ninja/"+name)
        World.add(world,this.body);
    }
    display() {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,50,50)
        pop()
    }
    
    // fruitCut(){
    //     if()
    // }

}