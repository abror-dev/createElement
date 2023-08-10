var elInp1 = document.querySelector(".inp1");
var elInp2 = document.querySelector(".inp2");
var elBox1 = document.querySelector(".box1");
var elBox2 = document.querySelector(".box2");
var elBox3 = document.querySelector(".box3");
var elBox4 = document.querySelector(".box4");
var elBox5 = document.querySelector(".box5");
var elBox6 = document.querySelector(".box6");
var elBox7 = document.querySelector(".box7");
var elBox8 = document.querySelector(".box8");
function add(evn) {
  event.preventDefault();
  if (elInp1.value == "li") {
    var newLi = document.createElement("li");
    newLi.textContent = elInp2.value;
    elBox2.appendChild(newLi);
    elInp1.value = "";
    elInp2.value = "";
  }
  if (elInp1.value == "p") {
    var newP = document.createElement("p");
    newP.textContent = elInp2.value;
    elBox1.appendChild(newP);
    elInp1.value = "";
    elInp2.value = "";
  }
  if (elInp1.value == "h1") {
    var newH1 = document.createElement("h1");
    newH1.textContent = elInp2.value;
    elBox3.appendChild(newH1);
    elInp1.value = "";
    elInp2.value = "";
  }
  if (elInp1.value == "mark") {
    var newMark = document.createElement("mark");
    newMark.textContent = elInp2.value;
    elBox4.appendChild(newMark);
    elInp1.value = "";
    elInp2.value = "";
  }
  if (elInp1.value == "img") {
    var newImg = document.createElement("img");
    newImg.src = elInp2.value;
    elBox6.appendChild(newImg);
    elInp1.value = "";
    elInp2.value = "";
  }
  if (elInp1.value == "input") {
    var newInput = document.createElement("input");
    newInput.textContent = elInp2.value;
    elBox7.appendChild(newInput);
    elInp1.value = "";
    elInp2.value = "";
  }
  if (elInp1.value == "div") {
    var newDiv = document.createElement("div");
    newDiv.textContent = elInp2.value;
    elBox7.appendChild(newDiv);
    elInp1.value = "";
    elInp2.value = "";
  }
}
