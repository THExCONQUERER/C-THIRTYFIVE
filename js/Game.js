class Game
{
    constructor() { }

    //to read the game state from the database
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
             gameState = data.val();

        });

    }


    //to update the game state in database
     update(state) {
       database.ref('/').update({
          gameState : state

       })
       

     }

    //to start the game
    start()
    {
        if(gameState===0)
        {
            player= new Player();
            player.getCount();
            form= new Form();
            form.display();
        }
    }
}