import React from 'react';
import {
	Scene,
	LevelButton
} from './Scene.js';
import StyledBox from './Container.js';
import {
	GameFullText,
	MainTitle
} from './GameMisc';
import {
	ButtonsContainer
} from './ButtonsContainer.js';

export class SceneContainer extends React.Component {

	render(){
		let presentLevel = this.props.game.state.presentLevel;
		let noLevelPresent = presentLevel === null;
		return (<StyledBox className="SceneContainer">
			<MainTitle
				text={(!noLevelPresent) ? presentLevel.loadLevel(this.props.game) : '.....'}
			/>
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
		if (game.race === "Undead") {
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
				if (game.race === "Undead") {
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
				if (game.race === "Undead") {
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
		let text = "You boozehound, you. You tell yourself that's the last time you split a keg of Ye Ol' English with your medieval boys. But that stands the question, how did you end up in this cave?";

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
		let text = "Judging by how many bones protrude from your rotting flesh, you have been dead for a few weeks. Your inventory is full of the items you were buried with. You have retained few memories from your time among the living other than the memories connected to your unfinished business."
		return text;
	}, [
		new LevelButton('Continue', (game) => {
			game.nextLevel(Scenes.Remember);
		}),
		new LevelButton("Onward to adventure!", (game) => {
			game.nextLevel(Scenes.Outside_Now);
		})
		], [['img', 'buddyincar.jpg']]),

	Remember: new Scene('Cave', (game) => {
		if (game.race === "Undead") {
			let text = "You lived as a simple retired mercenary. You spent your time looking for odd jobs in the land of Ulmeyda until your death in the year 108 of our Lord Cloudman's reign when you were killed in a duel against Bert the Ruthless. Your death was an honorable one, yet something else has rekindled your soul...";
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
		], [['img', 'bilyrayhomeles.jpg']]),


	Outside: new Scene('Outside of the cave', (game) => {
		let text = "You get to your feet and head off down the grimey NYC streets, in search of your next move.";

		return text;
	}, [
		new LevelButton('Head towards town', (game) => {
			game.nextLevel(Scenes.First_Encounter);
		}),
	], [['img', 'tradingplacesstreet.jpg']]),


	Outside_Now: new Scene('Outside of the cave', (game) => {
		let text = "Who cares about the plot or the game developer's hardwork? Just make it easy for yourself and say you are on a quest to get $14 owed to you by some villain named...I dunno...Gerald...the Lame. You exit the cave drooling for action and see a town in the distance.";

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
	], [['img', 'fightscene.gif']]),

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
			let text = game.name + " VS. Fearless Frog";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 2) {
			let text = "You deal " + game.atk + " points of damage to Fearless Frog. Fearless frog smacks you hard upside the head. You recieve 8 points of damage";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 3) {
			let text = "You deal " + game.atk + " points of damage to Fearless Frog. Fearless frog shoots off one of your fingers. Hmmmmm...8 damage.";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 4) {
			let text = "You deal " + game.atk + " points of damage to Fearless Frog. Fearless frog is weak but he smacks you with his crutch. You recieve 8 points of damage";
			return text;
		} else if (Scenes.Fight1.playerVisitedCounter === 5) {
			let text = "You brutally slaughtered the frog.";
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
		new LevelButton('Go to town shop', (game) => {
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
	], [['img', 'fight.gif']]),

	Shop: new Scene('Town Shop', (game) =>{
		let text = "You only got $5 from slaying that frog and the shop is selling a record and a detonator for $5 each. Gerald... Which should you buy?";
		return text;
	}, [
		new LevelButton('Buy record', (game) => {
			game.nextLevel(Scenes.Bought);
			game.boughtRecord();
		}),
		new LevelButton("Buy detonator", (game) => {
			game.nextLevel(Scenes.Bought);
			game.boughtDet();
		}),
		new LevelButton("Leave here forever", (game) => {
			game.nextLevel(Scenes.Exit_Shop);
		})
		], [['img', 'shop.jpg']]),

	Bought: new Scene('Town Shop', (game) =>{
		let text = "Why did you buy that? Now you are broke.";
		return text;
	}, [
		new LevelButton("Leave here forever", (game) => {
			game.nextLevel(Scenes.Exit_Shop);
		})
		], [['img', 'shop.jpg']]),

	Exit_Shop: new Scene('Town Shop', (game) =>{
		let text = "You turn to the shop keep and tell him you will never ever return to this shop again, as long as you live. You wait for the shopkeep to say something for a few seconds, then leave.";
		return text;
	}, [
		new LevelButton("Head for the door", (game) => {
			game.nextLevel(Scenes.Plot_Twist);
		})
		], [['img', 'shop.jpg']]),

	Plot_Twist: new Scene('Town Shop', (game) =>{
		let text = "The shopkeep reveals himself to be Gerald. He's a pretty old guy, you forgot he was the town shopkeep. He has your money but he isn't really about giving it to you. He also drugged your drink and threw you in the cave. Moment of truth.";
		return text;
	}, [
		new LevelButton("Destruction", (game) => {
			game.nextLevel(Scenes.Bad_End);
			game.receiveMoney();
			game.receiveMoney();
			game.receiveMoney();
		}),
		new LevelButton("Forgiveness", (game) => {
			game.nextLevel(Scenes.Good_End);
			game.receiveMoney();
		}),
			new LevelButton("Use explosives", (game) => {
			game.nextLevel(Scenes.The_End);
			game.detonateExplosives();
		}),
		], [['img', 'gerald.jpg']]),

	Bad_End: new Scene('Town Shop', (game) =>{
		let text = "You pull a nice DDT. Gerald is finished, your money in your hands. That was kind of messed up tho tbh, you are not the hero after all.";
		return text;
	}, [
		new LevelButton("Bad End", (game) => {
			game.nextLevel(Scenes.Completionist);
		})
		], [['img', 'lucha.gif']]),

	Good_End: new Scene('Town Shop', (game) =>{
		let text = "You negotiate with Gerald and you recieve $5. That was anti climactic but at least you keep your integrity.";
		return text;
	}, [
		new LevelButton("Good End", (game) => {
			game.nextLevel(Scenes.Completionist);
		})
		], [['img', 'forgive.jpg']]),

	The_End: new Scene('Town Shop', (game) =>{
		if (game.race === "Undead") {
			let text = "You walk away from an explosion without looking at it. You didn't get your $14 back, but now you can go back to your cave and go back to being dead.";
			return text;
		} else {
			let text = "You walk away from an explosion without looking at it. You didn't get your $14 back, but you got plenty of memories to last a life time.";
			return text;
		}
	}, [
		new LevelButton("The End", (game) => {
			game.nextLevel(Scenes.Completionist);
		})
		], [['img', 'explode.gif']]),

	Completionist: new Scene('End', (game) =>{
		let text = "You won!";
		return text;
	}, [
		new LevelButton("Replay?", (game) => {
			game.nextLevel(Scenes.Cave);
		})
		], [['text', 'Thanks for Playing']]),

};

