var HOUR = 3;
var MINUTE = 45;
var PERIOD = "AM";

//Condition1: if minutes less than 30, 
//Condition2: "just after" the hour,  
//Condition3: more than 30,
//Condition4: "almost" the next hour

if (MINUTE == 0 && HOUR == 0) {
    console.log("Invalid Hour");
}
else if (MINUTE < 30 && PERIOD == "AM") {
    console.log("It's just after "+ HOUR +" in the morning");
}
else if (MINUTE < 30 && PERIOD == "PM") {
    console.log("It's just after "+ HOUR +" in the evening");
}
else if (MINUTE >= 30 && PERIOD == "AM") {
    HOUR+=1;
    console.log("Its almost "+ HOUR +" in the morning");
}
else if (MINUTE >= 30 && PERIOD == "PM") {
    HOUR+=1;
    console.log("Its almost "+ HOUR +" in the evening");
}
