//GLOBAL VARIABLES

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.submit-btn'));
const scoreText = document.querySelector('#scores');
const timer = document.querySelector('#time-display');

let currentQuestion = {};         
let acceptingAnswers = true;       //use this for answer validation 
let score = 0;                    //score will start at 0
let questionCounter = 0;          
let availableQuestions = [];
let maxTime = 65; 


//ARRAY OF QUESTIONS 

const Questions = [

    {
        question : "What does CSS stand for?" , 
        options : ["Computer Style Sheets", 
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Creative Style Sheets"],
        answer : "optionB"
    },

    {
        question : "What is the correct HTML for referring to an external style sheet?" ,
        options : ["<style src='mystyle.css'>",
        "<stylesheet>mystyle.css</stylesheet>",
        "<link rel='stylesheet' type='text/css' href='mystyle.css'>", 
        "<link='styleshet' type='tex/css' href='mystyle.css'>"],
        answer : "optionC"
    },

    {   
        question : "Select the option to make a list that lists the items with numbers?" ,
        options : ["dl", 
        "None",
        "ol",
        "ul"],
        answer : "optionC"
    },

    {
        question : "In CSS, choose the correct option to select this image by its id. <img id='mainpic' src='cat.png'>" , 
        options : [".mainpic {}",
        "img {}",
        "None", 
        "#mainpic {}"],
        answer : "optionD"
    },

    {
        question : "In CSS,select the property used to set the background color of an image?" ,
        options : ["background:color",
        "background-color",
        "color",
        "color:background"],
        answer : "optionB"
    },

    {
        question : "Select the property used to create space between the element’s border and inner content?" ,    options : ["margin",
        "border",
        "None",
        "padding"],
        answer : "optionD"
    },

    {
        question : "Select the correct HTML for creating a hyperlink?" ,
        options : ["None",
        "A name='http://www.techbeamers.com'>techbeamers.com",
        "<a href='http://www.techbeamers.com'>techbeamers</a>",
        "<a href: 'http://www.techbeamers.com'>techbeamers</a>"],
        answer : "optionC"
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
        option : ["a href='url' new",
        "a href='url' target=_window",
        "a href='url target='_blank'",
        "a href='url' target='new'"],
        answer  : "optionC"
    },

    {   
        question : "Inside which HTML element do we put the JavaScript? " ,
        option : ["<script>",
        "<js>",
        "<scripting>",
        "<javascript>"],
        answer : "optionA"
    },
    
    { 
        question : "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
        option : ["document.getElement('p').innerHTML = 'Hello World!';",
        "#demo.innerHTML = 'Hello World!';",
        "document.getElementById('demo').innerHTML = 'Hello World!';",
        "document.getElementByName('p').innerHTML = 'Hello World!';"],
        answer : "optionC"
    },

    { 
        question : "How do you write 'Hello World' in an alert box?" , 
        options : ["alertBox('Hello World');",
        "msgBox('Hello World');",
        "alert('Hello World');",
        "msg('Hello World');"],
        answer : "optionC"
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
        answer : "optionB"
    },

    {
        question : "How to write an IF statement for executing some code if 'i' is NOT equal to 5?" ,
        options : ["if (i <> 5)",
        "if i=! 5 then",
        "if i <> 5",
        "if (i !=5)"],
        answer : "optionD"
    },

    {
        question : "How does a WHILE loop start?" ,
        options : ["while i = 1 to 10",
        "while (i <= 10)",
        "while (i <= 10; i++)",
        "while (i; <10 )"],
        answer : "optionB"
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
        answer : "optionD"
    },

    {
        question : "How do you find the number with the highest value of x and y?" ,
        options : ["Math.ceil(x, y)",
        "top(x, y)",
        "ceil(x, y)",
        "Math.max(x, y)"],
        answer : "optionD"
    },

    {   
        question : "Which event occurs when the user clicks on an HTML element?" ,
        options : ["onmouseclick",
        "onmouseover",
        "onchange",
        "onclick"],
        answer : "optionD"
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
        answer : "optionC"
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

const SCORE_POINTS = 100;     //Capitalizing in javascript is known to signify that the value remains constant
const MAX_QUESTIONS = 25;

//ON START UP 

$(document).ready(function() {
   $("#options").hide();
});


//LISTEN FOR A CLICK OF THE START QUIZ, HIDE THE QUIZ DESCRIPTION, AND START GAME

$("#start-game").click(function() {
    console.log("button clicked");

    $("#front-page").hide();
    $(".high-score").hide();
    $("#options").show();

    //Run loop of questions

    // listofQuestions();
    displayQuizQuestion(Questions[0]);
    
    
    //Start countdown timer
    timerCountdown();
    
  });
    
// Function that displays list of questions in a loop



let timerCountdown = function () {
    let totalTime = 65
    setInterval(function() {
        $('#time-display').html("time: " + [totalTime]);
        totalTime--;
    }, 1000)

    //for (let i=65; i> 0; i--) {
   // console.log(i);

};

let displayQuizQuestion = function (question) {
    
    document.querySelector("#question").innerHTML = question.question;
    
    
    
    for (let i= 0; i< question.options.length; i++) {

        let button = document.createElement("button")
        button.className = "submit-btn"
        button.innerHTML = question.options[i]
        document.querySelector("#buttons").appendChild(button)
    }

}

// $(".question-display").html("<p>" + this.questions[this.questionNumber].questionText + "</p>");

