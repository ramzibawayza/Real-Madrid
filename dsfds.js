var bg_color = document.getElementById("bg_color");
var confirmMe = document.getElementById("confirmMe");
var alertMe = document.getElementById("alertMe");
bg_color.addEventListener("click",function(){
  var color = prompt("write the name of the new background-color:");
  document.body.style.backgroundColor = color;
});

var player = prompt("How many football player in one team?");
if(player == 11){
  alert("correct answer");
}else{
  alert("sorry try again!");
}

confirmMe.addEventListener("click",function(){
    confirm("Liverpool won the champion lats year");
  });
  alertMe.addEventListener("click",function(){
    alert("Do NOT close our website");
  });
  