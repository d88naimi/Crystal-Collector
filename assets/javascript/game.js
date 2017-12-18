
//create the object the game  wins losses user score random numbers generated crystals  
var game = {
	wins: 0, 
	losses:0,
	userScore: 0,
	jewel1: 0,
	jewel2: 0,
	jewel3: 0,
	jewel4: 0, 
	randomNumber: 0,	

// function to generate a random number. Will be used 5 times jewels 4 and 1 random  
// function to start the game. Random # assigned, wins set to 0 losses set 0 user score is set to 0 jewels assigned random numbers	
	randomGenerate: function(min, max) { 
		return Math.floor(Math.random() * (max - min) + min);
		
	},
	

	// Here we are asisighning random numbers to each jewel
	beginGame: function() {
		this.randomNumber = this.randomGenerate(19, 120);
		this.jewel1 = this.randomGenerate(1, 12);
		this.jewel2 = this.randomGenerate(1, 12);
		this.jewel3 = this.randomGenerate(1, 12);
		this.jewel4 = this.randomGenerate(1, 12);
		$("#scoreNumber").html(this.randomNumber);
	},
 // function reset the game 
 	resetGame: function(){ 
 		this.beginGame();
 		this.userScore = 0;
 	},
 	 
 	// function using conditions to state game when won or loss if userscore < randomNumber 
 	
 	updateScore: function(value){ 
		 // if userScore is less than random generated number 
 		if( this.userScore < this.randomNumber) {
			// continue adding  to the user score value
			this.userScore = this.userScore + value;

 		};
		 // if user score === the random number guessed 
 		if (this.userScore === this.randomNumber) { 
			 // increment the wins
			 this.wins++;
			 // show the win to the html bia jquery
 			$("#wins").html("Wins : "  + this.wins);
 			this.resetGame();

 		}
		 // if userscore is higher than the random generated number then 
 		else if	( this.userScore > this.randomNumber) {
			 // incremnet losses
			 this.losses++;
			 // display the losses to the client
			 $("#losses").html("Losses : " + this.losses);
			 // reset the number to play agin
 			this.resetGame();

 		};
		 
 	},
	
 };
 console.log("hello");
// events begin here 

// when i click jewel1 update user score jewel1 value 
// call the begin game function to begin
		game.beginGame();
		// if jewel one is clicked do this 
		$("#jewel1").on("click", function(){
			//update the score and jewel count
			game.updateScore(game.jewel1);
			// show the updated score to the client
			$("#scoretext").html( "Your Number:" + game.userScore);

		
		});
		$("#jewel2").on("click", function(){
			game.updateScore(game.jewel2);
			$("#scoretext").html( "Your Number:" + game.userScore);

		
		});
		$("#jewel3").on("click", function(){
			game.updateScore(game.jewel3);
			$("#scoretext").html( "Your Number:" + game.userScore);

		
		});
		$("#jewel4").on("click", function(){
			game.updateScore(game.jewel4);
			$("#scoretext").html( "Your Number:" + game.userScore);

		
		});
