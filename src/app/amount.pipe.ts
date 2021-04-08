import { ComponentFactoryResolver, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MEDietLevel } from 'src/assets/fodmap';
import { MEASUREMENT } from 'src/assets/ingredients';

@Pipe({ name: 'amount' })
export class AmountPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  /** amount is always in ml */
  transform(amount: string, measurement: MEASUREMENT): string {
    if (this.translate.currentLang === 'sv') return amount;

    switch (measurement) {
      case MEASUREMENT.DL:
        /** dl to cups */
        switch (amount) {
          case '1/2':
            return '1/5';
          case '3/5':
            return '1/4';
          case '2/3':
            return '1/4';
          case '3/4':
            return '1/3';
          case '4/5':
            return '1/3';
          case '1':
            return '2/5';
          case '1 1/5':
            return '1/2';
          case '1 1/4':
            return '1/2';
          case '1 1/2':
            return '2/3';
          case '1 4/5':
            return '3/4';
          case '2':
            return '4/5';
          case '2 1/2':
            return '1';
          case '3':
            return '1 1/4';
          case '3 1/2':
            return '1 1/2';
          case '4':
            return '1 4/5';
          case '6':
            return '2 1/2';
          case '8':
            return '3 1/3';
          default:
            return (parseInt(amount) * 0.422675).toFixed(2);
        }
      case MEASUREMENT.L:
        /** l to cups */
        switch (amount) {
          case '1/2':
            return '2';
          case '3/4':
            return '3 1/4';
          case '1':
            return '4 1/4';
          default:
            return (parseInt(amount) * 4.16667).toFixed(2);
        }
      default:
        return amount;
    }
  }
}
