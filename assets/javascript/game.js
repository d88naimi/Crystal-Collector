
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
// function to start the game. Random # assighned, wins set to 0 losses set 0 user score is set to 0 jewels assighned random numbers	
	randomGenerate: function(min, max) { 
		return Math.floor(Math.random() * (max - min) + min);
	},

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
 	// 
 	updateScore: function(value){ 
 		if( this.userScore < this.randomNumber) {
			
			this.userScore = this.userScore + value;

 		};

 		if (this.userScore === this.randomNumber) { 
 			this.wins++;
 			$("#wins").html("Wins : "  + this.wins);
 			this.resetGame();

 		}

 		else if	( this.userScore > this.randomNumber) {
 			this.losses++;
 			$("#losses").html("Losses : " + this.losses);
 			this.resetGame();

 		};

 	},

 };

// events begin here 

// when i click jewel1 update user score jewel1 value 

		game.beginGame();
		$("#jewel1").on("click", function(){
			game.updateScore(game.jewel1);
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






// 

 