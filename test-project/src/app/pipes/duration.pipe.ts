import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'appDuration'
})
export class DurationPipe implements PipeTransform {
  transform(value: number, format: string) {
    let hours = value / 60 / 60;

    let hoursFormated = Math.floor(hours),
        minutesFormated = Math.ceil((hours - Math.floor(hours)) * 60);

    if(format === '(HH MM)') {
      return minutesFormated !== 0 ? `${hoursFormated}h ${minutesFormated}min` : `${hoursFormated}h`
    } else {
      return value;
    }
  }
}
