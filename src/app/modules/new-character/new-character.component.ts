import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character, ClanType, Trait, TraitType } from 'src/app/models/index';
import { SelectItem, MessageService } from 'primeng/api';
import { ClansService } from 'src/app/services/clans.service';

@Component({
  selector: 'vtm-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.less']
})
export class NewCharacterComponent implements OnInit {

  public character: Character;

  public clans: SelectItem[] = [];
  public generations: SelectItem[] = [
    {
      label: '16th Gen',
      value: 16
    },
    {
      label: '15th Gen',
      value: 15
    },
    {
      label: '14th Gen',
      value: 14
    },
    {
      label: '13th Gen',
      value: 13
    },
    {
      label: '12th Gen',
      value: 12
    },
    {
      label: '11th Gen',
      value: 11
    },
    {
      label: '10th Gen',
      value: 10
    },
    {
      label: '9th Gen',
      value: 9
    },
    {
      label: '8th Gen',
      value: 8
    },
    {
      label: '7th Gen (Elder)',
      value: 7
    },
    {
      label: '6th Gen (Elder)',
      value: 6
    },
    {
      label: '5th Gen (Methuselah)',
      value: 5,
      disabled: true,
    },
    {
      label: '4th Gen (Methuselah)',
      value: 4,
      disabled: true,
    },
    {
      label: '3rd Gen (Antediluvian)',
      value: 3,
      disabled: true,
    },
    {
      label: '2nd Gen (Enochian)',
      value: 2,
      disabled: true,
    },
    {
      label: '1st Gen (Caine)',
      value: 1,
      disabled: true,
    },
  ];

  public physicalAttr: Trait[] = [];
  public socialAttr: Trait[] = [];
  public mentalAttr: Trait[] = [];

  public physicalSkills: Trait[] = [];
  public socialSkills: Trait[] = [];
  public mentalSkills: Trait[] = [];

  // attributes at creation
  private attrFourDotsAllowed: number = 1;
  private attrThreeDotsAllowed: number = 3;
  private attrTwoDotsAllowed: number = 4;
  private attrOneDotsAllowed: number = 1;

  constructor (
    private charSvc: CharacterService,
    private clanSvc: ClansService,
    private alertSvc: MessageService,
  ) {
    
  }

  ngOnInit() {
    this.character = this.charSvc.GetNewCharacter();
    this.FillAttributesAndSkills();
    this.UpdateClansList();
  }

  private UpdateClansList() {
    this.clans = [];
    var clanList = this.clanSvc.GetClans();
    clanList.forEach(x => {
      this.clans.push({
        label: x.Name,
        value: x.Type
      });
    });
  }

  private FillAttributesAndSkills(): void {
    this.character.Attributes.forEach(a => {
      if (a.Type == TraitType.Physical)
        this.physicalAttr.push(a);
      if (a.Type == TraitType.Social)
        this.socialAttr.push(a);
      if (a.Type == TraitType.Mental)
        this.mentalAttr.push(a);
    });

    this.character.Skills.forEach(a => {
      if (a.Type == TraitType.Physical)
        this.physicalSkills.push(a);
      if (a.Type == TraitType.Social)
        this.socialSkills.push(a);
      if (a.Type == TraitType.Mental)
        this.mentalSkills.push(a);
    });

  }

  public onDotsChange(event: any, attr: Trait): void {
    this.updateAttrDots(attr, +event.value);
  }

