import { Pipe, PipeTransform } from '@angular/core';
import { MEDietLevel } from 'src/assets/fodmap';


@Pipe({ name: 'meDietType' })
export class MEDietType implements PipeTransform {
  transform(meDiet: MEDietLevel): string {
    switch (meDiet) {
      case MEDietLevel.FULL:
        return '**';
      case MEDietLevel.SEMI:
        return '*';
      default:
        return '';
    }
  }
}
