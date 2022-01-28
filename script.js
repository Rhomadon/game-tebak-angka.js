alert("Selamat Datang Pemain!!");
var pt1 = 0;
var pt2 = 0;

for (let i = 1; i <= 5; i++) {
  var com = Math.floor(Math.random() * (2 + 1)) + 1;
  var p1 = prompt("Player 1 : Tebak Berapa angka yang saya pikirkan dari 1-3?");
  var p2 = prompt("Player 2 : Tebak Berapa angka yang saya pikirkan dari 1-3?");
  if (com == p1) {
    if (com == p2) {
      pt1 = pt1 + 1;
      pt2 = pt2 + 1;
      alert("Player 1 dan 2 : DRAW Point 1");
    } else {
      pt1 = pt1 + 3;
      alert("Player 1 : WIN Point 3");
    }
  } else if (com == p2) {
    pt2 = pt2 + 3;
    alert("Player 2 : WIN Point 3");
  } else {
    alert("Player 1 dan 2 : Lose Point 0");
  }
}

alert("Hasil Akhir Player 1 : " + pt1 + " || Player 2 : " + pt2);
