const colors = ["green", "red", "yellow", "blue"];
let pattern = [];
var btn = $(".btn");
let idx = 0;

//Function that listens to a key being pressed and initiates the game
$(document).ready(function () {
  $(document).keypress(nextSequence);
});

//litting a random button
const nextSequence = () => {
  idx = 0;
  const randInt = Math.floor(Math.random() * 4);
  pattern.push(colors[randInt]);
  console.log(pattern);
  pattern.forEach((color, index) => {
    setTimeout(() => {
      $(`#${color}`).fadeOut(100).fadeIn(100);
      var audio = new Audio(`sounds/${color}.mp3`);
      audio.play();
    }, 500 * index);
  });
};

//Checking if the user's pattern matches with the generated one
btn.click(function () {
  const color = $(this).attr("id");
  $(`#${color}`).fadeOut(100).fadeIn(100);
  var audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
  if (idx < pattern.length - 1) {
    if ($(this).attr("id") == pattern[idx]) {
      idx++;
    } else {
      console.log(idx, $(this).attr("id"));
      restart();
    }
  } else {
    if ($(this).attr("id") == pattern[idx]) {
      $(".heading").text(
        `Congrats. You guessed it Corrrectly. Onto to level ${
          pattern.length + 1
        }`
      );
      $(".heading")
        .removeClass("text-[50px] lg:text-[80px]")
        .addClass("text-[25px] lg:text-[40px]");
    } else {
      restart();
    }
    idx = 0;
    setTimeout(nextSequence, 1000);
  }
});

//When users gives a wrong color
const restart = () => {
  var audio = new Audio(`sounds/wrong.mp3`);
  $(".heading").text(
    `Oopies. It was not the correct guess. Press a key to play again`
  );
  audio.play();
  idx = 0;
  pattern = [];
};
