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

}
