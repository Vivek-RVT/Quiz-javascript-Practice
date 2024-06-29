let quizdata= [   {
    question: "What is the powerhouse of the cell?",
    options: ["Mitochondria", "Nucleus", "Ribosome"],
    correct: "Mitochondria"
},
{
    question: "Who was the first President of the United States?",
    options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    correct: "George Washington"
},
{
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Jupiter", "Saturn"],
    correct: "Jupiter"
},
{
    question: "What is the capital city of Japan?",
    options: ["Seoul", "Tokyo", "Beijing"],
    correct: "Tokyo"
},
{
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Osmium"],
    correct: "Oxygen"
},
{
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
    correct: "William Shakespeare"
},
{
    question: "What is the smallest prime number?",
    options: ["1", "2", "3"],
    correct: "2"
},
{
    question: "Which language is primarily spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French"],
    correct: "Portuguese"
},
{
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond"],
    correct: "Diamond"
},
{
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1920"],
    correct: "1912"
},
{
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["100°C", "212°C", "0°C"],
    correct: "100°C"
},

{
    question: "Who was the first President of the United States?",
    options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    correct: "George Washington"
}
];



let question1 = document.querySelector(".question");

let options1 = [
    document.querySelector(".option1"),
    document.querySelector(".option2"),
    document.querySelector(".option3")
]



let currentquestionindex = 0;
let score = 0;

function loadquestions() {
    const currentquestion = quizdata[currentquestionindex];
    question1.textContent = currentquestion.question;
    options1.forEach((options1s,index) => {
        options1s.textContent = currentquestion.options[index];
    });
}

options1.forEach(options1s => {
    options1s.addEventListener(`click`,()=>{
        const selectedoption = options1s.textContent;6
        checkAnswer(selectedoption)
    }

    )
});
function checkAnswer(selectedoption) {
    const currentquestion = quizdata[currentquestionindex]
    if(selectedoption === currentquestion.correct){
        score++;

    }
    currentquestionindex++;
    if(currentquestionindex < quizdata.length){
        loadquestions()
    }
    else{

        showResults()
    }
    
}

function showResults() {
    if(score=== 12){

 
    question1.textContent = `Awsome!
    You scored ${score} out of ${quizdata.length}`   }

    else if(score>7&&score<12){
        question1.textContent = `Great!
        You scored ${score} out of ${quizdata.length}`  
    }
    
    else if(score<7 && score>3){
        question1.textContent = `Good!
        You scored ${score} out of ${quizdata.length}`  
    }
    
    else if(score>1&&score<3){
        question1.textContent = `Nice!
        You scored ${score} out of ${quizdata.length}`  
    }
    else{
        question1.textContent = `Try again!!
        You scored ${score} out of ${quizdata.length}`  
    }
    
    document.querySelector(".try_again").style.display = "block"
    options1.forEach( options1s => options1s.style.display = `none`)
}

function restart() {
    document.querySelector(".try_again").addEventListener(`click`,()=>{
        currentquestionindex= 0;
        score = 0;

        options1.forEach(options1s =>{
            options1s.style.display = `block`;
            options1s.style.backgroundColor =``;
            options1s.style.color = ``;
        }

        )
        question1.textContent = ``
        document.querySelector(".try_again").style.display = "none"
        loadquestions()
    }

    )
}function toggleDayNightMode() {
    const currentMode = getComputedStyle(document.documentElement).getPropertyValue('--Primary-color').trim();

    if (currentMode === 'yellow') { // Check for day mode (black text)
        // Switch to night mode
        document.documentElement.style.setProperty('--Primary-color', 'rgb(255, 255, 255)'); // White text
        document.documentElement.style.setProperty('--secondary-color', '#a80202'); // Dark grey secondary
        document.documentElement.style.setProperty('--other-color', '#ffffff'); // Slightly lighter grey background
        document.querySelector(".night").textContent = "Night Mode"; // Change button text
    } else {
        // Switch back to day mode
        document.documentElement.style.setProperty('--Primary-color', 'yellow'); // Black text
        document.documentElement.style.setProperty('--secondary-color', 'black'); // Shade of red secondary
        document.documentElement.style.setProperty('--other-color', '#373737'); // White background
        document.querySelector(".night").textContent = "Day Mode"; // Change button text
    }
}

// Attach the function to the button click event
document.querySelector(".night").addEventListener('click', toggleDayNightMode);


loadquestions();

restart()

