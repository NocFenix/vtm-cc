import { Component, OnInit } from '@angular/core';
import { RollResult } from '../../models';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'vtm-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: [ './dice-roller.component.less' ]
})
export class DiceRollerComponent implements OnInit {

  public dicePool: number;
  public hungerDice: number;
  public targetSuccesses: number;
  public successes: number;

  public isSuccessful: boolean;
  public isBestialFailure: boolean;
  public isMessyCritical: boolean;
  public rolled = false;

  public rollResults: RollResult[] = [];

  constructor(
    private msgSvc: MessageService,
  ) {

  }

  ngOnInit() {

  }

  public rollDice(): void {
    this.rollResults = [];
    this.successes = 0;
    this.isMessyCritical = false;
    this.isBestialFailure = false;
    this.isSuccessful = false;

    if (this.dicePool === null || this.dicePool === undefined || this.dicePool <= 0) {
      this.msgSvc.add({severity: 'error', summary: 'Invalid Dice Pool',
        detail: 'Must at least enter a positive amount in Dice Pool.'});

      this.rolled = false;
      return;
    }

    let normalDiceRolled = this.dicePool;
    let hasHungerDice = false;
    if (this.hungerDice !== null && this.hungerDice !== undefined && this.hungerDice > 0) {
      if (this.hungerDice > this.dicePool) {
        normalDiceRolled = 0;
      } else {
        normalDiceRolled = this.dicePool - this.hungerDice;
      }
      hasHungerDice = true;
    }
    for (let i = 0; i < normalDiceRolled; i++) {
      const rollResult = Math.floor((Math.random() * 10) + 1);
      this.rollResults.push({ Result: rollResult, IsHungerDie: false });
    }

    if (hasHungerDice) {
      for (let i = 0; i < this.hungerDice; i++) {
        const rollResult = Math.floor((Math.random() * 10) + 1);
        this.rollResults.push({ Result: rollResult, IsHungerDie: true });
      }
    }

    this.rollResults.forEach(r => {
      if (r.Result > 5 && r.Result < 10) {
        r.Result = 9;
      }
      if (!r.IsHungerDie && r.Result < 6) {
        r.Result = 2;
      }
      if (r.IsHungerDie && r.Result < 6 && r.Result > 1) {
        r.Result = 2;
      }
    });

    const criticals = this.rollResults.filter(r => r.Result === 10 && r.IsHungerDie === false);
    const successes = this.rollResults.filter(r => r.Result > 5 && r.Result < 10 && r.IsHungerDie === false);
    const hungerCriticals = this.rollResults.filter(r => r.Result === 10 && r.IsHungerDie === true);
    const hungerSuccesses = this.rollResults.filter(r => r.Result > 5 && r.Result < 10 && r.IsHungerDie === true);
    const bestialFails = this.rollResults.filter(r => r.Result === 1 && r.IsHungerDie === true);

    if (criticals !== null && criticals !== undefined) {
      let countCrits = criticals.length;
      let messy = false;
      if (hungerCriticals !== null && hungerCriticals !== undefined && hungerCriticals.length > 0) {
        countCrits += hungerCriticals.length;
        messy = true;
      }

      if (countCrits >= 2) {
        if (messy) {
          this.isMessyCritical = true;
        }
        const crits = Math.floor(countCrits / 2);
        this.successes += crits * 4;
        const norm = countCrits % 2;
        this.successes += norm;
      } else {
        this.successes += countCrits;
      }
    }

    if (successes !== null && successes !== undefined) {
      this.successes += successes.length;
    }
    if (hungerSuccesses !== null && hungerSuccesses !== undefined) {
      this.successes += hungerSuccesses.length;
    }

    if (this.targetSuccesses !== null && this.targetSuccesses !== undefined && this.targetSuccesses > 0) {
      this.isSuccessful = this.successes >= this.targetSuccesses;
    } else if (this.successes <= 0) {
      this.isSuccessful = false;
    } else {
      this.isSuccessful = true;
    }

    if (!this.isSuccessful && this.hungerDice) {
      this.isMessyCritical = false;
      this.isBestialFailure = (bestialFails !== null && bestialFails !== undefined && bestialFails.length > 0);
    }
    this.rollResults.sort((a, b) => {
      if (a.Result < b.Result) {
        return -1;
      }
      if (a.Result > b.Result) {
        return +1;
      }
      if (a.IsHungerDie && !b.IsHungerDie) {
        return -1;
      }
      if (!a.IsHungerDie && b.IsHungerDie) {
        return +1;
      }
    });
    this.rolled = true;
  }
}
