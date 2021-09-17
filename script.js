// alert("Linked");

// $('.blue').click(function() {
//     var blue = new Audio('./sounds/blue.mp3');
//     blue.play();
//     $('.blue').attr('class');
// });

// $('.red').click(function() {
//     var blue = new Audio('./sounds/red.mp3');
//     blue.play();
// });

// $('.green').click(function() {
//     var blue = new Audio('./sounds/green.mp3');
//     blue.play();
// });

// $('.yellow').click(function() {
//     var blue = new Audio('./sounds/yellow.mp3');
//     blue.play();
// });

function playSound(name) {
    var color = './sounds/' + name + '.mp3';
    var audio = new Audio(color);
    audio.play();
}

var buttonColours = ["red", "blue", "green", "yellow"];

var userPattern = [];
var gamePattern = [];

var start = false;
var level = 0;

$(document).keypress(function() {
    if (!start) {
        // $('h1').text("Level " + level);
        nextColor();
        start = true;
        $('body').css('background-color', ' rgb(12, 12, 77)')
    }
});

function nextColor() {
    userPattern = [];
    level++;
    $('h1').text("Level " + level);
    var randonNumber = Math.random() * 4;
    var num = Math.floor(randonNumber);
    var randomColor = buttonColours[num];
    // console.log(randomColor);
    $('#' + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomColor);
    playSound(randomColor);
}

$('.btn').click(function() {
    var userChoosenColor = $(this).attr('id');
    // console.log(userChoosenColor);
    // $('#' + id).css('box-shadow', ' 0 0 20px white');
    userPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    console.log(userPattern);
    checkAnswer(userPattern.length - 1)
});

function gameOver() {
    level = 0;
    gamePattern = [];
    start = false;
    // $('body').addClass('game-over');

}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {
        if (userPattern.length === gamePattern.length) {
            nextColor();
        }
    } else {
        playSound('wrong');
        $('h1').text("Game Over, Press A key to restart");
        $('body').css('background-color', 'black');
        gameOver();
    }

}