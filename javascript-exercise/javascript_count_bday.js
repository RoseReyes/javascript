//count your birthday
var daysUntilMyBirthday = 60;

for (var Index = daysUntilMyBirthday; Index >= 0; Index--) {
    if (Index <= 60 && Index >= 30) {
        console.log(Index + "More days to prepare.")
    }
    else if (Index < 30 && Index >= 10) {
        console.log(Index + "Almost there...")
    }
    else if (Index < 10 && Index > 5) {
        console.log(Index + "A little bit more!!")
    }
    else if (Index <= 5 && Index >= 2){
        console.log(Index + "DAYS UNTIL MY BIRTHDAY!")
    }
    else if (Index == 1) {
        console.log(Index + "DAY UNTIL MY BIRTHDAY!")
    }
    else {
        console.log("HAPPY BIRTHDAY!!")
    }
}