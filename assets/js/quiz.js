let currentQuestion = 0;
let score = 0;
let totQuestions = questions.length;


const quizContainerEl = document.getElementById('quizContainer');
const questionEl = document.getElementById('question');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const nextButton = document.getElementById('nextButton');
const resultCont= document.getElementById('resultjs');

// a variable for start time
let secondsLeft = 75;
//the element that displays the time
const timeEl = document.getElementById('timejs');

//start button div
let startButton = document.getElementById('start-button');

function loadQuestion (questionIndex) {
	let q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function result(){
	const selectedOption = document.querySelector('input[type=radio]:checked');	
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	let answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
	 score += 10;
	  document.querySelector('.answer').textContent = 'Correct!';
	window.localStorage.setItem('score', score);
	document.getElementById('fscore').textContent = score;
	
	}
	else {
	document.querySelector('.answer').textContent = 'Wrong!'
			if (secondsLeft  > 15) {
				secondsLeft  -= 15;
			} else {
				secondsLeft = 0;
			}
		}

	}

	
function loadNextQuestion () {
	
	const selectedOption = document.querySelector('input[type=radio]:checked');	
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	
	document.querySelector('.answer').textContent = '';
	// false - Default. The radio button is not checked
	selectedOption.checked = false; 
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
	
		document.location.href = 'score.html';
		document.getElementById('fscore').textContent = score;
 
		return;
	}
	loadQuestion(currentQuestion);

	
}
//Timer starts
  function setTime() {
	let  timerInterval = setInterval(function() {
		if (secondsLeft > 0) {
			secondsLeft--;
		timeEl.textContent ='Time:'+ secondsLeft;
		  } else {
	clearInterval(timerInterval);
	document.location.href = 'score.html';
document.getElementById('fscore').textContent = score;
  
		      }
	}, 1000);
  }
  setTime();
 
  

  