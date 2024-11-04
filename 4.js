document.getElementById("get-score").addEventListener("click", function(){
var score = document.getElementById("Score").value;

// var SEE = score / (persent * persent);
  
// var score_value = "";

if (score < 90 && score<=100){
  grade = "A+"
  score_value = "Outstanding";
}
else if(score < 80 && score<=90){
  grade = "A"
  score_value = "Excellent";
}
  else if(score > 70 && score<=80){
    grade = "B+"  
    score_value = "Very Good";
}
  else if(score > 60 && score<=70){
    grade = "B"
  score_value = "Good";
}
else if(score > 50 && score<=60){
    grade = "C+"
    score_value = "Satisfacatory";
}
else if(score > 40 && score<=50){
     grade = "C"
    score_value = "Acceptable";
}
else if(score > 35 && score<=40){
  grade = "D+"
    score_value = "Basic";
}
else if(score >0 && score <= 35){
   grade = "D"
    score_value = "Not Graded";
}

alert("Congratulations! You have secured " + grade + "( " + score_value + ")");

});