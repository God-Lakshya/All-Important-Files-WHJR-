class Player {
    constructor() {
        this.index = null;
    this.distance = 0;
    this.name = null; 
    this.email = null;
    }
     
    getCount () {
    var playerCountref = database.ref("playerCount")
    playerCountref.on("value", function(data){
        playerCount = data.val()
    })
    }
    
    updateCount(count){
        database.ref('/').update({
    playerCount : count  
        })
    }
update(name) {
var mailIndex = "player" + playerCount ;
database.ref(mailIndex).set({
    Name : name 
})
} 

update(Email) {
    var mailIndex = "player" + playerCount ;
    database.ref(mailIndex).set({
        Email : mail
    })
    } 

static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
