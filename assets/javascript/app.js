var number = 60;
var intervalId;

function run() {
      intervalId = setInterval(decrement, 1000);
    }

function decrement() {
      //  Decreases number by one.
      number--;
      $("#timer").html("<h2>Timer: " + number + "</h2>");
      if (number === 0) {
        stop();
        //  Alert the user that the time is up.
        alert("Time's Up!");
      }
    }

function stop() {
      clearInterval(intervalId);
    }

run();

// When submit button is clicked
function handleClick()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 5; i++) {
	var radios = document.getElementsByName('group'+i);
	for(var j = 0; j < radios.length; j++) {
		var radio = radios[j];
	if(radio.value == "correct" && radio.checked) {

		amountCorrect++;
		}
	}
}                   
	alert("Correct Responses: " + amountCorrect);
}

console.log('Question 1 answer - Chuck Berry');
console.log('Question 2 answer - The Beatles');
console.log('Question 3 answer - Led Zeppelin');
console.log('Question 4 answer - Seattle');
console.log('Question 5 answer - The White Stripes');

