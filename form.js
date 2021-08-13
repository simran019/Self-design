class Form
{

    constructor()
    {
        
        //this.title = createElement('h1')
        //this.title.html('WW3')
        
    
        this.button1 = createButton('Level-1');
       this.button2 = createButton('Level-2');
        this.button3 = createButton('Level-3');
        this.greeting=createElement('h5');
  
       
    }
    myhide()
    {
      //title.hide();
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
    }
   
    getState(){
      var gameStateRef  = database.ref('gamestate');
      gameStateRef.on("value",function(data){
         gamestate = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
    display()
    {
        fill('Red')
        var title = createElement('h2')
        title.html("Choose level");
        title.position(300, 100);
        this.button1.position(100,200);
        this.button1.style('background', 'yellow');
        this.button2.position(300,200);
        this.button2.style('background', 'yellow');
        this.button3.position(500,200);
        this.button3.style('background', 'yellow');

        this.button1.mousePressed(()=>{
          this.button1.hide();
          formobject.update(1);
          formobject.getState();
          console.log(gamestate);
          formobject.myhide();
        });
        this.button2.mousePressed(()=>{
          this.button2.hide();//hiding button
          formobject.update(1);//updating state
          formobject.getState();
          console.log(gamestate);
          formobject.myhide();
          
          //see gamestate changes but it doesnot hide button
          //here i have written code
          //you will find similar code in mutli player car racing game 
          //i checked it's same
        });
       
        this.button3.mousePressed(()=>{
          this.button3.hide();
          formobject.update(1);
          formobject.getState();
          console.log(gamestate);
          formobject.myhide();
        });
        
        
    }
}
