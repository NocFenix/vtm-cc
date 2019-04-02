import { Injectable } from '@angular/core';
import { Character, Trait, TraitType, ClanType } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor () {

  }

  public GetNewCharacter(): Character {
    return {
      Name: '',
      Clan: ClanType.Brujah,
      Generation: 13,
      Attributes: this.GetAttributes(),
      Skills: this.GetSkills(),
    };
  }

  private GetAttributes(): Trait[] {
    return [
      {
        Type: TraitType.Physical,
        Name: 'Strength',
        Dots: 0,
        IsAttribute: true,
      },
      {
        Type: TraitType.Physical,
        Name: 'Dexterity',
        Dots: 0,
        IsAttribute: true,
      },
      {
        Type: TraitType.Physical,
        Name: 'Stamina',
        Dots: 0,
        IsAttribute: true,
      },

      {
        Type: TraitType.Social,
        Name: 'Charisma',
        Dots: 0,
        IsAttribute: true,
      },
      {
        Type: TraitType.Social,
        Name: 'Manipulation',
        Dots: 0,
        IsAttribute: true,
      },
      {
        Type: TraitType.Social,
        Name: 'Composure',
        Dots: 0,
        IsAttribute: true,
      },

      {
        Type: TraitType.Mental,
        Name: 'Intelligence',
        Dots: 0,
        IsAttribute: true,
      },
      {
        Type: TraitType.Mental,
        Name: 'Wits',
        Dots: 0,
        IsAttribute: true,
      },
      {
        Type: TraitType.Mental,
        Name: 'Resolve',
        Dots: 0,
        IsAttribute: true,
      },
    ];
  }

  private GetSkills(): Trait[] {
    return [
      // physical skills
      {
        Type: TraitType.Physical,
        Name: 'Athletics',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Physical,
        Name: 'Brawl',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Physical,
        Name: 'Craft',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Physical,
        Name: 'Drive',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Physical,
        Name: 'Firearms',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Physical,
        Name: 'Melee',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Physical,
        Name: 'Larceny',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Physical,
        Name: 'Stealth',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Physical,
        Name: 'Survival',
        Dots: 0,
        IsAttribute: false,
      },
      // social Skills
      {
        Type: TraitType.Social,
        Name: 'Animal Ken',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Social,
        Name: 'Etiquette',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Social,
        Name: 'Insight',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Social,
        Name: 'Intimidation',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Social,
        Name: 'Leadership',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Social,
        Name: 'Performance',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Social,
        Name: 'Persuasion',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Social,
        Name: 'Streetwise',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Social,
        Name: 'Subterfuge',
        Dots: 0,
        IsAttribute: false,
      },
      // mental Skills
      {
        Type: TraitType.Mental,
        Name: 'Academics',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Mental,
        Name: 'Awareness',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Mental,
        Name: 'Finance',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Mental,
        Name: 'Investigation',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Mental,
        Name: 'Medicine',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Mental,
        Name: 'Occult',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Mental,
        Name: 'Politics',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Mental,
        Name: 'Science',
        Dots: 0,
        IsAttribute: false,
      },
      {
        Type: TraitType.Mental,
        Name: 'Technology',
        Dots: 0,
        IsAttribute: false,
      },
    ];
  }
}
