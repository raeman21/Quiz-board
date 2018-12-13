var buttonClick = function() {
  var answers = ["true/false", "Method", "Lower Camel case", "var", "quotes"];
  var eachPoint = 20;
  var score = 0;
  var answerOne = ($("input[type=radio][id=rightAnswer1]:checked").val());
  var answerTwo = ($("input[type=radio][name=qn2]:checked").val());
  var answerThree = ($("input[type=radio][name=qn3]:checked").val());
  var answerFour = ($("input[type=radio][name=qn4]:checked").val());
  var answerFive = ($("input[type=radio][name=qn5]:checked").val());

  var totalPoints = function percentage(score) {

    if (answerOne === undefined || answerTwo === undefined || answerThree === undefined)

      if (answerOne === answers[1]) {
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
    }
    if (answerFive === answer[5]) {
      score += eachPoint
    }

    $(document).ready.function() {
      $("#button").click(dunction(
        alert("buttonClick")
      ))
    }
  };
};
