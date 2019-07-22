import { Injectable } from '@angular/core';
import { Predator, PredatorType, TraitType, DisciplineID, TraitID } from '../models/index';
import { TraitService } from './trait.service';
import { DisciplineService } from './discipline.service';

@Injectable({
  providedIn: 'root'
})
export class PredatorTypeService {

  constructor(
    private traitSvc: TraitService,
    private disciplineSvc: DisciplineService,
  ) {
    
  }

  public GetPredatorTypes(): Predator[] {
    return this.predators;
  }

  public GetPredatorTypeByType(type: PredatorType): Predator {
    return this.predators.find(x => x.Type == type);
  }

  private predators: Predator[] = [
    {
      Type: PredatorType.Alleycat,
      Name: "Alleycat",
      BonusSpecialty: [
        TraitID.Intimidation,
        TraitID.Brawl,
      ],
      BonusDiscipline: [
        DisciplineID.Celerity,
        DisciplineID.Potence,
      ],
      SpecialtyChosen: false,
    },
    {
      Type: PredatorType.Bagger,
      Name: "Bagger",
      BonusSpecialty: [
        TraitID.Larceny,
        TraitID.Streetwise,
      ],
      BonusDiscipline: [
        DisciplineID.BloodSorcery,
        DisciplineID.Obfuscate,
      ],
      SpecialtyChosen: false,
    },
    {
      Type: PredatorType.BloodLeech,
      Name: "Blood Leech",
      BonusSpecialty: [
        TraitID.Brawl,
        TraitID.Stealth,
      ],
      BonusDiscipline: [
        DisciplineID.Celerity,
        DisciplineID.Protean,
      ],
      SpecialtyChosen: false,
    },
    {
      Type: PredatorType.Cleaver,
      Name: "Cleaver",
      BonusSpecialty: [
        TraitID.Persuasion,
        TraitID.Subterfuge,
      ],
      BonusDiscipline: [
        DisciplineID.Dominate,
        DisciplineID.Animalism,
      ],
      SpecialtyChosen: false,
    },
    {
      Type: PredatorType.Consensualist,
      Name: "Consensualist",
      BonusSpecialty: [
        TraitID.Medicine,
        TraitID.Persuasion,
      ],
      BonusDiscipline: [
        DisciplineID.Auspex,
        DisciplineID.Fortitude,
      ],
      SpecialtyChosen: false,
    },
    {
      Type: PredatorType.Farmer,
      Name: "Farmer",
      BonusSpecialty: [
        TraitID.AnimalKen,
        TraitID.Survival,
      ],
      BonusDiscipline: [
        DisciplineID.Animalism,
        DisciplineID.Protean,
      ],
      SpecialtyChosen: false,
    },
    {
      Type: PredatorType.Osiris,
      Name: "Osiris",
      BonusSpecialty: [
        TraitID.Occult,
        TraitID.Performance,
      ],
      BonusDiscipline: [
        DisciplineID.BloodSorcery,
        DisciplineID.Presence,
      ],
      SpecialtyChosen: false,
    },
    {
      Type: PredatorType.Sandman,
      Name: "Sandman",
      BonusSpecialty: [
        TraitID.Medicine,
        TraitID.Stealth,
      ],
      BonusDiscipline: [
        DisciplineID.Auspex,
        DisciplineID.Obfuscate,
      ],
      SpecialtyChosen: false,
    },
    {
      Type: PredatorType.SceneQueen,
      Name: "Scene Queen",
      BonusSpecialty: [
        TraitID.Etiquette,
        TraitID.Leadership,
        TraitID.Streetwise,
      ],
      BonusDiscipline: [
        DisciplineID.Dominate,
        DisciplineID.Potence,
      ],
      SpecialtyChosen: false,
    },
    {
      Type: PredatorType.Siren,
      Name: "Siren",
      BonusSpecialty: [
        TraitID.Persuasion,
        TraitID.Subterfuge,
      ],
      BonusDiscipline: [
        DisciplineID.Fortitude,
        DisciplineID.Presence,
      ],
      SpecialtyChosen: false,
    },
  ];

}
