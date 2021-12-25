document.addEventListener("DOMContentLoaded", () => {
  var santa = document.getElementById("santa");
  var track = document.getElementById("game");

//   let trackmove = setInterval(() => {
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    track.appendChild(obstacle);
    obstacle.style.left = 1000 + "px";
//   }, 300);

  function jump() {
    document.addEventListener("keyup", function (e) {
      if (e.keyCode == 32) {
        var count = 0;
        let posi = 0;
        let anim = setInterval(function () {
          if (count % 2 == 0) {
            posi = posi + 180;
            santa.style.bottom = posi + "px";
            console.log("santa went up");
            count++;
          } else {
            posi = posi - 180;
            santa.style.bottom = posi + "px";
            console.log("santa came down");
            count++;
          }
        }, 400);
      }
    });
  }
  jump();
});
