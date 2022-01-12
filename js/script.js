//ARRAY OF QUESTIONS 

const Questions = [

    {"question" : "What does CSS stand for?" , 
    "options" : ["Computer Style Sheets","Cascading Style Sheets","Colorful Style Sheets","Creative Style Sheets"], "answer" : "Cascading Style Sheets"},

    {"question" : "What is the correct HTML for referring to an external style sheet?" ,
     "options" : ["<style src='mystyle.css'>","<stylesheet>mystyle.css</stylesheet>","<link rel='stylesheet' type='text/css' href='mystyle.css'>"], 
     "answer" : "<link rel='stylesheet' type='text/css' href='mystyle.css'>"},

    {"question" : "Select the option to make a list that lists the items with numbers?" ,
     "options" : ["dl","None","ol","ul","list"], 
     "answer" : "ol"},

    {"question" : "In CSS, choose the correct option to select this image by its id. <img id='mainpic' src='cat.png'>" , 
    "options" : [".mainpic {}","img {}","None", "#mainpic {}","mainpic {}"], 
    "answer" : "#mainpic {}"},

    {"question" : "In CSS,select the property used to set the background color of an image?" ,
     "options" : ["background:color","background-color","color","color:background","None"],
     "answer" : "background-color"},

    {"question" : "Select the property used to create space between the element’s border and inner content?" ,    "options" : ["margin","border","None","padding","spacing"],
     "answer" : "padding"},

    {"question" : "Select the correct HTML for creating a hyperlink?" ,
     "options" : ["None","A name='http://www.techbeamers.com'>techbeamers.com","<a href='http://www.techbeamers.com'>techbeamers</a>"],
      "answer" : "<a href='http://www.techbeamers.com'>techbeamers</a>"},

    {"question" : "In CSS, what is the correct option to select only the paragraphs with class name “warning”?" , "options" : [".warning {}","p {}","warning {}","#warning {}"], 
    "answer" : ".warning {}"},

    {"question" : "In CSS,Select the property used to set the spacing in between lines of text?" ,
     "options" : ["letter-spacing","spacing","line-height","line-spacing"],
      "answer" : "line-height"},

    {"question" : "Select the correct option to open a link in a new browser window?" ,
     "options" : ["a href='url' new","a href='url' target=_window","a href='url target='_blank'","a href='url' target='new'"],
      "answer" : "a href='url target='_blank'"},

    {"question" : "Inside which HTML element do we put the JavaScript? " ,
     "options" : ["<script>","<js>","<scripting>","<javascript>"],
      "answer" : "<script>"},
    
    {"question" : "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
     "options" : ["document.getElement('p').innerHTML = 'Hello World!';"
    ,"#demo.innerHTML = 'Hello World!';","document.getElementById('demo').innerHTML = 'Hello World!';","document.getElementByName('p').innerHTML = 'Hello World!';"],
     "answer" : "document.getElementById('demo').innerHTML = 'Hello World!';"},

    {"question" : "How do you write 'Hello World' in an alert box?" , 
    "options" : ["alertBox('Hello World');","msgBox('Hello World');","alert('Hello World');","msg('Hello World');"], "answer" : "alert('Hello World');"},

    {"question" : "How do you create a function in JavaScript?" ,
     "options" : ["function myFunction()","function:myFunction()","function = myFunction()"],
      "answer" : "function myFunction()"},

    {"question" : "How do you call a function named 'myFunction'?" ,
     "options" : ["call function myFunction()","myFunction()","call myFunction()"],
      "answer" : "myFunction()"},

    {"question" : "How to write an IF statement for executing some code if 'i' is NOT equal to 5?" ,
     "options" : ["if (i <> 5)","if i=! 5 then","if i <> 5", "if (i !=5)"],
      "answer" : "if (i !=5)"},

    {"question" : "How does a WHILE loop start?" ,
     "options" : ["while i = 1 to 10","while (i <= 10)","while (i <= 10; i++)"],
      "answer" : "while (i <= 10)"},

    {"question" : "How does a FOR loop start?" ,
     "options" : ["for i = 1 to 5","for (i=0; i <= 5)","for (i <= 5; i++)","for (i=0; i <= 5; i++)"],
      "answer" : "for (i=0; i <= 5; i++)"},

    {"question" : "How to insert a comment that has more than one line?" ,
     "options" : ["/*This comment has more than one line*/","<!--This comment has more than one line-->", "//This comment has more than one line//"],
      "answer" : "/*This comment has more than one line*/"},

    {"question" : "What is the correct way to write a JavaScript array?" ,
     "options" : ["var colors = (1:'red', 2:'green', 3:'blue')","var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')","var colors = 'red', 'green', 'blue'","var colors = ['red', 'green', 'blue']"],
      "answer" : "var colors = ['red', 'green', 'blue']"},

    {"question" : "How do you find the number with the highest value of x and y?" ,
     "options" : ["Math.ceil(x, y)","top(x, y)","ceil(x, y)","Math.max(x, y)"],
      "answer" : "Math.max(x, y)"},

    {"question" : "Which event occurs when the user clicks on an HTML element?" ,
     "options" : ["onmouseclick","onmouseover","onchange","onclick"],
      "answer" : "onclick"},

    {"question" : "What will the following code return: Boolean(10 > 9)" ,
     "options" : ["true","NaN","false"],
      "answer" : "true"},

    {"question" : "How do you declare a JavaScript variable?" ,
     "options" : ["variable carName;","v carName;","var carName;"],
      "answer" : "var carName"},

    {"question" : "How do you round the number 7.25, to the nearest integer?" ,
     "options" : ["Math.round(7.25)","Math.rnd(7.25)","round(7.25)","rnd(7.25)"],
      "answer" : "Math.round(7.25)"},

];

console.log(Questions);


//LISTEN FOR A CLICK OF THE START QUIZ AND HIDE THE QUIZ DESCRIPTION 