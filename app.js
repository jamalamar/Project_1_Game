
//Weapons
let sword = {one: 100, two: 250, three: 500, ultimate: 2000}
let axe = {one: 75, two: 300, three: 600, ultimate: 2500}
let staff = {one: 35, two: 200, three: 350, ultimate: 1200}

//Array with weapons to choose
let weapon = [sword, axe, staff]


//Character's Class
class character {
	constructor (hp, def, healing, weapon,) {
		this.hp = hp
		this.def = def
		this.healing = healing
		this.weapon = weapon
	}

//Attack Functions
	attackOne(target) {
		target.hp -= this.weapon.one

	}

	attackTwo(target) {
		target.hp -= this.weapon.two
	}

	attackThree(target) {
		target.hp -= this.weapon.three
	}

	ultimate(target) {
		target.hp -= this.weapon.ultimate
	}

	heal() {
		this.hp += this.healing
	}
};


//Enemy
class enemy {
	constructor (hp, def, healing, dmg) {
		this.hp = hp
		this.def = def
		this.healing = healing
		this.dmg = dmg
	}

	attack(target) {
		target.hp -= this.dmg
	}

	heal() {
		if(this.hp<9000 && Math.random()<=0.5){
		this.hp += this.healing
		}
	}
};



//Characters
let mage = new character(3000, 35, 1000, weapon[2])
let paladin = new character(4000, 50, 600, weapon[0])
let warlord = new character(5000, 75, 400, weapon[1])



//Enemies
let boss = new enemy (10000, 40, 1000, 500)
let bossTwo = new enemy (15000, 40, 2000, 650)
let bossThree = new enemy (20000, 40, 3000, 800)




let start = function() {

		// //ENEMY COMBAT
		//----------------------------------------------------
		 setInterval(function(){
		 	boss.heal()
		 	$('#character-damage').html("+" + boss.healing)		//logs heal.
		 	$('#character-damage').css('color', 'green')
		 	$('#character-damage').css('animation', 'effect6 2s forwards')		//changes color to green.
		 }, 8000);
		 setInterval(function(){
		 	boss.attack(paladin)
		 	$('#enemy-damage').html("-" + boss.dmg)				//logs damage.
		 	$('#enemy-damage').css('color', 'red')
		 	$('#enemy-damage').css('animation', 'effect7 2s forwards')				//changes color to red.

		 }, 7200);

		 setInterval(function(){										
	    	let animation = $('#enemy-attack-animation')						
	    	animation.css('visibility', 'visible')				//this part enables the animation.

	    	setTimeout(function() {             				
	         animation.css('visibility', 'hidden');
	  		}, 900) 											//timeDisabled = millisecons to enable animation again.
	    }, 7200);
		//----------------------------------------------------


		//HP Updates
		//----------------------------------------------------
		setInterval(function() {
		$('#character-hp').html(paladin.hp)
		}, 100)
		setInterval(function() {
		$('#enemy-hp').html(boss.hp)
		}, 100)


};		
		

//Damage/Heal Updates
//----------------------------------------------------
$('#attack-one').click(function () {
	$('#character-damage').html("-"+sword.one) 		//logs damage done.
	$('#character-damage').css('color', 'red')		//logs heal and changes color to red.
	$('#character-damage').css('animation', 'effect1 2s forwards')		
});
$('#attack-two').click(function () {
	$('#character-damage').html("-"+sword.two)
	$('#character-damage').css('color', 'red')
	$('#character-damage').css('animation', 'effect2 2s forwards')
});
$('#attack-three').click(function () {
	$('#character-damage').html("-"+sword.three)
	$('#character-damage').css('color', 'red')
	$('#character-damage').css('animation', 'effect3 2s forwards')
});
$('#ultimate').click(function () {
	$('#character-damage').html("-"+sword.ultimate)
	$('#character-damage').css('color', 'yellow')
	$('#character-damage').css('animation', 'effect4 2s forwards')
});
$('#heal').click(function () {
	$('#enemy-damage').html("+"+paladin.healing)
	$('#enemy-damage').css('color', 'green')
	$('#enemy-damage').css('animation', 'effect5 2s forwards')
});


//Game Over
//----------------------------------------------------
setInterval(function() {
	if(paladin.hp<=0){
		$('#gameover').css('color', 'red')
	}
}, 100);

if(paladin<=0){
	start = null
}

//You Won
//----------------------------------------------------
setInterval(function() {
	if(boss.hp<=0){
		$('#you-won').css('color', 'green')
	}
}, 100);





											//Functions for combat buttons
//--------------------------------------------------------------------------------------------------------
							//Used an annonymus function to call another function because..
						//..the attack functions are bound to the Button and return and object.


//Function to disable Button
							
