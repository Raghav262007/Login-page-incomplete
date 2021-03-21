function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const infoObj = [
  { email: "robot@gmail.com", password: "robotonics12346" },
  { email: "happy@gmail.com", password: "happyMan" },
];

let emailUser = document.querySelector(".email").value;
let passUser = document.querySelector(".password").value;

function checkInfo() {
  for (let i = 0; i < infoObj.length; i++) {
    if (emailUser === infoObj[i].email && passUser === infoObj[i].password) {
      /*document.querySelector(".intro").textContent =
            "You have entered correct email and password. You are successfully loged in";*/
      console.log(
        "You have entered correct email and password. You are successfully loged in"
      );
    } else {
      console.log("Incorrect email or password. Log-in failed!");
    }
    /*document.querySelector(".intro").textContent =
            "Incorrect email or password. Log-in failed!";*/
  }
}
//document.querySelector(".logbtn").addEventListener("click", function () {});
