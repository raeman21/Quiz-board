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
var eachPoint=20;

function percentage(score){
  return "Your score is"+ parseInt((score/100)+"%");
}



$('.submit').click(function(event){
  event.preventDefault();

  $('#totalPoints').text('');
  var score=0;
  var answerOne=($("input[type=radio][name=qn1]:checked").val());
  var answerTwo=($("input[type=radio][name=qn2]:checked").val());
  var answerThree=($("input[type=radio][name=qn3]:checked").val());
  var answerFour=($("input[type=radio][name=qn4]:checked").val());
  var answerFive=($("input[type=radio][name=qn5]:checked").val());
});
if (answerOne === undefined || answerTwo === undefined || answerThree === undefined) {
    $('#triviaIncomplete').text('Kindly Complete Trivia Before Submitting');
    $('#triviaIncomplete').fadeOut(10000);
    else if (answerOne === answers[1]) {
      score += eachPoint;
}
if (answerTwo === answers[2]) {
  score += eachPoint;
}
if (answerThree === answer[3]) {
  score += eachPoint;
}
if (answerFour === answer[4]) {
  score += eachPoint;
if (answerFive === answer[5]) {
  score += eachPoint;
}

}
