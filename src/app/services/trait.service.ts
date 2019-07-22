import { Injectable } from '@angular/core';
import { Trait, TraitType, TraitID } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TraitService {

  constructor() { }

  public GetAttributes(): Trait[] {
    return this.attributes;
  }

  public GetAttributeByID(id: TraitID): Trait {
    return this.attributes.find(x => x.ID == id);
  }

  public GetSkills(): Trait[] {
    return this.skills;
  }

  public GetSkillByID(id: TraitID): Trait {
    return this.skills.find(x => x.ID == id);
  }

  private attributes: Trait[] = [
    {
      ID: TraitID.Strength,
      Type: TraitType.Physical,
      Name: 'Strength',
      Dots: 0,
      IsAttribute: true,
    },
    {
      ID: TraitID.Dexterity,
      Type: TraitType.Physical,
      Name: 'Dexterity',
      Dots: 0,
      IsAttribute: true,
    },
    {
      ID: TraitID.Stamina,
      Type: TraitType.Physical,
      Name: 'Stamina',
      Dots: 0,
      IsAttribute: true,
    },

    {
      ID: TraitID.Charisma,
      Type: TraitType.Social,
      Name: 'Charisma',
      Dots: 0,
      IsAttribute: true,
    },
    {
      ID: TraitID.Manipulation,
      Type: TraitType.Social,
      Name: 'Manipulation',
      Dots: 0,
      IsAttribute: true,
    },
    {
      ID: TraitID.Composure,
      Type: TraitType.Social,
      Name: 'Composure',
      Dots: 0,
      IsAttribute: true,
    },

    {
      ID: TraitID.Intelligence,
      Type: TraitType.Mental,
      Name: 'Intelligence',
      Dots: 0,
      IsAttribute: true,
    },
    {
      ID: TraitID.Wits,
      Type: TraitType.Mental,
      Name: 'Wits',
      Dots: 0,
      IsAttribute: true,
    },
    {
      ID: TraitID.Resolve,
      Type: TraitType.Mental,
      Name: 'Resolve',
      Dots: 0,
      IsAttribute: true,
    },
  ];

  private skills: Trait[] = [
    // physical skills
    {
      ID: TraitID.Athletics,
      Type: TraitType.Physical,
      Name: 'Athletics',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Brawl,
      Type: TraitType.Physical,
      Name: 'Brawl',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Craft,
      Type: TraitType.Physical,
      Name: 'Craft',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Drive,
      Type: TraitType.Physical,
      Name: 'Drive',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Firearms,
      Type: TraitType.Physical,
      Name: 'Firearms',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Melee,
      Type: TraitType.Physical,
      Name: 'Melee',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Larceny,
      Type: TraitType.Physical,
      Name: 'Larceny',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Stealth,
      Type: TraitType.Physical,
      Name: 'Stealth',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Survival,
      Type: TraitType.Physical,
      Name: 'Survival',
      Dots: 0,
      IsAttribute: false,
    },
    // social Skills
    {
      ID: TraitID.AnimalKen,
      Type: TraitType.Social,
      Name: 'Animal Ken',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Etiquette,
      Type: TraitType.Social,
      Name: 'Etiquette',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Insight,
      Type: TraitType.Social,
      Name: 'Insight',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Intimidation,
      Type: TraitType.Social,
      Name: 'Intimidation',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Leadership,
      Type: TraitType.Social,
      Name: 'Leadership',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Performance,
      Type: TraitType.Social,
      Name: 'Performance',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Persuasion,
      Type: TraitType.Social,
      Name: 'Persuasion',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Streetwise,
      Type: TraitType.Social,
      Name: 'Streetwise',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Subterfuge,
      Type: TraitType.Social,
      Name: 'Subterfuge',
      Dots: 0,
      IsAttribute: false,
    },
    // mental Skills
    {
      ID: TraitID.Academics,
      Type: TraitType.Mental,
      Name: 'Academics',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Awareness,
      Type: TraitType.Mental,
      Name: 'Awareness',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Finance,
      Type: TraitType.Mental,
      Name: 'Finance',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Investigation,
      Type: TraitType.Mental,
      Name: 'Investigation',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Medicine,
      Type: TraitType.Mental,
      Name: 'Medicine',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Occult,
      Type: TraitType.Mental,
      Name: 'Occult',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Politics,
      Type: TraitType.Mental,
      Name: 'Politics',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Science,
      Type: TraitType.Mental,
      Name: 'Science',
      Dots: 0,
      IsAttribute: false,
    },
    {
      ID: TraitID.Technology,
      Type: TraitType.Mental,
      Name: 'Technology',
      Dots: 0,
      IsAttribute: false,
    },
  ];

}