  private updateAttrDots(attr: Trait, dots: number) {
    if (attr.IsAttribute) {
      let attrAtFourDots = 0;
      let attrAtThreeDots = 0;
      let attrAtTwoDots = 0;
      let attrAtOneDots = 0;
      this.character.Attributes.forEach(a => {
        if (a.Dots === 4)
          attrAtFourDots++;
        if (a.Dots === 3)
          attrAtThreeDots++;
        if (a.Dots === 2)
          attrAtTwoDots++;
        if (a.Dots === 1)
          attrAtOneDots++;
      });

      switch (dots) {
        case 1:
          if (attrAtOneDots > this.attrOneDotsAllowed) {
            this.alertSvc.add({severity:'warn', summary: 'Invalid Dot Allocation', detail:`Exceeded maximum number of attributes at ${dots}. This will require ST approval if left unchanged.` });
          }
          break;
        case 2:
          if (attrAtTwoDots > this.attrTwoDotsAllowed) {
            this.alertSvc.add({severity:'warn', summary: 'Invalid Dot Allocation', detail:`Exceeded maximum number of attributes at ${dots}. This will require ST approval if left unchanged.` });
          }
          break;
        case 3:
          if (attrAtThreeDots > this.attrThreeDotsAllowed) {
            this.alertSvc.add({severity:'warn', summary: 'Invalid Dot Allocation', detail:`Exceeded maximum number of attributes at ${dots}. This will require ST approval if left unchanged.` });
          }
          break;
        case 4:
          if (attrAtFourDots > this.attrFourDotsAllowed) {
            this.alertSvc.add({severity:'warn', summary: 'Invalid Dot Allocation', detail:`Exceeded maximum number of attributes at ${dots}. This will require ST approval if left unchanged.` });
          }
          break;
        case 5:
          this.alertSvc.add({severity:'warn', summary: 'Invalid Dot Allocation', detail:`Cannot set any attributes to ${dots}. This will require ST approval if left unchanged.` });
          break;
      }
    }
  }

  public checkGenForClan(event: any): void {
    let clan: ClanType = +event.value as ClanType;
    console.log(clan);
    if (clan === ClanType.ThinBlooded) {
      this.alertSvc.add({severity:'warn', summary: 'Thin-Blood Selected', detail:'Thin-Blooded must be higher than 13th Gen. Increasing to 14th Gen.' });
      this.character.Generation = 14;
    }
    else {
      switch (this.character.Generation) {
        case 16:
          this.alertSvc.add({severity:'error', summary: 'Thin-Blood Gen Selected', detail:'16th Gen must be Thin-Blooded. Lowering to 13th Gen.' });
          this.character.Generation = 13;
          break;
        case 15:
        case 14:
          this.alertSvc.add({severity:'warn', summary: 'Thin-Blood Gen Selected', detail:'Higher than 13th Gen is usually Thin-Blooded. This may require ST approval.' });
          break;
        default:
          break;
      }
    }
  }

  public checkClanForGen(event: any): void {
    switch (+event.value) {
      case 16:
        if (this.character.Clan !== ClanType.ThinBlooded) {
          this.alertSvc.add({severity:'error', summary: 'Thin-Blood Gen Selected', detail:'16th Gen must be Thin-Blooded.' });
          this.character.Clan = ClanType.ThinBlooded;
        }
        break;
      case 15:
      case 14:
        if (this.character.Clan !== ClanType.ThinBlooded) {
          this.alertSvc.add({severity:'warn', summary: 'Thin-Blood Gen Selected', detail:'Higher than 13th Gen is usually Thin-Blooded. This may require ST approval if left unchanged.' });
        }
        break;

      case 13:
      case 12:
        break;
      case 11:
      case 10:
      case 9:
      case 8:
        this.alertSvc.add({severity:'warn', summary: 'Low Gen Selected', detail:'Lower than 12th Gen may require ST approval.' });
        break;
      case 7:
      case 6:
        this.alertSvc.add({severity:'error', summary: 'Elder Gen Selected', detail:'Choosing an Elder Generation will require ST approval.' });
        break;
      case 5:
      case 4:
        this.alertSvc.add({severity:'error', summary: 'Methuselah Gen Selected', detail:'You cannot create a character as a Methuselah.' });
        this.character.Generation = 13;
        break;
      case 3:
        this.alertSvc.add({severity:'error', summary: 'Antediluvian Gen Selected', detail:'You cannot create a character as an Antediluvian.' });
        this.character.Generation = 13;
        break;
      case 2:
        this.alertSvc.add({severity:'error', summary: 'Enochian Gen Selected', detail:'You cannot create a character as an Enochian.' });
        this.character.Generation = 13;
        break;
      case 1:
        this.alertSvc.add({severity:'error', summary: 'Caine Selected', detail:'You cannot create a character as Caine.' });
        this.character.Generation = 13;
        break;
    }      
  }

}
