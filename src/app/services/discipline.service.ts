import { Injectable } from '@angular/core';
import { ClanType, Discipline, TraitType, DisciplineID } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  constructor () {
    
  }

  public GetDisciplineByClanType(type: ClanType): Discipline[] {
    var disciplines: Discipline[] = [];
    switch(type){
      case ClanType.Brujah:
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Celerity));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Potence));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Presence));
        break;
      case ClanType.Gangrel:
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Animalism));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Fortitude));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Protean));
        break;
      case ClanType.Malkavian:
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Auspex));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Dominate));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Obfuscate));
        break;
      case ClanType.Nosferatu:
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Animalism));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Obfuscate));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Potence));
        break;
      case ClanType.Toreader:
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Auspex));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Celerity));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Presence));
        break;
      case ClanType.Tremere:
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Auspex));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.BloodSorcery));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Dominate));
        break;
      case ClanType.Ventrue:
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Dominate));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Fortitude));
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.Presence));
        break;
      case ClanType.Caitiff:
        disciplines = this.allDisciplines;
        break;
      case ClanType.ThinBlooded:
        disciplines.push(this.allDisciplines.find(d => d.DisciplineID == DisciplineID.ThinBloodAlchemy))
    }
    return disciplines;
  }

  private allDisciplines: Discipline[] = [
    {
      DisciplineID: DisciplineID.Animalism,
      Name: "Animalism",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.Auspex,
      Name: "Auspex",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.Celerity,
      Name: "Celerity",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.Dominate,
      Name: "Dominate",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.Fortitude,
      Name: "Fortitude",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.Obfuscate,
      Name: "Obfuscate",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.Potence,
      Name: "Potence",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.Presence,
      Name: "Presence",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.Protean,
      Name: "Protean",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.BloodSorcery,
      Name: "Blood Sorcery",
      Description: "",
      Dots: 0,
    },
    {
      DisciplineID: DisciplineID.ThinBloodAlchemy,
      Name: "Thin-Blood Alchemy",
      Description: "",
      Dots: 0,
    },
  ]

}
