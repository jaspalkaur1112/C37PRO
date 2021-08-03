class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //await tells thes javascript that it has to wait till my line of code is complete
  //whenever we are using await inside a function, we have to declare that function as async

  async start(){
    if(gameState === 0){
      player = new Player();                                                   //once function will read the database only once. it will create a temporaray listening of database
      var playerCountRef = await database.ref('playerCount').once("value");   //we dont want it to repeat like 'on' function
      if(playerCountRef.exists()){   //
        playerCount = playerCountRef.val();
        player.getCount();                //here we are calling "getcount" function of player class which will add the function "On" for continously listener
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();     //here we are calling inbuilt hide function of javascript
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){       // for(var plr=0; plr<=4; plr++) like this plr will have some value, we dont want plr to hold any value. we want it to hold string like "player1"
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
