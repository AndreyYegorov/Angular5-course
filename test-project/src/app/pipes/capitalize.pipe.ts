import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'appCapitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, symbols: number): string {
    let toUpperCaseSymbols = value.slice(0, symbols).toUpperCase(),
      spareString = value.slice(symbols, value.length);

    return toUpperCaseSymbols + spareString;
  }
}
