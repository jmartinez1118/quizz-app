var questions = [
	{
		question: "what is 2 + 6?",
		answer: 8
	},
	{
		question: "what is 7 + 7?",
		answer: 14 	
	},
	{
		question: "what is 9 +7",
		answer: 16	
	},
	{
		question: "what is 23 + 7",
		answer: 30
	},
	{
		question: "if x = 10, what is x ?",
		answer: [ 10, + "ten" ]
	},
	{
		question: "x = 10, is x > 21 ?",
		answer: "no"
	},
	{
		question: "was this hard ??",
		answer: "fuck yes!"
	}
	
];


for(var i = 0; i < questions.length; i++) {
	// store id into a variable
	var questionHeader = document.getElementById('question' + [i]);
	// show questions onto stored id 
	questionHeader.textContent = questions[i].question;
	// store the questions into a variable
	var question = questions[i].question;
	//console log questions and what element they're in 
	console.log(question, questionHeader)
}

function checkAnswers() {
	// make variables for correct and incorrect answers
	var correct = 0;
	var incorrect = 0;
	



		// looping through questions
		for ( var i = 0; i < questions.length; i++){ 
		//i'm concatenating the iterator (i) with string 'answer'
		//to get the unique id of every input on your page
		var input = document.getElementById("answer" + i)
		// get input.value from the users guess 
		var guess = input.value
		//check to see if the value is stored
		console.log("you guessed " + guess)
		//create variable to store answers
		var correctAnswer = questions[i].answer
		// check to see if variable "answer" is stored
		console.log("correct answer is  " + correctAnswer)

		if (guess == correctAnswer){
			//do something here
			correct++ ;
		} else {
			incorrect++ ;
		}

	}

		// show amount of correct and incorrect 
		document.getElementById("correct").textContent = "CORRECT " + correct;
		document.getElementById("incorrect").textContent = "INCORRECT " + incorrect;

	return;

		
}


// get some sleep. tomorrow delete this and do it again!!!!!

	


			
		
	



