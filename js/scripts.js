$(document).ready(function() {
  $("#languageForm").submit(function(event) {

// The following variables will be changed as questions are answered. They all start at 0 for consistency, and will be compared later when we want to find the result.

    var python = 0;
    var javaScript = 0;
    var cSharp = 0;
    var rust = 0;
    var ruby = 0;
    var html = 0;

// Each var below here has an if statement that determines the answer of the question by pulling the value (1, 2, 3 etc depending on amount of answers), then defines what happens when that number is met .In this case, a 1 (for beginner in the question) adds +1 to the above variables for the final verdict.)
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
      if (question1 === 1){

        python = python + 1;
        javaScript = javaScript + 1;
        cSharp = cSharp + 0;
        rust = rust + 0;
        ruby = ruby + 0;
        html = html + 0;

      } else if (question1 === 2) {

        python = python + 0;
        javaScript = javaScript + 0;
        cSharp = cSharp + 1;
        rust = rust + 1;
        ruby = ruby + 0;
        html = html + 0;

      } else if (question1 === 3) {

        python = python + 0;
        javaScript = javaScript + 0;
        cSharp = cSharp + 0;
        rust = rust + 0;
        ruby = ruby + 1;
        html = html + 1;

      };


    var question2 = $("input:radio[name=question2]:checked").val();
      if (question1 === 1){

        python = python + 1;
        javaScript = javaScript + 1;
        cSharp = cSharp + 1;
        rust = rust + 0;
        ruby = ruby + 0;
        html = html + 0;

      } else if (question1 === 2) {

        python = python + 0;
        javaScript = javaScript + 0;
        cSharp = cSharp + 0;
        rust = rust + 1;
        ruby = ruby + 1;
        html = html + 1;

      };


console.log(question1);
console.log(python);
      // Here are the ways in which I am trying to hide and show the questions via next/back buttons. It doesn't work for now.

        // // Main page start button
        //     $("#question0next").click(function(){
        //       $("#languageForm").toggle();
        //     });
        // // question 1 buttons
        //     $("#question1next").click(function(){
        //       $("#question1").hide();
        //       $("#question2").show();
        //     });
        //     $("#question1back").click(function(){
        //       $("#question1").hide();
        //     });
        //
        //   // question 2 buttons
        //
        //     $("#question2next").click(function(){
        //       $("#question2").hide();
        //       $("#question3").show();
        //     });
        //     $("#question2back").click(function(){
        //       $("#question1").show();
        //       $("#question2").hide();
        //     });
        //
        //   // question 3 buttons
        //
        //     $("#question3next").click(function(){
        //       $("#question3").hide();
        //       $("#question4").show();
        //     });
        //     $("#question2back").click(function(){
        //       $("#question2").show();
        //       $("#question3").hide();
        //     });
        //
        // // question 4 buttons
        //     $("#question4next").click(function(){
        //       $("#question4").hide();
        //       $("#question5").show();
        //     });
        //     $("#question4back").click(function(){
        //       $("#question3").show();
        //       $("#question4").hide();
        //     });
        //
        //   // question 5 buttons
        //
        //     $("#question5next").click(function(){
        //       $("#question5").hide();
        //       $("#question6").show();
        //     });
        //     $("#question5back").click(function(){
        //       $("#question4").show();
        //       $("#question5").hide();
        //     });
        //
        //   // question 6 buttons
        //
        //     $("#question6next").click(function(){
        //       $("#question6").hide();
        //       $("#submitStyle").show();
        //     });
        //     $("#question6back").click(function(){
        //       $("#question5").show();
        //       $("#question6").hide();
        //     });
        //
        //   // Submit buttons
        //
        //     $("#submitBack").click(function(){
        //       $("#question6").show();
        //       $("#submitStyle").hide();
        //     });

    event.preventDefault();
  });
});
