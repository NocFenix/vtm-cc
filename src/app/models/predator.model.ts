import { PredatorType, Trait, DisciplineID } from './index';

export interface Predator {
  Type: PredatorType;
  Name: string;
  BonusSpecialty: number[];
  SpecialtyChosen: boolean;
  BonusDiscipline: DisciplineID[];
}