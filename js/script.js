//GLOBAL VARIABLES

const questions = document.querySelector('#question');
const scoreText = document.querySelector('#scores');
const timer = document.querySelector('#time-display');

let score = 0;                    
let totalTime = 150;

//ARRAY OF HIGH SCORES THAT USER WILL ADD 
let scores = [];

//ARRAY OF QUESTIONS 
const Questions = [

    {
        question : "What does CSS stand for?" , 
        options : ["Computer Style Sheets", 
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Creative Style Sheets"],
        answer: 1
    },

    {
        question : "What is the correct HTML for referring to an external style sheet?" ,
        options : ["<style src='mystyle.css'>",
        "<stylesheet>mystyle.css</stylesheet>",
        "<link rel='stylesheet' type='text/css' href='mystyle.css'>", 
        "<link='styleshet' type='tex/css' href='mystyle.css'>"],
        answer : 2
    },

    {   
        question : "Select the option to make a list that lists the items with numbers?" ,
        options : ["dl", 
        "None",
        "ol",
        "ul"],
        answer : 2
    },

    {
        question : "In CSS, choose the correct option to select this image by its id. <img id='mainpic' src='cat.png'>" , 
        options : [".mainpic {}",
        "img {}",
        "None", 
        "#mainpic {}"],
        answer : 3
    },

    {
        question : "In CSS,select the property used to set the background color of an image?" ,
        options : ["background:color",
        "background-color",
        "color",
        "color:background"],
        answer : 1
    },

    {
        question : "Select the property used to create space between the element’s border and inner content?" ,    options : ["margin",
        "border",
        "None",
        "padding"],
        answer : 3
    },

    {
        question : "Select the correct HTML for creating a hyperlink?" ,
        options : ["None",
        "A name='http://www.techbeamers.com'>techbeamers.com",
        "<a href='http://www.techbeamers.com'>techbeamers</a>",
        "<a href: 'http://www.techbeamers.com'>techbeamers</a>"],
        answer : 2
    },

    {
        question : "In CSS, what is the correct option to select only the paragraphs with class name “warning”?" , options : ["warning {}", 
        "p {}",
        "warning {}",
        "#warning {}"],
        answer : "optionA"
    },

    {
        question : "In CSS,Select the property used to set the spacing in between lines of text?" ,
        options : ["letter-spacing",
        "spacing",
        "line-height",
        "line-spacing"],
        answer : "line-height"
    },

    {   
        question : "Select the correct option to open a link in a new browser window?" ,
        options : ["a href='url' new",
        "a href='url' target=_window",
        "a href='url target='_blank'",
        "a href='url' target='new'"],
        answer  : 2
    },

    {   
        question : "Inside which HTML element do we put the JavaScript? " ,
        options : ["<script>",
        "<js>",
        "<scripting>",
        "<javascript>"],
        answer : "optionA"
    },
    
    { 
        question : "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
        options : ["document.getElement('p').innerHTML = 'Hello World!';",
        "#demo.innerHTML = 'Hello World!';",
        "document.getElementById('demo').innerHTML = 'Hello World!';",
        "document.getElementByName('p').innerHTML = 'Hello World!';"],
        answer : 2
    },

    { 
        question : "How do you write 'Hello World' in an alert box?" , 
        options : ["alertBox('Hello World');",
        "msgBox('Hello World');",
        "alert('Hello World');",
        "msg('Hello World');"],
        answer : 2
    },

    { 
        question : "How do you create a function in JavaScript?" ,
        options : ["function myFunction()",
        "function:myFunction()",
        "function = myFunction()",
        "funct (functionName)"],
        answer : "optionA"
    },

    {
        question : "How do you call a function named 'myFunction'?" ,
        options : ["call function myFunction()",
        "myFunction()",
        "call myFunction()",
        "call(myFunction)"],
        answer : 1
    },

    {
        question : "How to write an IF statement for executing some code if 'i' is NOT equal to 5?" ,
        options : ["if (i <> 5)",
        "if i=! 5 then",
        "if i <> 5",
        "if (i !=5)"],
        answer : 3
    },

    {
        question : "How does a WHILE loop start?" ,
        options : ["while i = 1 to 10",
        "while (i <= 10)",
        "while (i <= 10; i++)",
        "while (i; <10 )"],
        answer : 1
    },

    { 
        question : "How does a FOR loop start?" ,
        options : ["for i = 1 to 5",
        "for (i=0; i <= 5)",
        "for (i <= 5; i++)",
        "for (i=0; i <= 5; i++)"],
        answer : "for (i=0; i <= 5; i++)"
    },

    { 
        question : "How to insert a comment that has more than one line?" ,
        options : ["/*This comment has more than one line*/", 
        "<!--This comment has more than one line-->",
        "//This comment has more than one line//",
        "***This comment has more than one line***"],
        answer : "optionA"
    },

    { 
        question : "What is the correct way to write a JavaScript array?" ,
        options : ["var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        "var colors = 'red', 'green', 'blue'",
        "var colors = ['red', 'green', 'blue']"],
        answer : 3
    },

    {
        question : "How do you find the number with the highest value of x and y?" ,
        options : ["Math.ceil(x, y)",
        "top(x, y)",
        "ceil(x, y)",
        "Math.max(x, y)"],
        answer : 3
    },

    {   
        question : "Which event occurs when the user clicks on an HTML element?" ,
        options : ["onmouseclick",
        "onmouseover",
        "onchange",
        "onclick"],
        answer : 3
    },

    { 
        question : "What will the following code return: Boolean(10 > 9)" ,
        options : ["true",
        "NaN",
        "false",
        "bool"],
        answer : "optionA"
    },

    { 
        question : "How do you declare a JavaScript variable?" ,
        options : ["variable carName",
        "v carName",
        "var carName",
        "var car-name"],
        answer : 2
    },

    { 
        question : "How do you round the number 7.25, to the nearest integer?" ,
        options : ["Math.round(7.25)",
        "Math.rnd(7.25)",
        "round(7.25)",
        "rnd(7.25)"],
        answer : "optionA"
    },

];

//ON START UP 

$(document).ready(function() {
   $("#options").hide();
   
});


let resetGame = function () {
    score= 0;
    totalTime= 150;
}


//LISTEN FOR A CLICK OF THE START QUIZ, HIDE THE QUIZ DESCRIPTION, AND START GAME
$("#start-game").click(function() {
    resetGame()
    $("#front-page").hide();
    $("#high-score-box").hide();
    $("#quiz").show();
    $("#options").show();

    

    //Run loop of questions

    // listofQuestions();
    displayQuizQuestion(0);
    
    //Start countdown timer
    timerCountdown();
    // timerZero();
   // endOfQuiz();
  });
   
//Will track for end of quiz and display high score leaderboard
  let timerCountdown = function () {
      
      
      let interval = setInterval(function() {
          $('#time-display').html("time: " + [totalTime]);
          
          if (totalTime <= 0 || Questions.option == false) {
              
              $("#quiz").hide();
              clearInterval(interval);
              //let highScoreBox = document.getElementById("#high-score-box");
              // highScoreBox.show("#scores");
              showResults();
            }
            totalTime--
            
        }, 1000)
        
    }
    
// Function that displays list of questions in a loop
    let displayQuizQuestion = function (questionIndex) {
        
        if (questionIndex === Questions.length) {
            showResults();
        }
    
    const question = Questions[questionIndex]
    $("#buttons").empty();
    
    
    //will update score and that you clicked an answer
    let submitAnswer = function (index) {
        if (index === question.answer) {
            score += 10;
        }
        else {
            totalTime -= 5;
        }
        displayQuizQuestion(questionIndex + 1)
        
    }
    
    document.querySelector("#question").innerText = question.question;
    
    for (let i= 0; i < question.options.length; i++) {
        
        let button = document.createElement("button")
        button.className = "submit-btn"
        button.innerText = question.options[i]
        
        button.addEventListener("click", function() { 
            submitAnswer(i) 

            //

        })
        document.querySelector("#buttons").appendChild(button)
        
      
    }
    

};

//Displays score on screen 
let showResults = function () {

    $('#question').hide();
    let endContainer = $("#score-box");
    endContainer.show();
    
    $("#high-score-box").show();
    
    let scoreDisplay = document.querySelector("#score-number");
    scoreDisplay.innerHTML = score;
    
    let scoreNumber = $("#score-number");
    scoreNumber.show();
    }

//Logging score data (note: project specs did not explicitly state to use local storage)
    $("#submit-score").click(function() {
        let enterInitials = $("#initials").val();
        $("initials").val(enterInitials);

        let scoreObject = 
        {name: enterInitials ,
         scoreNumber: score 
        }

        scores.push(scoreObject);

        $("#score-box").hide();
        $("#front-page").show();
        $("#start-game").show();
        $("#front-page").show();
        
        let scoreItem = document.createElement("li");
        scoreItem.innerText = enterInitials + " " + score;
        $("#score-list").append(scoreItem);
    })
