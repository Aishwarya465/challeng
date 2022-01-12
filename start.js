var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber = Math.floor(Math.random() * 3) + 1;

var randomChosenColour = buttonColours[randomNumber];

var gamePattern = [buttonColours];

gamePattern.push(randomChosenColour);

$("randomChosenColour").fadeOut(100);
