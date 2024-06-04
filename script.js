let modal = document.getElementById("myModal"); // get the modal
let btn = document.getElementById("OpenModalBtn"); // button that opens the modal
let span = document.getElementsByClassName("close")[0]; // span element that closes the modal

btn.onclick = function () {
  // when the user clicks on the button open the modal
  modal.style.display = "block";
};

span.onclick = function () {
  // when the user clicks on <span> (x), close the modal
  modal.style.display = "none";
};

window.onclick = function (event) {
  // when the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// function to change background color
document.getElementById("changeColorBtn").onclick = function () {
  var color = document.getElementById("colorInput").value.toLowerCase();
  var validColors = ["red", "blue", "green", "black", "white"];

  if (validColors.includes(color)) {
    document.body.style.backgroundColor = color;
    modal.style.display = "none";
  } else {
    alert("Invalid color! Please enter red, blue, green, black, or white.");
  }
};
