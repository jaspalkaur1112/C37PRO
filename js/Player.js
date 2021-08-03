class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;  //concating the player number with player folder which is inside players in database
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

   //static functions are those which will allow us to call them 
   //without even creating an object of that class. We can call them using their class name 
   // Here playerinfo might be required even before the user has registered
//data updated cant be changed later in static function

  static getPlayerInfo(){     
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{      //arrow function binds itself to the object and not to the actual function that is calling it.
      allPlayers = data.val();
    })
  }
}
