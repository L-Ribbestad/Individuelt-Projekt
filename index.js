let darkModeBtn = document.querySelector("#darkModeBtn");
let darkMode = false;

darkModeBtn.addEventListener("click", () => {
    if(darkMode===true) {
        document.body.style.background = "white";
        document.body.style.color = "black";
        darkMode = false;
    } else {
        document.body.style.background = "grey";
        document.body.style.color = "white";
        darkMode = true;
    }
 });

/*Funktioner:
Själva Quizet
Placering av quizet
Resultat hantering
Resultat knapp
*/


let questionArr = [
    {
        question: "Pocahontas är baserad på en verklig person.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question:"Aristocats utspelar sig i London.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "b"
    },
    {
        question: "Snövit är disneys första tecknade långfilm.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question: "Lejonkungen skulle ursprungligen heta djungelkungen.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question: "Första tanken var att Elsa i Frost skulle vara skurken.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question: "Hitta Nemo kom ut 2005",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "b"
    },
    {
        question: "Dvärgarna i snövit saknar alla varsitt finger.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question: "Tomat är en frukt.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question: "Kinesiska muren syns från yttre rymden.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "b"
    },
    {
        question: "Harry Potter tillhör Gryffindor.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question: "Vilken pjäs finns det flest av i schack?",
        answers: {
            a: "Torn",
            b: "Kungar",
            c: "Hästar",
            d: "Bönder"
        },
        correctAnswer: "d"
    },
    {
        question: "Vilken stad är Zlatan född och uppvuxen i?",
        answers: {
            a: "Jönköping",
            b: "Stockholm",
            c: "Malmö",
            d: "Göteborg"
        },
        correctAnswer: "c"
    },
    {
        question: "I vilket land är Lissabon huvudstad?",
        answers: {
           a: "Spanien",
           b: "Chile",
           c: "Portugal",
           d: "Brasilien"
        },
        correctAnswer: "c"
    },
    {
        question: "I vilken världsdel ligger bergskedjan Alperna?",
        answers: {
            a: "Europa",
            b: "Asien",
            c: "Sydamerika",
            d: "Afrika"
        },
        correctAnswer: "a"
    }
];
let quizContent = document.getElementById("quiz");
let resultsContent = document.getElementById("results");
let resultBtn = document.getElementById("getResults");

createQuiz(questionArr, quizContent, resultsContent, resultBtn);

function createQuiz(questions, quizContent, resultsContent, resultBtn){
    function showQuestions(questions, quizContent) {
        let output = [];
        let answers;
        for(let i=0; i<questions.length; i++) {
             answers = [];
             for(letter in questions[i].answers){
                 if(i<12) {
                answers.push(
                        "<label>" 
                        + "<input type='radio' name='question"+i+"'value='"+letter+"'>"
                        + letter + ": " + questions[i].answers[letter] + "</label>"
                
                );
                 }else{
                    answers.push(
                        "<label>"
                        + "<input type='checkbox' name='question"+i+"'value='"+letter+"'>"
                        + letter + ": " + questions[i].answers[letter] + "</label>"
                    );
                 }
             };
             output.push(
                "<div class='question'>" + questions[i].question + "</div>"
                + "<div class='answers'>" + answers.join("") + "</div>"
             );
            };
            quizContent.innerHTML = output.join("");
        };
        
        function showResults(questions, quizContent, resultsContent) {
            let answerContent = quizContent.querySelectorAll(".answers");
            let checkedAnswer = "";
            let correctAmount = 0;
            
            for(let i=0; i<questions.length; i++) {
                checkedAnswer = (answerContent[i].querySelector("input[name=question"+i+"]:checked")||
                {}).value;
                if(checkedAnswer===questions[i].correctAnswer) {
                    correctAmount++;
                    answerContent[i].style.color = "lightgreen";
                } else {
                    answerContent[i].style.color = "red";
                }
            };

            if(correctAmount>10) {
                resultsContent.style.color = "lightgreen";
                resultsContent.innerHTML = correctAmount + " / " + questions.length + " Mycket väl godkänd!";
            }
            else if(correctAmount>=7) {
                resultsContent.style.color = "orange";
                resultsContent.innerHTML = correctAmount + " / " + questions.length + " Godkänd!";
            }
            else {
                resultsContent.style.color = "red";
                resultsContent.innerHTML = correctAmount + " / " + questions.length + " Underkänd.";
            }
        };
        showQuestions(questions, quizContent);
        
        resultBtn.onclick = function(){
            showResults(questions, quizContent, resultsContent);
        };
    };
