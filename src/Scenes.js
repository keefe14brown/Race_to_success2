import React from 'react';
import {
	Scene,
	LevelButton
} from './Scene.js';
import StyledBox from './Container.js';
import {
	GameFullText,
	// MainTitle
} from './GameMisc';
import {
	ButtonsContainer
} from './ButtonsContainer.js';

export class SceneContainer extends React.Component {

	render(){
		let presentLevel = this.props.game.state.presentLevel;
		let noLevelPresent = presentLevel === null;
		return (<StyledBox className="SceneContainer">
			{/* <MainTitle
				text={(!noLevelPresent) ? presentLevel.loadLevel(this.props.game) : '.....'}
			/> */}
			<GameFullText
				id="text-img"
				noLevelPresent={noLevelPresent}
				game={this.props.game}
				presentLevel={presentLevel}
			/>
			<ButtonsContainer
				noLevelPresent={noLevelPresent}
				game={this.props.game}
				presentLevel={presentLevel}
			/>
		</StyledBox>);
	}
}

export let Scenes = {

	Cave: new Scene('Cave', (game) => {
		if (game.race === "option2") {
			let text = "Infamous Finance giants, Randolph and Mortimer Duke are the richest men in America. They often find themselves bored with dominating the world through investments and finance.  One day Mortimer has an exciting idea.......";
			return text;
		} else {
			let text = "Infamous Finance giants, Randolph and Mortimer Duke are the richest men in America. They often find themselves bored with dominating the world through investments and finance.  One day Mortimer has an exciting idea.......";
			return text;
		}
	}, [
		new LevelButton("continue",
			(game) => {
				game.nextLevel(Scenes.Sobriety);
			},
			(game) => {
				if (game.race === "option2") {
					this.showButton=false;
					return this.showButton;
				} else {
					this.showButton=true;
					return this.showButton;
				}
			}
		),
		// new LevelButton("what did they do?", (game) => {
		// 	game.nextLevel(Scenes.Been_Clean);
		// 	},
		// 	(game) => {
		// 		if (game.race === "Undead") {
		// 			this.showButton=false;
		// 			return this.showButton;
		// 		} else {
		// 			this.showButton=true;
		// 			return this.showButton;
		// 		}
		// 	}
		// ),
		// new LevelButton("Had one too many", (game) => {
		// 	game.nextLevel(Scenes.Bad_Choices);
		// 	},
		// 	(game) => {
		// 		if (game.race === "Undead") {
		// 			this.showButton=false;
		// 			return this.showButton;
		// 		} else {
		// 			this.showButton=true;
		// 			return this.showButton;
		// 		}
		// 	}
		// ),
		new LevelButton("Gather bearings", (game) => {
			game.nextLevel(Scenes.Condition);
			},
			(game) => {
				if (game.race === "option2") {
					this.showButton=true;
					return this.showButton;
				} else {
					this.showButton=false;
					return this.showButton;
				}
			}
		),
		new LevelButton("Skip The Intro", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		}),
	], [['img', 'Tradingplaces5.jpg']]),


	Sobriety: new Scene('Cave', (game) => {
		let text = "MORTIMER: 'Randolph! RANDOLPH!!! Lets play a game!'  RANDOLPH: 'I'm listening Mortimer.' MORTIMER: 'How about we find a person, broke and struggling, and kickstart their career...just throw them into the world and see what happens, see what they do with it!'  RANDOLPH: 'Brilliant idea Mortimer! I have an idea as well my good sir. The first to earn 1 million dollars, will be the winner!  The prize will be the Waldorf Mansion & All the money earned!!!' Mortimer: 'I know exactly where to find our guy.......'"

		return text;
	}, [
		new LevelButton('BEGIN', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		// new LevelButton("Onward to adventure!", (game) => {
		// 	game.nextLevel(Scenes.Outside_Now);
		// })
		], [['img', 'tradingplaces2.png']]),


	Been_Clean: new Scene('Cave', (game) => {
		let text = "It's been many years since you had a drink, not since the aftermath of the Great Cataclysmic War. But that stands the question, how did you end up in this cave? You have not sustained any injuries, so you suspect foul play.";

		return text;
	}, [
		new LevelButton('Continue', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Onward to adventure!", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'buddyincar.jpg']]),


	Bad_Choices: new Scene('Cave', (game) => {
		let text = "still working on this script";

		return text;
	}, [
		new LevelButton('Continue', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Onward to adventure!", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'buddyincar.jpg']]),

	Condition: new Scene('Cave', (game) => {
		let text = "still working on this script"
		return text;
	}, [
		new LevelButton('Continue', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Onward to Adventure!", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'buddyincar.jpg']]),

	Remember: new Scene('Cave', (game) => {
		if (game.race === "option2") {
			let text = "you usually spend your days begging on the streets, faking injury, pretending to be a disabled veteran....the epitome of a LOSER!";
			return text;
		} else {
			let text = "A limo suddenly pulls up beside you. Two sharply dressed man wave you into the car, offering a opportunity for a new shot at life!";
			return text;
		}
	}, [
		new LevelButton("Continue", (game) => {
			game.nextLevel(Scenes.Gerald);
		})
		], [['img', 'buddyincar.jpg']]),


	Gerald: new Scene('Cave', (game) => {
		if (game.race === "Undead") {
			let text = "The car pulls over and you're dumped out into the street.  The Duke brother's tell you.  if you can survive and earn your way to 1 million dollars they will make you rich for the rest of your life.";
			return text;
		} else {
			let text = "The car pulls over and you're dumped out into the street.  The Duke brother's tell you.  if you can survive and earn your way to 1 million dollars they will make you rich for the rest of your life.";
			return text;
		}

	}, [
		new LevelButton("Continue", (game) => {
			game.nextLevel(Scenes.Outside);
		})
		], [['img', 'billyrayhomeles.jpg']]),


	Outside: new Scene('Outside of the cave', (game) => {
		let text = "You get to your feet and head off down the grimey NYC streets, in search of your next move.";

		return text;
	}, [
		new LevelButton('Head towards town', (game) => {
			game.nextLevel(Scenes.First_Encounter);
		}),
	], [['img', 'tradingplacesstreet.jpg']]),


	Outside_Now: new Scene('The Streets of NYC', (game) => {
		let text = "Who cares about the plot or the game developer's hardwork? Just make it easy for yourself and say you are on a quest to get earn money the best you can......";
		return text;
	}, [
		new LevelButton('Head towards the town', (game) => {
			game.nextLevel(Scenes.First_Encounter);
		}),
	], [['img', 'tradingplacesnight.jpg']]),


	First_Encounter: new Scene('ENCOUNTER!', (game) => {
		let text = "A mugger starts harrassing you in the allyway. You try to shrug him off but he wants a fight!";

		return text;
	}, [
		new LevelButton('Engage', (game) => {
			game.nextLevel(Scenes.Fight1);
		}),
		new LevelButton('Coward it out', (game) => {
			game.nextLevel(Scenes.Coward);
			game.froggo(49);
		}),
	], [['img', 'tradingplacesnight.jpg']]),

	Coward: new Scene('ENCOUNTER!', (game) => {
		let text = "He chases you out the alley way, throwing bottles, and threatening to get you next time!";

		return text;
	}, [
		new LevelButton('Engage', (game) => {
			game.nextLevel(Scenes.Shop);
		})
	], [['img', 'warriorscharacter.gif']]),

	Fight1: new Scene('Battle!', (game) => {
		if (Scenes.Fight1.playerVisitedCounter === 1) {
			let text = game.name + " VS. The Mugger";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 2) {
			let text = "You deal " + game.atk + " points of damage to The Mugger. The Mugger smacks you hard upside the head. You recieve 8 points of damage";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 3) {
			let text = "You deal " + game.atk + " points of damage to The Mugger. The Mugger lands a hard right to your chin.....8 points damage.";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 4) {
			let text = "You deal " + game.atk + " points of damage to The Mugger. The Mugger is weak but he still has some fight in him, his leg kick deals you 8 points of damage";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 5) {
			let text = "You defeated The Mugger";
			return text;
		}
	}, [
		new LevelButton('Attack', (game) => {
			game.nextLevel(Scenes.Fight1);
			game.froggo(8);
			game.critical();
		},
			(game) => {
				if (Scenes.Fight1.playerVisitedCounter === 5) {
					this.showButton=false;
					return this.showButton;
				} else {
					this.showButton=true;
					return this.showButton;
				}
			}
		),
		new LevelButton('Defend', (game) => {
			game.nextLevel(Scenes.Fight1);
			game.froggo(2);
		},
		(game) => {
				if (Scenes.Fight1.playerVisitedCounter === 5) {
					this.showButton=false;
					return this.showButton;
				} else {
					this.showButton=true;
					return this.showButton;
				}
			}
		),
		new LevelButton('Go To Corner Store', (game) => {
			game.nextLevel(Scenes.Shop);
			game.receiveMoney();
		},
		(game) => {
				if (Scenes.Fight1.playerVisitedCounter === 5) {
					this.showButton=true;
					return this.showButton;
				} else {
					this.showButton=false;
					return this.showButton;
				}
			}
		)
	], [['img', 'fightscene.gif']]),

	Shop: new Scene('Town Shop', (game) =>{
		let text = " You only got a measly $5 from taking on the mugger... What should you buy?";
		return text;
	}, [
		new LevelButton('Buy Chopped Cheese', (game) => {
			game.nextLevel(Scenes.Bought);
			game.boughtRecord();
		}),
		new LevelButton("Buy lotto tickets", (game) => {
			game.nextLevel(Scenes.Bought);
			game.boughtDet();
		}),
		new LevelButton("Leave here forever", (game) => {
			game.nextLevel(Scenes.Exit_Shop);
		})
		], [['img', 'bodega.jpg']]),

	Bought: new Scene('Town Shop', (game) =>{
		let text = "Why did you buy that? Now you are broke.";
		return text;
	}, [
		new LevelButton("Leave here forever", (game) => {
			game.nextLevel(Scenes.Exit_Shop);
		})
		], [['img', 'bodega.jpg']]),

	Exit_Shop: new Scene('Town Shop', (game) =>{
		let text = "You turn to the shop keep and tell him you'll be back another time.";
		return text;
	}, [
		new LevelButton("Head for the door", (game) => {
			game.nextLevel(Scenes.Plot_Twist);
		})
		], [['img', 'bodega.jpg']]),

	Plot_Twist: new Scene('Town Shop', (game) =>{
		let text = "As you look up at the man behind the counter, you realize the shop owner is The Mugger you beat up earlier.....he has a gun, and you're in trouble!";
		return text;
	}, [
		new LevelButton("Fight Him!", (game) => {
			game.nextLevel(Scenes.Bad_End);
			game.receiveMoney();
			game.receiveMoney();
			game.receiveMoney();
		}),
		new LevelButton("Apologize ask for Peace", (game) => {
			game.nextLevel(Scenes.Good_End);
			game.receiveMoney();
		}),
			new LevelButton("Go Jason Bourne", (game) => {
			game.nextLevel(Scenes.The_End);
			game.detonateExplosives();
		}),
		], [['img', 'warriors2.gif']]),

	Bad_End: new Scene('Town Shop', (game) =>{
		let text = "You freaked out! that was the wrong move. The shop owner pulls the trigger before you can get a hit in.  it's all over.";
		return text;
	}, [
		new LevelButton("Bad End", (game) => {
			game.nextLevel(Scenes.Completionist);
		})
		], [['img', 'menace.gif']]),

	Good_End: new Scene('Town Shop', (game) =>{
		let text = "You ask for forgiveness, and explain that you never wanted any trouble. Surprisingly, the owner puts the gun down, and apologizes as well.  He offers you free food for your troubles!.";
		return text;
	}, [
		new LevelButton("Good End", (game) => {
			game.nextLevel(Scenes.Completionist);
		})
		], [['img', 'forgive.jpg']]),

	The_End: new Scene('Town Shop', (game) =>{
		if (game.race === "option 2") {
			let text = "You duck just as he fires a shot. You throw the bottle on the shelf in front of you, at his head, landing a solid blow, he goes down, and you rush in to disarm him. Nice work Bruce Leroy! You walk out unscathed";
			return text;
		} else {
			let text = "You duck just as he fires a shot. You throw the bottle on the shelf in front of you, at his head, landing a solid blow, he goes down, and you rush in to disarm him. Nice work Bruce Leroy! You walk out unscathed.";
			return text;
		}
	}, [
		new LevelButton("The End", (game) => {
			game.nextLevel(Scenes.Completionist);
		})
		], [['img', 'maxresdefault.jpg']]),

	Completionist: new Scene('End', (game) =>{
		let text = "try a new path next time!";
		return text;
	}, [
		new LevelButton("Replay?", (game) => {
			game.nextLevel(Scenes.Cave);
		})
		], [['text', 'Thanks for Playing']]),

};

