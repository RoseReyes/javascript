function randomChance(quarters) {
    
    var game = 0;
    var winning = 0;
    var quartersLeft = 0;

    while(quarters > 0) {
        
        game = Math.floor( (Math.random() * 100) + 1);
        winning = Math.floor( (Math.random() * 100) + 1);
    
        if(game === winning) {
            quartersLeft = quarters + winning
            console.log("You won! - ",quartersLeft)
        }
        else {
            console.log("Lose a turn!")
        }
        quarters--;
    }
        if(quarters === 0) {
        console.log( quarters + " " + "quarters left")
        }
        return quarters;
}
randomChance(300);