import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'appOnlyTopRated'
})
export class OnlyTopRatedPipe implements PipeTransform {
  transform(items: any[], filter: Boolean) {
    return items.filter((item) => {
      return item.topRated === filter;
    });
  }
}
