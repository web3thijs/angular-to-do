import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenListName'
})
export class ShortenListNamePipe implements PipeTransform {

  transform(value: string, numberOfCharacters?: number): unknown {
    if(value.length < (numberOfCharacters ?? 250)) {
      return value;
    } else {
      return value.slice(0, numberOfCharacters ?? 250)  + "...";
    }
  }
}
