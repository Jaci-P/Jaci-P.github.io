alert("You're lost! Make wise decisions to find your way home!");

let road_or_woods = prompt("Press 1 to travel on the road. Press 2 to brave the woods.");

if(road_or_woods == 1){
    let bus_or_hitchhike = prompt("Do you (1) pay for the bus, or do you (2) hitch-hike?");
if(bus_or_hitchhike == 2){
alert("Game Over. You were picked up my a murderer! Don't get into strangers vans!");
}else{
    let keepgoing_or_stop = prompt("After a while you get hungry. Do you (1) ignore your hunger and keep going, or (2) stop for a snack?");
    if(keepgoing_or_stop==1){
        alert("Congratulations! You found your way home!");
    } else {
        alert("You got run over by another bus! You should've looked both ways! Game over!");
    }
}
} else{
    alert("Watch where you step! A venemous snake bit you in the ankle and you died a slow death. Game over.");
}
