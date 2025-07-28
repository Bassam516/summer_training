import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(produts:any[],searchTerm:string): any[] {
    if(searchTerm) {
      return produts.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    else {
      return produts
    }
  }

}
