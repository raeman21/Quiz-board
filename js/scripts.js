$(document).ready(function() {
  $("#button").click(function() {
//Business logic//
    var answer = []
    answer.push($("input:radio[name=qn1]:checked").val())
    answer.push($("input:radio[name=qn2]:checked").val())
    answer.push($("input:radio[name=qn3]:checked").val())
    answer.push($("input:radio[name=qn4]:checked").val())
    answer.push($("input:radio[name=qn5]:checked").val())

    var score = 0;


    if (answer[0] === "20") {
      score += 20;

    }
    if (answer[1] === "20") {
      score += 20;

    }
    if (answer[2] === "20") {
      score += 20;

    }
    if (answer[3] === "20") {
      score += 20;

    }
    if (answer[4] === "20") {
      score += 20;

    }
    //UI logic//
    $(".display").val(score);
  });
  $("#button").click(function() {
    $('.well').hide()
    $(".totalResult").show()
  });
});
