import { TraitID, TraitType } from './index';

export interface Trait {
  ID: TraitID;
  Type: TraitType;
  Name: string;
  Dots: number;
  IsAttribute: boolean;
}
