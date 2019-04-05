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
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Celerity));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Potence));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Presence));
        break;
      case ClanType.Gangrel:
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Animalism));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Fortitude));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Protean));
        break;
      case ClanType.Malkavian:
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Auspex));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Dominate));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Obfuscate));
        break;
      case ClanType.Nosferatu:
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Animalism));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Obfuscate));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Potence));
        break;
      case ClanType.Toreader:
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Auspex));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Celerity));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Presence));
        break;
      case ClanType.Tremere:
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Auspex));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.BloodSorcery));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Dominate));
        break;
      case ClanType.Ventrue:
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Dominate));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Fortitude));
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.Presence));
        break;
      case ClanType.Caitiff:
        disciplines = this.allDisciplines;
        break;
      case ClanType.ThinBlooded:
        disciplines.push(this.allDisciplines.find(d => d.ID == DisciplineID.ThinBloodAlchemy))
    }
    return disciplines;
  }

  public GetDisciplineByID(id: DisciplineID): Discipline {
    return this.allDisciplines.find(x => x.ID == id);
  }

  private allDisciplines: Discipline[] = [
    {
      ID: DisciplineID.Animalism,
      Name: "Animalism",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.Auspex,
      Name: "Auspex",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.Celerity,
      Name: "Celerity",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.Dominate,
      Name: "Dominate",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.Fortitude,
      Name: "Fortitude",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.Obfuscate,
      Name: "Obfuscate",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.Potence,
      Name: "Potence",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.Presence,
      Name: "Presence",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.Protean,
      Name: "Protean",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.BloodSorcery,
      Name: "Blood Sorcery",
      Description: "",
      Dots: 0,
    },
    {
      ID: DisciplineID.ThinBloodAlchemy,
      Name: "Thin-Blood Alchemy",
      Description: "",
      Dots: 0,
    },
  ]

}
