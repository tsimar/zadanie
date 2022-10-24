import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpperCasse {
  constructor() {}

  changeToUpperCase(item: string) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }
  changeToLowerCase(item: string) {
    return item.charAt(0).toLowerCase + item.slice(1);
  }
 
}
