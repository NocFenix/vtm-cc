import { Injectable } from '@angular/core';
import { Clan, ClanType } from '../models/index';
import { DisciplineService } from './discipline.service';

@Injectable({
  providedIn: 'root'
})
export class ClansService {

  private allClans: Clan[] = [
    {
      Name: 'Brujah',
      Type: ClanType.Brujah,
      Disciplines: this.discSvc.GetDisciplineByClanType(ClanType.Brujah),
    },
    {
      Name: 'Gangrel',
      Type: ClanType.Gangrel,
      Disciplines: this.discSvc.GetDisciplineByClanType(ClanType.Gangrel),
    },
    {
      Name: 'Malkavian',
      Type: ClanType.Malkavian,
      Disciplines: this.discSvc.GetDisciplineByClanType(ClanType.Malkavian),
    },
    {
      Name: 'Nosferatu',
      Type: ClanType.Nosferatu,
      Disciplines: this.discSvc.GetDisciplineByClanType(ClanType.Nosferatu),
    },
    {
      Name: 'Toreader',
      Type: ClanType.Toreader,
      Disciplines: this.discSvc.GetDisciplineByClanType(ClanType.Toreader),
    },
    {
      Name: 'Tremere',
      Type: ClanType.Tremere,
      Disciplines: this.discSvc.GetDisciplineByClanType(ClanType.Tremere),
    },
    {
      Name: 'Ventrue',
      Type: ClanType.Ventrue,
      Disciplines: this.discSvc.GetDisciplineByClanType(ClanType.Ventrue),
    },
    {
      Name: 'Catiff',
      Type: ClanType.Caitiff,
      Disciplines: this.discSvc.GetDisciplineByClanType(ClanType.Caitiff),
    },
    {
      Name: 'Thin-Blooded',
      Type: ClanType.ThinBlooded,
      Disciplines: this.discSvc.GetDisciplineByClanType(ClanType.ThinBlooded),
    },
  ];

  constructor(
    private discSvc: DisciplineService
  ) {

  }

  /**
   * Returns all Clans
   */
  public GetClans(): Clan[] {
    return this.allClans;
  }

  /**
   * Returns a single Clan for the given ClanType
   * @param clanType Clan Type
   */
  public GetClan(clanType: ClanType): Clan {
    return this.allClans.find(c => c.Type === clanType);
  }

}
