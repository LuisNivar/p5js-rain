class Drop{
    z = random(0, 10);
    x = random(0, width);
    y = random(-150, 0);
    yspeed = map(this.z, 1, 10, MIN_VELOCITY, MAX_VELOCITY);
  
    show(){
      stroke(255, 255, 255);
      let size = this.getSize();
      strokeWeight(size.w);
      line(this.x, this.y, this.x, this.y + size.h);
    }
  
    getSize(){
      return {
        w : map(this.z, 0, 10, 1, 2),
        h : map(this.z, 0, 10, 5, 25)
      }
    }
  
    fall(){
      const gravity = 0.05;
      
      this.y += this.yspeed;
      this.yspeed += gravity;
     
      if(this.y > width){
        this.initDrop();
      }
    }
  
    initDrop(){
      this.z = random(0, 10);
      this.x = random(0, width);
      this.y = random(-150, 0);
      this.yspeed = map(this.z, 1, 10, MIN_VELOCITY, MAX_VELOCITY);
    }
  }