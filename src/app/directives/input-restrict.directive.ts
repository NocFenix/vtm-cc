import { Directive, Input, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModel][vtmInputRestrict]',
  providers: [NgModel]
})
export class VtmInputRestrictDirective {

  constructor(
    private ngModel: NgModel,
  ) { }

  private usCurrencyRegex: RegExp = /^[$]?[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{0,})?$/;
  private readonly alphaAllowedRegex: RegExp = /^[a-zA-Z ]*$/;
  private readonly alphanumericAllowedRegex: RegExp = /[a-zA-Z0-9 ]/i;
  private readonly numbersOnlyAllowedRegex: RegExp = /[0-9]/;
  private readonly numericAllowedRegex: RegExp = /[0-9.]/;
  private readonly currencyAllowedRegex: RegExp = /[0-9,.$]/;
  private readonly currencyNegativeAllowedRegex: RegExp = /[-0-9,.$]/;
  private readonly decimalRegex: RegExp = /[.]/;
  private readonly decimal: string = '.';
  private readonly negativeRegex: RegExp = /[-]/;
  private readonly negative: string = '-';
  private readonly isFirstCharAlpha = /^[a-zA-Z]{1}/;
  private readonly variableNameRegex: RegExp = /^[a-zA-Z0-9_]+$/;
  private readonly numericAndEqualAllowedRegex: RegExp = /[0-9,=]/;

  @Input()
  vtmInputRestrict: 'alpha'|'numeric'|'numberOnly'|'alphanumeric'
    |'currency'|'currencyNegative'|'numericMultiplePeriods'|'variableName'|'decimalPlaces'|'numericAndEqual'|null = null;

  @Input()
  public decimalPlacesRestrict: number = null;

  @HostListener('keypress', ['$event']) restrictInput(e: KeyboardEvent) {

    // back tab space
    if (e.key.length > 1) {
      return true;
    }

    switch (this.vtmInputRestrict) {
      case 'alpha':
        return this.isTypedValid(e, this.alphaAllowedRegex);
      case 'currency':
        return this.isTypedValid(e, this.currencyAllowedRegex, this.decimalRegex, this.decimal);
        case 'currencyNegative':
        return this.isTypedValid(e, this.currencyNegativeAllowedRegex, this.decimalRegex, this.decimal, this.negativeRegex, this.negative);
      case 'numeric':
        return this.isTypedValid(e, this.numericAllowedRegex, this.decimalRegex, this.decimal);
      case 'numericMultiplePeriods':
        return this.isTypedValid(e, this.numericAllowedRegex);
      case 'alphanumeric':
        return this.isTypedValid(e, this.alphanumericAllowedRegex);
      case 'numberOnly':
        return this.isTypedValid(e, this.numbersOnlyAllowedRegex);
      case 'variableName':
        const inputElement = e.target as HTMLInputElement;

        if (inputElement.selectionStart === 0 && !this.isFirstCharAlpha.test(e.key)) {
          return false;
        }

        return this.isTypedValid(e, this.variableNameRegex);
      case 'decimalPlaces':
        if (this.isTypedValid(e, this.numericAllowedRegex) && this.decimalPlacesRestrict != null) {
          return this.isNumberKey(e);
        } else {
          return this.isTypedValid(e, this.numericAllowedRegex);
        }
      case 'numericAndEqual':
        return this.isTypedValid(e, this.numericAndEqualAllowedRegex);
      default:
        return true;
    }
  }

  @HostListener('paste', ['$event']) restrictPaste(e) {
    const inputVal = e.clipboardData.getData('text');

    switch (this.vtmInputRestrict) {
      case 'alpha':
        return this.isPasteValid(inputVal, this.alphaAllowedRegex);
      case 'currency':
        return this.isPasteCurrency(inputVal);
      case 'currencyNegative':
        return this.isPasteCurrency(inputVal);
      case 'numeric':
        return this.isPasteValid(inputVal, this.numericAllowedRegex);
      case 'alphanumeric':
        return this.isPasteValid(inputVal, this.alphanumericAllowedRegex);
      case 'numericAndEqual':
        return this.isTypedValid(e, this.numericAndEqualAllowedRegex);
      default:
        return true;
    }
  }
/**
   * Checks to ensure that the pasted value is valid
   * 
   * @param val the string to test
   * @param r the RegExp containing the valid characters
   */

  isPasteValid(val: string, r: RegExp): boolean {
    let outStr = '';
    for (let i = 0; i < val.length; i++) {
      if (r.test(val.charAt(i))) {
        outStr += val.charAt(i);
      }
    }

    this.ngModel.update.emit(outStr);
    this.ngModel.control.markAsDirty();
    return false;
  }
  /**
   * Checks to ensure that the pressed key is for a valid character
   * optional test for if bound input only contains one of a special character
   * 
   * @param e the KeyboardEvent to compare against
   * @param r the RegExp containing the valid characters
   * @param containsOnlyOneCharacter (optional) the single character to test for uniqueness
   */
  isTypedValid(e: KeyboardEvent, r: RegExp, containsJustOneRegex?: RegExp,
    containsJustOne?: string, containsJustOneNegativeRegex?: RegExp, containsOnlyOneNegative?: string): boolean {
    const firstItem = containsJustOne != null && containsJustOne.length === 1 && containsJustOneRegex.test(e.key);
    const secondItem = containsOnlyOneNegative != null && containsOnlyOneNegative.length === 1 && containsJustOneNegativeRegex.test(e.key);
    if ( firstItem || secondItem){
      const curVal: string = this.ngModel.control.value;

      if (curVal && ((curVal + '').indexOf(containsJustOne) !== -1 || (curVal + '').indexOf(containsOnlyOneNegative) !== -1)) {
        return false;
      }
    }

    return r.test(e.key);
  }

  /**
   * Checks to ensure that the pasted value only contains currency related characters
   *
   * @param val the value to compare against
   */
  isPasteCurrency(val: string): boolean {
    if (this.usCurrencyRegex.test(val)) {
      this.ngModel.update.emit(val);
      this.ngModel.control.markAsDirty();
    } else {
      console.error('Cannot paste invalid currency.');
    }

    return false;
  }

  isNumberKey(evt: KeyboardEvent) {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
      return false;
    } else {
      const curVal: string = this.ngModel.control.value;

      if (curVal) {
        const len = curVal.length;
        const index = curVal.toString().indexOf('.');

        if (index > 0 && charCode === 46) {
          return false;
        }
        if (index > 0) {
          const CharAfterdot = (len) - index;
          if (CharAfterdot > parseInt(this.decimalPlacesRestrict.toString(), null)) {
            return false;
          }
        }
      }
    }
    return true;
 }

}
