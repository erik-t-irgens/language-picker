$(document).ready(function() {
  $("#userHeightForm").submit(function(event) {

// The following variables will be changed as questions are answered. They all start at 0 for consistency, and will be compared later when we want to find the result.

    var python = 0;
    var javaScript = 0;
    var cSharp = 0;
    var rust = 0;
    var ruby = 0;
    var html = 0;

// Each var below here has an if statement that determines the answer of the question by pulling the value (1, 2, 3 etc depending on amount of answers), then defines what happens when that number is met .In this case, a 1 (for beginner in the question) adds +1 to the above variables for the final verdict.)
    var question1 = $("input:radio[name=difficulty]:checked").val();
      if (question1 === 1){

        python = python + 1;
        javaScript = javaScript + 0;
        cSharp = cSharp + 0;
        rust = rust + 0;
        ruby = ruby + 0;
        html = html + 0;

      } else if (question1 === 2) {

        python = python + 0;
        javaScript = javaScript + 0;
        cSharp = cSharp + 0;
        rust = rust + 0;
        ruby = ruby + 0;
        html = html + 0;

      } else if (question1 === 3) {

        python = python + 0;
        javaScript = javaScript + 0;
        cSharp = cSharp + 0;
        rust = rust + 0;
        ruby = ruby + 0;
        html = html + 0;

      }


    var question2 = $("input:radio[name=difficulty]:checked").val();
    if (question2 = ){
      total
    }























    event.preventDefault();
  });
});
