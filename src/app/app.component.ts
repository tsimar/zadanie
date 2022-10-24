import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  DoCheck,
} from '@angular/core';
import { ApicallService } from './services/apicall.service';
import { UpperCasse } from './utils/upperCasse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular app';

  devices: any = [];
  devicesImg: any = ' ';
  selected: string = '';

  constructor(private service: ApicallService, private utils: UpperCasse) {}

  ngOnInit() {
    this.service.getTodos().subscribe((response: any) => {
      for (let itemMess in response.message) {
        try {
          let itemMessArray = response.message[itemMess];
          if (itemMessArray.length > 0) {
            for (let item in itemMessArray) {
              let race = this.utils.changeToUpperCase(itemMess);
              this.devices.push(
                race + ' ' + this.utils.changeToUpperCase(itemMessArray[item])
              );
            }
          } else {
            this.devices.push(this.utils.changeToUpperCase(itemMess));
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  myFunc(sel: string) {
    let race = sel.toLowerCase().split(" ",1);
    this.service.getTodosImg(race).subscribe((response: any) => {
      this.devicesImg = response.message;
    });
  }
}
