import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMillisecondsToText'
})
export class FormatMillisecondsToTextPipe implements PipeTransform {

  transform(totalMilliseconds: number): any {
    const totalSeconds = Math.round(totalMilliseconds / 1000);
    const totalMinutes: number = Math.floor( totalSeconds / 60 );
    const hours: number = Math.floor( totalMinutes / 60 );
    const minutes: number = Math.floor( totalMinutes % 60 );

    let str = '';
    if ( hours ) {
      str += hours + ' hour';
      if ( hours !== 1 ) {
        str += 's';
      }

      if ( minutes ) {
        str += ', '
      }
    }

    if ( minutes ) {
      str += minutes + ' minute';
      if ( minutes !== 1 ) {
        str += 's';
      }
    }
    return str;
  }

}