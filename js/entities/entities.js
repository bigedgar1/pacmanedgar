game.PlayEntity = me.Entity.extend({
   init: function(x, y, setting){
       this._super(me.Entity, 'init', [x, y, {
           image: "player",
           width: 64,
           height: 64,
           spritewidth: "64",
           spriteheight: "65",
           getShape: function(){
               return(new me.Rect(0, 0, 64, 64)).toPolygon();
           }
       }]);  
   
    this.body.setvelocity(5, 20);
    
    this.renderable.addAnimation("idle");
    this.renderable.addAnimation("wlak");
   
   this.renderable.setCurrentAnimation("idle");
   },
   
   update: function(){
       if(me.input.isKeyPressed("rght{")){
           //sets the position of my x by  adding the velocity defind above in
           //setvelocity() and mulitplying it by me timer tick .
           //me timer tick mackes the movement look smooth
           this.body.vel.x += this.body.accel.x * me.timer.tick;
           this.renderable.setCurrentAnimation("walk");
       }else{
           this.body.vel.x = 0;
       }
       
       this.body.update(delta);
       return true;
   }
});