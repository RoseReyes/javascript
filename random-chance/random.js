function randomChance() {
    var quarters = Math.floor((Math.random)*10);
    var game = Math.floor((Math.random)*10);
    var winning = Math.floor((Math.random)*100);

    while(quarters > 0) {
        
        game
        winning

        if(game === winning) {
            console.log("You won!")
        }
        else {
            console.log("Lose a turn!")
        }

    }
    return quarters;
}