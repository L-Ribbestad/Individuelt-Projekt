let darkModeBtn = document.querySelector("#darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.style.background = "grey";
    document.body.style.color = "white";
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
            a: true,
            b: false
        },
        correctAnswer: "a"
    },
    {
        question:"Aristocats utspelar sig i London.",
        answers: {
            a: true,
            b: false
        },
        correctAnswer: "b"
    },
    {
        question: "Snövit är disneys första tecknade långfilm.",
        answers: {
            a: true,
            b: false
        },
        correctAnswer: "a"
    },
    {
        question: "Lejonkungen skulle ursprungligen heta djungelkungen.",
        answers: {
            a: true,
            b: false
        },
        correctAnswer: "a"
    },
    {
        question: "Första tanken var att Elsa i Frost skulle vara skurken.",
        answers: {
            a: true,
            b: false
        },
        correctAnswer: "a"
    },
    {
        question: "Hitta Nemo kom ut 2005",
        answers: {
            a: true,
            b: false
        },
        correctAnswer: "b"
    },
    {
        question: "Sulley i Monsters Inc heter igentligen James.",
        answers: {
            a: true,
            b: false
        },
        correctAnswer: "a"
    },
    {
        question: "Pinochio dyker upp i filmen Trassel.",
        answers: {
            a: true,
            b: false
        },
        correctAnswer: "a"
    },
    {
        question: "Dvärgarna i Snövit saknar alla varsit finger.",
        answers: {
            a: true,
            b: false
        },
        correctAnswer: "a"
    },
    {
        question: "Bajen är bäst i stan.",
        answers: {
            a: true,
            b: false
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
            
        };
        showQuestions(questions, quizContent);
        
        resultBtn.onclick = function(){
            showResults(questions, quizContent, resultsContent);
        };
    };
