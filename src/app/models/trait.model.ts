import { TraitType } from './index';

export interface Trait {
  Type: TraitType;
  Name: string;
  Dots: number;
  IsAttribute: boolean;
}
