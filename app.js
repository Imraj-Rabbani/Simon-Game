// var colors = ["green", "red", "yellow", "blue"];
// var randomColor = [];
// var count = 0;

// $("#target").on("keydown", function () {
//   nextSequence();
// });

// const nextSequence = () => {
//   var randomNumber = Math.floor(Math.random() * 4);
//   // console.log(`${randomNumber} randomnumber`);
//   choosenColor = colors[randomNumber];
//   randomColor.push(choosenColor);
//   // console.log(randomColor);
//   $(`.${choosenColor}`).fadeOut(100).fadeIn(100);

//   var audio = new Audio(`sounds/${choosenColor}.mp3`);
//   audio.play();

//   count += 1;
// };

// userChoosenPattern = [];
// var total = randomColor.length;

// $(".btn").click(function () {
//   $(`#${this.id}`).fadeOut(100).fadeIn(100);

//   userChoosenid = this.id;
//   // console.log(`${this.id} this.id`);
//   userChoosenPattern.push(userChoosenid);
//   total++;

//   var audio = new Audio(`sounds/${userChoosenid}.mp3`);
//   audio.play();

//   let flag = true;
//   for (let i = 0; i < total; i++) {
//     if (userChoosenPattern[i] === randomColor[i]) {
//       console.log("miltese");
//     } else {
//       flag = false;
//       total = 0;
//       break;
//     }
//   }
//   setTimeout(nextSequence,2000)
//   console.log(flag);
//   if (flag) {
//     console.log("new");
//     userChoosenPattern = [];
//     total++;
//     $("h1").textContent = `Level ${count + 1}`;

//     nextSequence();
//   } else {
//     console.log("restart hocche");
//     // restart()
//   }
// });

// // const restart = () => {
// //     $("h1").textContent=`Game Over.Press any key to Restart`
// //             randomColor=[]
// //             count=0
// //             var audio = new Audio(`sounds/wrong.mp3`);
// //             audio.play();
// //             nextSequence()
// // }

color = ["green", "red", "yellow", "blue"];
pattern = []; //for storing the computer generated pattern
userPattern = []; //for storing the user generated pattern

$("#target").on("keydown", function () {
  nextSequence();
});

const nextSequence = () => {
  let randint = Math.floor(Math.random() * 4);
  pattern.push(color[randint]);
  // console.log(pattern, "pattern");
  $(`#${color[randint]}`).fadeOut(200).fadeIn(200);
  var audio = new Audio(`sounds/${color[randint]}.mp3`);
  audio.play();
};

$(".btn").on("click", function () {
  userPattern.push(this.id);
  $(`#${this.id}`).fadeOut(200).fadeIn(200);
  var audio = new Audio(`sounds/${this.id}.mp3`);
  audio.play();
  // console.log(userPattern, "userpattern");
  total = pattern.length;
  flag = true;
  if (total === userPattern.length) {
    //without this condition the for loop begins before taking all the input from the user
    for (let i = 0; i < total; i++) {
      // console.log(i);
      if (pattern[i] === userPattern[i]) {
        // console.log("matched")
      } else {
        // console.log('restarting')
        restart();
        flag = false;
        break;
      }
    }
    if (flag) {
      $(":header").text(`Level ${pattern.length}`)
      setTimeout(nextSequence, 1000);
      // console.log('resetting userpattern')
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
