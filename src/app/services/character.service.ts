import { Injectable } from '@angular/core';
import { Character, Trait, TraitType, ClanType, PredatorType } from '../models/index';
import { TraitService } from './trait.service';
import { PredatorTypeService } from './predator-type.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor (
    private traitSvc: TraitService,
    private predatorSvc: PredatorTypeService,
  ) {

  }

  public GetNewCharacter(): Character {
    return {
      Name: '',
      Clan: ClanType.Brujah,
      Generation: 13,
      Attributes: this.traitSvc.GetAttributes(),
      Skills: this.traitSvc.GetSkills(),
      Health: 3,
      Willpower: 0,
      PredatorType: PredatorType.Alleycat,
    };
  }

}