let x = function(timeDisabled){										
    	let button = $(this)						
    	button.attr('disabled', 'disabled')			//this part disables the button.

    	setTimeout(function() {             		//This part enables the button after set amout of time.
         button.removeAttr('disabled');
  		}, timeDisabled.data) 						//timeDisabled = millisecons to enable button again.
    };

let one = function(timeDisabled){										
    	let animation = $('#attack-one-animation')						
    	animation.css('visibility', 'visible')				//this part disables the animation.

    	setTimeout(function() {             				//This part enables the animation after set amout of time.
         animation.css('visibility', 'hidden');
  		}, timeDisabled.data) 								//timeDisabled = millisecons to enable animation again.
    };


let two = function(timeDisabled){										
    	let animation = $('#attack-two-animation')						
    	animation.css('visibility', 'visible')				//this part disables the animation.

    	setTimeout(function() {             				//This part enables the animation after set amout of time.
         animation.css('visibility', 'hidden');
  		}, timeDisabled.data) 								//timeDisabled = millisecons to enable animation again.
    };

let three = function(timeDisabled){										
    	let animation = $('#attack-three-animation')						
    	animation.css('visibility', 'visible')				//this part disables the animation.

    	setTimeout(function() {             				//This part enables the animation after set amout of time.
         animation.css('visibility', 'hidden');
  		}, timeDisabled.data) 								//timeDisabled = millisecons to enable animation again.
    };

let ultim = function(timeDisabled){										
    	let animation = $('#ultimate-animation')						
    	animation.css('visibility', 'visible')				//this part disables the animation.

    	setTimeout(function() {             				//This part enables the animation after set amout of time.
         animation.css('visibility', 'hidden');
  		}, timeDisabled.data) 								//timeDisabled = millisecons to enable animation again.
    };

let hea = function(timeDisabled){										
    	let animation = $('#heal-animation')						
    	animation.css('visibility', 'visible')				//this part disables the animation.

    	setTimeout(function() {             				//This part enables the animation after set amout of time.
         animation.css('visibility', 'hidden');
  		}, timeDisabled.data) 								//timeDisabled = millisecons to enable animation again.
    };

//Quick Attack Functions
//----------------------------------------------------------------------------------------------------------
	
	$('#attack-one').click(function() {paladin.attackOne(boss)});	//Click function to attack.
	$('#attack-one').click(1000, x);								//Click function to disable button.
	$('#attack-one').click(1000, one); 																



//Light Attack Functions
//----------------------------------------------------------------------------------------------------------	
	
	$('#attack-two').click(function() {paladin.attackTwo(boss)});	//Click function to attack.
	$('#attack-two').click(4000, x);								//Click function to disable button.
	$('#attack-two').click(1000, two)


//Heavy Attack Functions
//----------------------------------------------------------------------------------------------------------
	
	$('#attack-three').click(function() {paladin.attackThree(boss)});//Click function to attack.
	$('#attack-three').click(6000, x);								//Click function to disable button.
	$('#attack-three').click(5000, three);
	

//Ultimate Attack Functions
//----------------------------------------------------------------------------------------------------------
	
	$('#ultimate').click(function() {paladin.ultimate(boss)});		//Click function to attack.
	$('#ultimate').click(15000, x);									//Click function to disable button.
	$('#ultimate').click(2000, ultim);


//Heal Button Functions
//----------------------------------------------------------------------------------------------------------

	$('#heal').click(function() {paladin.heal()});					//Click function to heal.
	$('#heal').click(12000, x);										//Click function to disable button.
	$('#heal').click(2000, hea);



//Function to activate Ultimate animation
//----------------------------------------------------------------------------------------------------------
	$('#ultimate').click(function() {								
		$('#character').toggleClass("character-attack")				//Toggles animation on.

		setTimeout(function() {
		$('#character').toggleClass("character-attack")
		}, 1400) 													//Toggles animation off after 1.4sec																			
	});	

//Heal button Demo for Boss Ultimate
//----------------------------------------------------------------------------------------------------------
	$('#heal').click(function() {
		$('#enemy').toggleClass("enemy-attack")						//Toggles animation on.

		setTimeout(function() {
		$('#enemy').toggleClass("enemy-attack")
		}, 6000) 													//Toggles animation off after 6sec.
	});





//Thumbnails to choose Battleground
//----------------------------------------------------------------------------------------------------------
$('#thumbnail-waterfall').click(function () {
	$('.screen').toggleClass("screen-background-waterfall")
	$('.screen').toggleClass("screen-background-tree")
	

});
	
$('#thumbnail-tree').click(function () {
	$('.screen').toggleClass("screen-background-tree")
	$('.screen').toggleClass("screen-background-waterfall")
});




//Button to start game

$('#start-button').click(start())

















