import { TraitType } from './index';
import { Power } from './index';

export interface Discipline {
  ID: DisciplineID;
  Name: string;
  Dots: number;
  Description: string;
  Characteristics?: DisciplineCharacteristics;
  Nicknames?: string[];
  Powers?: Power[];
}

export interface DisciplineCharacteristics {
  Description: string;
  Type: TraitType;
  MasqueradeThreat: string;
  BloodResonance: string;
}

export enum DisciplineID {
  Animalism = 1,
  Auspex = 2,
  Celerity = 3,
  Dominate = 4,
  Fortitude = 5,
  Obfuscate = 6,
  Potence = 7,
  Presence = 8,
  Protean = 9,
  BloodSorcery = 10,
  ThinBloodAlchemy = 11,
}
