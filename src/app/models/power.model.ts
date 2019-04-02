import { DicePool } from "./index";

export interface Power {
  Name: string;
  Level: number;
  Cost: string;
  Description: string;
  DicePool?: DicePool[];
  System?: string;
  Duration?: string;
}
