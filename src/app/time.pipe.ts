import { Pipe, PipeTransform } from '@angular/core';
import { MEDietLevel } from 'src/assets/fodmap';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  transform(time: number): string {
    if (time < 60) {
      return time + ' min';
    }

    const hours = Math.floor(time / 60);
    const min = time % 60;

    return hours + ' h, ' + min + ' min';
  }
}
