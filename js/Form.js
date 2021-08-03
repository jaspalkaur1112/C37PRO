class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){     // This hide() function is being created by us
    this.greeting.hide();  //this hide() is predefined function of JS
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{     //always use arrow function when you are using this inside a fucntion
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;    //we are updating the player count in our vriable index of object player
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
