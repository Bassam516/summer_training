import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallText'
})
export class SmallTextPipe implements PipeTransform {

  transform(desc:string): string|null {
    return desc.split(" ").slice(0,5).join(" ");
  }

}
