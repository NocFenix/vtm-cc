import { Trait, ClanType, PredatorType } from './index';

export interface Character {
  Name: string;
  Chronicle?: string;
  Sire?: string;
  Attributes: Trait[];
  Skills: Trait[];
  Clan: ClanType;
  Generation: number;
  Health: number;
  Willpower: number;
  PredatorType: PredatorType;
}
