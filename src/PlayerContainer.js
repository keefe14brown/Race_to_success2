import React, { Component } from 'react';

class PlayerHUD extends Component {

	render() {
		return(
			<div
				className = 'PlayerHUD'>
        <div>
          <h1>Player Name: {this.props.change_PlayerName} </h1>
          <br></br>
          <h1> Wallet : {this.props.wallet} </h1>
        </div>
        <div>
          <h4>Health Points: {this.props.HealthPoints}/100 </h4>
          <h5>Luck: {this.props.Mana}/60</h5>
          <h6> Atk: {this.props.Atk} Def: {this.props.Def} </h6>
        </div>
        <div>
          <div id='toggleButtons'>
            <input className='button' type='button' value='Settings' />
            <input name='Items' className='button' type='button' value='Inventory' onClick={this.props.viewInventory} />
            <br/>
            <input className='button' type='button' value='Equipment' onClick={this.props.viewEquip} />
            <input className='button' type='button' value='Exit Game' onClick={this.props.exitGame} />
          </div>
			  </div>
			</div>
			)
	}
}

export default PlayerHUD;
