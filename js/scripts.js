$(document).ready(function() {

  // Here are the ways in which I am trying to hide and show the questions via next/back buttons. It doesn't work for now.
  //


    // Main page start button
        $("#startButton").click(function(){
          $("#languageForm").toggle();
        });
    // question 1 buttons
        $("#question1next").click(function(){
          $("#question1").slideUp();
          $("#question2").show();
        });
        $("#question1back").click(function(){
          $("#question1").hide();
        });

      // question 2 buttons

        $("#question2next").click(function(){
          $("#question2").slideup();
          $("#question3").show();
        });
        $("#question2back").click(function(){
          $("#question1").slideDown();
          $("#question2").hide();
        });

      // question 3 buttons

        $("#question3next").click(function(){
          $("#question3").slideUp();
          $("#question4").show();
        });
        $("#question2back").click(function(){
          $("#question2").slideDown();
          $("#question3").hide();
        });

    // question 4 buttons
        $("#question4next").click(function(){
          $("#question4").slideUp();
          $("#question5").show();
        });
        $("#question4back").click(function(){
          $("#question3").slideDown();
          $("#question4").hide();
        });

      // question 5 buttons

        $("#question5next").click(function(){
          $("#question5").slideUp();
          $("#question6").show();
        });
        $("#question5back").click(function(){
          $("#question4").slideDown();
          $("#question5").hide();
        });

      // question 6 buttons

        $("#question6next").click(function(){
          $("#question6").slideUp();
          $("#submitStyle").show();
        });
        $("#question6back").click(function(){
          $("#question5").slideDown();
          $("#question6").hide();
        });

      // Submit buttons

        $("#submitBack").click(function(){
          $("#question6").show();
          $("#submitStyle").hide();
        });

  $("#languageForm").submit(function(event) {




// The following variables will be changed as questions are answered. They all start at 0 for consistency, and will be compared later when we want to find the result.

  var python = 0;
  var javaScript = 0;
  var cSharp = 0;
  var rust = 0;
  var ruby = 0;
  var html = 0;

  debugger;
  var question1 = parseInt($("input:radio[name=question1]:checked").val());
  var question2 = parseInt($("input:radio[name=question2]:checked").val());
  var question3 = parseInt($("input:radio[name=question3]:checked").val());
  var question4 = parseInt($("input:radio[name=question4]:checked").val());
  var question5 = parseInt($("input:radio[name=question5]:checked").val());
  var question6 = parseInt($("input:radio[name=question6]:checked").val());
// Each var below here has an if statement that determines the answer of the question by pulling the value (1, 2, 3 etc depending on amount of answers), then defines what happens when that number is met .In this case, a 1 (for beginner in the question) adds +1 to the above variables for the final verdict.)

  if (question1 === 1){
    python = python + 1;
    javaScript = javaScript + 1;
  } else if (question1 === 2) {
    cSharp = cSharp + 1;
    rust = rust + 1;
  } else if (question1 === 3) {
    ruby = ruby + 1;
    html = html + 1;
  } else {
  }

  if (question2 === 1){
    python = python + 1;
    javaScript = javaScript + 1;
    cSharp = cSharp + 1;
  } else if (question2 === 2) {
    rust = rust + 1;
    ruby = ruby + 1;
    html = html + 1;
  } else {
  }

  if (question3 === 1){
    python = python + 1;
    javaScript = javaScript + 1;
    cSharp = cSharp + 1;
  } else if (question3 === 2) {
    rust = rust + 1;
    ruby = ruby + 1;
    html = html + 1;
  } else {
  }


  if (question4 === 1){
    python = python + 1;
  } else if (question4 === 2) {
    javaScript = javaScript + 1;
  } else if (question4 === 3) {
    cSharp = cSharp + 1;
  } else if (question4 === 4) {
    rust = rust + 1;
  } else if (question4 === 5) {
    ruby = ruby + 1;
  } else if (question4 === 6) {
    html = html + 1;
  } else {
  }

  if (question5 === 1){
    python = python + 1;
  } else if (question5 === 2) {
    javaScript = javaScript + 1;
  } else if (question5 === 3) {
    cSharp = cSharp + 1;
  } else if (question5 === 4) {
    rust = rust + 1;
  } else if (question5 === 5) {
    ruby = ruby + 1;
  } else if (question5 === 6) {
    html = html + 1;
  } else {
  }

  if (question6 === 1){
    python = python + 1;
    javaScript = javaScript + 1;
    cSharp = cSharp + 1;
  } else if (question6 === 2) {
    rust = rust + 1;
    ruby = ruby + 1;
    html = html + 1;
  } else {
  }

    event.preventDefault();
  });
});
