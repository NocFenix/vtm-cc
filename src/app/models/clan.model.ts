import { ClanType } from "./index";
import { Discipline } from "./index";

export interface Clan {
  Type: ClanType;
  Name: string;
  Disciplines: Discipline[];
  Bane?: string;

}
