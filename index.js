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
        question: "Sulley i Monsters Inc heter igentligen James.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question: "Pinochio dyker upp i filmen Trassel.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question: "Dvärgarna i Snövit saknar alla varsit finger.",
        answers: {
            a: "sant",
            b: "falskt"
        },
        correctAnswer: "a"
    },
    {
        question: "Bajen är bäst i stan.",
        answers: {
            a: "sant",
            b: "falskt"
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
                answers.push(
                    "<label>" 
                    + "<input type='radio' name='question"+i+"'value='"+letter+"'>"
                    + letter + ": " + questions[i].answers[letter] + "</label>"
                );
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
                } 
            };
            
            if(correctAmount>7) {
                resultsContent.style.color = "lightgreen";
                resultsContent.innerHTML = correctAmount + " / " + questions.length + " Mycket väl godkänd!";
            }
            else if(correctAmount>=5) {
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
