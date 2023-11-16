import { Pipe, PipeTransform } from '@angular/core';
import { AdvertisementType } from './models';

@Pipe({
  name: 'advertisementType'
})
export class AdvertisementTypePipe implements PipeTransform {
  private static lookup = ["Flat", "House", "Holiday house", "Building site"];
  transform(value: AdvertisementType): string {
  return AdvertisementTypePipe.lookup[value];
  }
 }
 
