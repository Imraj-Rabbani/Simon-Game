color = ["green", "red", "yellow", "blue"];
pattern = []; //for storing the computer generated pattern
userPattern = []; //for storing the user generated pattern

$(document).on("keydown", function () {
  nextSequence();
});

const nextSequence = () => {
  let randint = Math.floor(Math.random() * 4);
  pattern.push(color[randint]);
  console.log(pattern, "pattern");
  $(`#${color[randint]}`).fadeOut(100).fadeIn(100);
  var audio = new Audio(`sounds/${color[randint]}.mp3`);
  audio.play();
};

$(".btn").on("click", function () {
  userPattern.push(this.id);

  $(`#${this.id}`).fadeOut(100).fadeIn(100);

  var audio = new Audio(`sounds/${this.id}.mp3`);
  audio.play();

  total = pattern.length;
  flag = true

  if (total === userPattern.length) {
    //without this condition the for loop begins before taking all the input from the user
    for (let i = 0; i < total; i++) {

      if (pattern[i] === userPattern[i]) {

      } else {
        restart();
        flag = false;
        break;
      }
    }

    if (flag) {
      $(":header").text(`Level ${pattern.length}`)
      setTimeout(nextSequence, 1000);
      userPattern = [];
    }
  }
});

const restart = () => {
  $(":header").text(`Press any key to restart`)

  userPattern = [];
  pattern = [];
  var audio = new Audio(`sounds/wrong.mp3`);
  audio.play();
};
