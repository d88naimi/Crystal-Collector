
var jewel = { 
	wins: 0,
	losses: 0,
	init: function(){
		this.score = 0;
		$("#totalscore").html("0");
			this.generatenumbers()
		
	},

	generatenumbers: function(){
	 	function randomRange(myMin, myMax) {
		 return Math.floor(Math.random() * (myMax - myMin + 1 ) + myMin);
		
		};

		this.score = 0;
		this.winamt = randomRange(19,120);
		this.jewl1 = randomRange(1,12);
		this.jewl2 = randomRange(1,12);	
		this.jewl3 = randomRange(1,12);	
		this.jewl4 = randomRange(1,12);
		$("#scoreNumber").html(this.winamt);
		$("#jewel1").attr("data-value", this.jewl1);
		$("#jewel2").attr("data-value", this.jewl2);
		$("#jewel3").attr("data-value", this.jewl3);
		$("#jewel4").attr("data-value", this.jewl4);
	},

	determinegame: function(){
		if ( parseInt($("#totalscore").html()) == this.winamt){
			this.wins++;
			$("#wins").html("Win: " + this.wins)
			this.init();
		};
		if ( parseInt($("#totalscore").html()) > this.winamt){
			this.losses++;
			$("#losses").html("Losses: " + this.losses)
			this.init();
		};
	}			
};			

		jewel.init();

		$(".jewel").on("click", function(){ 
			console.log($(this).attr("data-value"))
			var clickvalue = parseInt($("totalscore").html()) + parseInt($(this).attr("data-value"))
			$("#totalscoretext").html(clickvalue);
			jewel.determinegame();

		});
	
			

 