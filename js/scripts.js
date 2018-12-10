/*
var rightAnswer= document.getElementById('#right').val(20);
var wrongAnswer= document.getElementById('#wrong').val(0);
var answer= $("input:radio[name=answer1,answer2,answer3,answer4,answer1qn5]:checked").val(20)


  $(document).ready(function){
    $("button").submit(function(event){
      event.preventDefault();
      alert("totalPoints")

    })
  }*/
var answers=["true/false","Method","Lower Camel case","var","quotes"];
var totalPoints=20;

function percentage(score){
  return "Your score is"+ parseInt((score/100)+%)
}
