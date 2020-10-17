class Form {
    constructor() { }

    hide()
    {
        input.hide();
        button.hide();
    }
      display() {
      var title = createElement('h2');
      title.html("Car racerzzzzzz *have fun gamers!*");
      title.position(130, 0);
      var input = createInput("Name");
      input.position(130, 160);
      var button= createButton('Play');
      button.position(250,200);
        var greeting= createElement('h3');
        button.mousePressed(function(){
            //input.hide();
            //button.hide();
            //var input= input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello Gamer! "+name);
            greeting.position(130,160);
        })
      }
}